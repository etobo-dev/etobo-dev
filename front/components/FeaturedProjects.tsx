import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { getFeaturedProjects } from "@/data/projects";
import type { Dictionary, Locale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/i18n";

type FeaturedProjectsProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function FeaturedProjects({
  locale,
  dict,
}: FeaturedProjectsProps) {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader
        title={dict.sections.featuredProjects}
        linkLabel={dict.sections.viewAllProjects}
        linkHref={getLocalizedPath(locale, "projects")}
      />
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            dict={dict}
          />
        ))}
      </div>
    </section>
  );
}
