import BrandIcon from "@/components/BrandIcon";
import Button from "@/components/Button";
import type { Project } from "@/data/projects";
import type { Dictionary, Locale } from "@/lib/i18n";
import { buildOutboundUrl } from "@/lib/utm";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  dict: Dictionary;
};

function getRepoBrand(repoUrl: string): "github" | "gitlab" {
  return repoUrl.includes("gitlab.com") ? "gitlab" : "github";
}

export default function ProjectCard({
  project,
  locale,
  dict,
}: ProjectCardProps) {
  const Icon = project.icon;
  const siteHref = buildOutboundUrl(project.site);
  const repoHref = buildOutboundUrl(project.repo);

  return (
    <article className="flex min-w-0 items-start gap-4 rounded-2xl border border-border bg-white p-4 sm:p-5">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${project.iconBackground} ${project.iconColor}`}
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="min-w-0 break-words text-base font-bold text-charcoal sm:text-lg">
          {project.title[locale]}
        </h3>
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
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            href={siteHref}
            variant="primary"
            external
            className="!px-4 !py-2 text-xs sm:text-sm"
            icon={<ExternalLink size={14} />}
          >
            {dict.projects.viewSite}
          </Button>
          <Button
            href={repoHref}
            variant="secondary"
            external
            className="!px-4 !py-2 text-xs sm:text-sm"
            icon={<BrandIcon brand={getRepoBrand(project.repo)} size={14} />}
          >
            {dict.projects.viewRepo}
          </Button>
        </div>
      </div>
    </article>
  );
}
