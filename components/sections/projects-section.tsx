"use client"

import { useLanguage } from "@/contexts/language-context"
import { ProjectCard } from "@/components/project-card"
import { projects, type Project } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProjectsSectionProps {
  isActive: boolean
  onProjectClick: (project: Project) => void
  projectImages?: Record<string, string[]>
}

export function ProjectsSection({ isActive, onProjectClick, projectImages = {} }: ProjectsSectionProps) {
  const { t } = useLanguage()

  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[40%] transition-all duration-500 text-white z-10",
        isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[20px]",
      )}
    >
      <h1 className="text-4xl md:text-6xl font-black mb-8 text-center">{t("projects_header")}</h1>
      <div className="flex flex-col gap-4 max-h-[50vh] md:max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
        {projects.map((project) => {
          // If dynamic images exist, use the first one (which should be _0 based on sort)
          // Otherwise fallback to static definition or placeholder
          const dynamicImages = projectImages[project.id]
          const coverImage = dynamicImages && dynamicImages.length > 0 ? dynamicImages[0] : project.image

          return <ProjectCard key={project.id} project={project} onClick={onProjectClick} coverImage={coverImage} />
        })}
      </div>
    </div>
  )
}
