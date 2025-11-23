"use client"

import Image from "next/image"
import type { Project } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
  coverImage?: string
}

const getTechColor = (tech: string) => {
  const t = tech.toLowerCase()
  if (t.includes("react")) return "bg-[#61DAFB]/20 text-[#61DAFB]"
  if (t.includes("node") || t.includes("express")) return "bg-[#339933]/20 text-[#339933]"
  if (t.includes("php")) return "bg-[#777BB4]/20 text-[#777BB4]"
  if (t.includes("typescript")) return "bg-[#3178C6]/20 text-[#3178C6]"
  if (t.includes("godot")) return "bg-[#478CBF]/20 text-[#478CBF]"
  if (t.includes("sql") || t.includes("database")) return "bg-[#4479A1]/20 text-[#4479A1]"
  if (t.includes("tailwind")) return "bg-[#38B2AC]/20 text-[#38B2AC]"
  if (t.includes("docker")) return "bg-[#0DB7ED]/20 text-[#0DB7ED]"
  return "bg-white/10 text-gray-300"
}

export function ProjectCard({ project, onClick, coverImage }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <div
      className="flex flex-row w-full h-auto min-h-[120px] md:min-h-[150px] rounded-lg bg-[#323232] grayscale hover:grayscale-0 hover:bg-[#141414] transition-all duration-300 cursor-pointer group overflow-hidden shrink-0"
      onClick={() => onClick(project)}
    >
      <div className="w-[100px] md:w-[150px] shrink-0 relative h-full min-h-[120px] md:min-h-[150px]">
        <Image
          src={coverImage || project.image || "/placeholder.svg"}
          alt={t(project.titleKey)}
          fill
          className="object-cover rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-center px-4 py-2 w-full gap-2">
        <h2 className="text-white font-bold text-base md:text-xl">{t(project.titleKey)}</h2>
        <p className="text-[#d6d6d6] text-sm md:text-base m-0 line-clamp-2">{t(project.descKey)}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
