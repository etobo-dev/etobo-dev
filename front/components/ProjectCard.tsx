import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import type { Dictionary, Locale } from "@/lib/i18n";
import { buildOutboundUrl } from "@/lib/utm";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
};

export default function ProjectCard({
  project,
  locale,
  dict,
  compact = false,
}: ProjectCardProps) {
  const Icon = project.icon;
  const href = buildOutboundUrl(project.href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 items-start gap-4 rounded-2xl border border-border bg-white p-4 transition-shadow hover:shadow-soft sm:p-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dusty-rose text-terracotta">
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 break-words text-base font-bold text-charcoal sm:text-lg">
            {project.title[locale]}
          </h3>
          <ArrowRight
            size={18}
            className="shrink-0 text-terracotta transition-transform group-hover:translate-x-0.5 sm:hidden"
          />
        </div>
        <p className="mt-1.5 break-words text-sm leading-relaxed text-body">
          {project.description[locale]}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-pill px-2.5 py-0.5 text-xs font-medium text-charcoal-soft"
            >
              {tech}
            </span>
          ))}
        </div>
        {!compact && (
          <span className="mt-4 hidden items-center gap-1 text-sm font-medium text-terracotta sm:inline-flex">
            {dict.projects.viewProject}
          </span>
        )}
      </div>

      {compact && (
        <ArrowRight
          size={18}
          className="mt-1 shrink-0 text-terracotta transition-transform group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
