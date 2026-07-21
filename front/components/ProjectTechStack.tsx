"use client";

import { useState } from "react";

type ProjectTechStackProps = {
  techStack: string[];
  showMoreLabel: string;
  showLessLabel: string;
  previewLimit?: number;
};

export default function ProjectTechStack({
  techStack,
  showMoreLabel,
  showLessLabel,
  previewLimit = 6,
}: ProjectTechStackProps) {
  const [expanded, setExpanded] = useState(false);
  const hasOverflow = techStack.length > previewLimit;
  const visibleTech =
    expanded || !hasOverflow
      ? techStack
      : techStack.slice(0, previewLimit);
  const hiddenCount = techStack.length - previewLimit;

  return (
    <div className="mt-2.5 flex flex-wrap gap-1.5">
      {visibleTech.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-pill px-2.5 py-0.5 text-xs font-medium text-charcoal-soft"
        >
          {tech}
        </span>
      ))}
      {hasOverflow && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-medium text-terracotta transition-colors hover:border-terracotta/40 hover:bg-terracotta/5 touch-manipulation"
          aria-expanded={expanded}
        >
          {expanded
            ? showLessLabel
            : showMoreLabel.replace("{count}", String(hiddenCount))}
        </button>
      )}
    </div>
  );
}
