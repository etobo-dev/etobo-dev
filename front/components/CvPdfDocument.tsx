"use client";

import { useEffect, useRef, useState } from "react";

type CvPdfDocumentProps = {
  src: string;
  title: string;
};

type PdfLinkAnnotation = {
  subtype?: string;
  url?: string;
  rect?: [number, number, number, number];
};

function normalizeRect(rect: number[]): {
  left: number;
  top: number;
  width: number;
  height: number;
} {
  const [x1, y1, x2, y2] = rect;
  const left = Math.min(x1, x2);
  const top = Math.min(y1, y2);
  const width = Math.abs(x2 - x1);
  const height = Math.abs(y2 - y1);
  return { left, top, width, height };
}

export default function CvPdfDocument({ src, title }: CvPdfDocumentProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedWidthRef = useRef(0);
  const renderTokenRef = useRef(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const frame = frameRef.current;
    const container = containerRef.current;
    if (!frame || !container) return;

    let disposed = false;
    const root = container;
    renderedWidthRef.current = 0;
    root.replaceChildren();
    setLoading(true);
    setError(false);

    async function renderPdf(width: number) {
      if (disposed || width <= 0) return;
      if (width === renderedWidthRef.current && root.childElementCount > 0) {
        return;
      }

      const token = ++renderTokenRef.current;
      renderedWidthRef.current = width;
      setLoading(true);
      setError(false);
      root.replaceChildren();

      try {
        const pdfjs = await import("pdfjs-dist");
        if (disposed || token !== renderTokenRef.current) return;

        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const pdf = await pdfjs.getDocument({ url: src }).promise;
        if (disposed || token !== renderTokenRef.current) return;

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber);
          if (disposed || token !== renderTokenRef.current) return;

          const unscaled = page.getViewport({ scale: 1 });
          const scale = width / unscaled.width;
          const viewport = page.getViewport({ scale });
          const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

          const pageFrame = document.createElement("div");
          pageFrame.className = "relative w-full";
          pageFrame.style.aspectRatio = `${viewport.width} / ${viewport.height}`;

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width * pixelRatio);
          canvas.height = Math.floor(viewport.height * pixelRatio);
          canvas.className = "absolute inset-0 block h-full w-full bg-white";
          canvas.setAttribute("aria-label", `${title} — page ${pageNumber}`);

          const context = canvas.getContext("2d");
          if (!context) continue;

          context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
          await page.render({
            canvas,
            canvasContext: context,
            viewport,
          }).promise;
          if (disposed || token !== renderTokenRef.current) return;

          pageFrame.appendChild(canvas);

          const annotations = (await page.getAnnotations({
            intent: "display",
          })) as PdfLinkAnnotation[];
          if (disposed || token !== renderTokenRef.current) return;

          for (const annotation of annotations) {
            if (annotation.subtype !== "Link" || !annotation.url || !annotation.rect) {
              continue;
            }

            const [x1, y1, x2, y2] = annotation.rect;
            const [vx1, vy1] = viewport.convertToViewportPoint(x1, y1);
            const [vx2, vy2] = viewport.convertToViewportPoint(x2, y2);
            const { left, top, width: linkWidth, height: linkHeight } =
              normalizeRect([vx1, vy1, vx2, vy2]);

            const link = document.createElement("a");
            link.href = annotation.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.className = "absolute z-10";
            link.style.left = `${(left / viewport.width) * 100}%`;
            link.style.top = `${(top / viewport.height) * 100}%`;
            link.style.width = `${(linkWidth / viewport.width) * 100}%`;
            link.style.height = `${(linkHeight / viewport.height) * 100}%`;
            link.setAttribute("aria-label", annotation.url);

            pageFrame.appendChild(link);
          }

          root.appendChild(pageFrame);
        }

        if (token === renderTokenRef.current) {
          setLoading(false);
        }
      } catch {
        if (!disposed && token === renderTokenRef.current) {
          renderedWidthRef.current = 0;
          setError(true);
          setLoading(false);
        }
      }
    }

    let resizeTimer: number | undefined;

    const resizeObserver = new ResizeObserver((entries) => {
      const nextWidth = Math.floor(entries[0]?.contentRect.width ?? 0);
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        void renderPdf(nextWidth);
      }, 150);
    });

    resizeObserver.observe(frame);

    return () => {
      disposed = true;
      if (resizeTimer !== undefined) {
        window.clearTimeout(resizeTimer);
      }
      resizeObserver.disconnect();
    };
  }, [src, title]);

  return (
    <div
      ref={frameRef}
      className="w-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
    >
      {loading && (
        <div className="flex min-h-48 items-center justify-center px-4 py-10 text-sm text-body-muted">
          Loading…
        </div>
      )}
      {error && (
        <div className="flex min-h-48 items-center justify-center px-4 py-10 text-sm text-body-muted">
          Unable to preview the PDF in this browser.
        </div>
      )}
      <div
        ref={containerRef}
        className={`w-full ${loading || error ? "hidden" : "block"}`}
      />
    </div>
  );
}
