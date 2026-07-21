"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProfilePhotoProps = {
  name: string;
};

export default function ProfilePhoto({ name }: ProfilePhotoProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-offset-2 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta touch-manipulation"
        aria-label={`${name} — enlarge photo`}
      >
        <Image
          src="/profile.png"
          alt={name}
          fill
          sizes="56px"
          className="object-cover object-top"
          priority
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal/45 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-card sm:h-56 sm:w-56"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/profile.png"
              alt={name}
              fill
              sizes="224px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
