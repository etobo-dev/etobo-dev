import BrandIcon from "@/components/BrandIcon";
import Button from "@/components/Button";
import ProjectTechStack from "@/components/ProjectTechStack";
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
    <article className="rounded-2xl border border-border bg-white p-4 sm:p-5">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${project.iconBackground} ${project.iconColor}`}
        >
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <h3 className="min-w-0 break-words text-base font-bold leading-tight text-charcoal sm:text-lg">
          {project.title[locale]}
        </h3>
      </div>

      <p className="mt-2.5 break-words text-sm leading-snug text-body">
        {project.description[locale]}
      </p>

      <ProjectTechStack
        techStack={project.techStack}
        showMoreLabel={dict.projects.showMoreTech}
        showLessLabel={dict.projects.showLessTech}
      />

      <div className="mt-3.5 flex flex-row flex-wrap gap-2">
        <Button
          href={siteHref}
          variant="primary"
          external
          className="min-h-9 px-3.5 py-1.5 text-xs sm:min-h-11 sm:px-5 sm:py-2.5 sm:text-sm"
          icon={<ExternalLink size={14} />}
        >
          {dict.projects.viewSite}
        </Button>
        <Button
          href={repoHref}
          variant="secondary"
          external
          className="min-h-9 px-3.5 py-1.5 text-xs sm:min-h-11 sm:px-5 sm:py-2.5 sm:text-sm"
          icon={<BrandIcon brand={getRepoBrand(project.repo)} size={14} />}
        >
          {dict.projects.viewRepo}
        </Button>
      </div>
    </article>
  );
}
