"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import type { Project } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  images?: string[]
}

const getTechColor = (tech: string, theme: "light" | "dark") => {
  const t = tech.toLowerCase()
  if (theme === "light") {
    if (t.includes("react")) return "bg-[#61DAFB]/30 text-[#0D7C9E]"
    if (t.includes("next")) return "bg-[#B0B6BF]/30 text-[#000000]"
    if (t.includes("node") || t.includes("express")) return "bg-[#339933]/30 text-[#1A5E1A]"
    if (t.includes("php")) return "bg-[#777BB4]/30 text-[#474A75]"
    if (t.includes("typescript")) return "bg-[#3178C6]/30 text-[#1A4573]"
    if (t.includes("godot")) return "bg-[#478CBF]/30 text-[#2A5473]"
    if (t.includes("sql") || t.includes("database") || t.includes("mysql") || t.includes("postgresql"))
      return "bg-[#4479A1]/30 text-[#264559]"
    if (t.includes("tailwind")) return "bg-[#38B2AC]/30 text-[#1F6662]"
    return "bg-[#333]/20 text-[#000000]"
  } else {
    if (t.includes("react")) return "bg-[#61DAFB]/20 text-[#61DAFB]"
    if (t.includes("next")) return "bg-[#B0B6BF]/20 text-[#B0B6BF]"
    if (t.includes("node") || t.includes("express")) return "bg-[#339933]/20 text-[#339933]"
    if (t.includes("php")) return "bg-[#777BB4]/20 text-[#777BB4]"
    if (t.includes("typescript")) return "bg-[#3178C6]/20 text-[#3178C6]"
    if (t.includes("godot")) return "bg-[#478CBF]/20 text-[#478CBF]"
    if (t.includes("sql") || t.includes("database") || t.includes("mysql") || t.includes("postgresql"))
      return "bg-[#4479A1]/20 text-[#4479A1]"
    if (t.includes("tailwind")) return "bg-[#38B2AC]/20 text-[#38B2AC]"
    return "bg-white/10 text-gray-300"
  }
}

export function ProjectModal({ project, isOpen, onClose, images = [] }: ProjectModalProps) {
  const { t } = useLanguage()
  const { theme } = useTheme()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const displayImages = images.length > 0 ? images : [project.image || "/placeholder.svg"]

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal - Improved background visibility */}
      <div
        className={`relative w-[90%] h-[90%] md:w-3/4 md:h-3/4 ${
          theme === "light" ? "bg-white text-[#333]" : "bg-[#141414] text-[#d6d6d6]"
        } shadow-xl rounded-xl overflow-hidden flex flex-col-reverse md:flex-row p-5 gap-5 z-[1001]`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 ${
            theme === "light" ? "text-[#333] hover:text-black" : "text-[#d6d6d6] hover:text-white"
          } transition-colors z-10 bg-black/20 p-1 rounded-full md:bg-transparent md:p-0`}
        >
          <X size={24} />
        </button>

        {/* Image Side (Left on Desktop, Bottom on Mobile) */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-4">
          {displayImages.map((img, idx) => (
            <div key={idx} className="relative w-full">
              <Image
                src={img || "/placeholder.svg"}
                alt={`${t(project.details.titleKey)} - ${idx + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Content Side (Right on Desktop, Top on Mobile) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="pr-6">
            <h2 className={`text-2xl md:text-4xl font-black mb-4 ${theme === "light" ? "text-black" : "text-white"}`}>
              {t(project.details.titleKey)}
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className={`text-xs px-2 py-1 rounded-full font-medium ${getTechColor(tech, theme)}`}>
                  {tech}
                </span>
              ))}
            </div>

            {project.details.descriptionKeys?.map((key, index) => (
              <p
                key={index}
                className={`mb-4 text-base md:text-lg ${theme === "light" ? "text-[#333]" : "text-[#d6d6d6]"}`}
              >
                {t(key)}
              </p>
            ))}

            {project.details.durationLabelKey && (
              <p className="mb-4">
                <strong className={theme === "light" ? "text-black" : "text-white"}>
                  {t(project.details.durationLabelKey)}
                </strong>{" "}
                {t(project.details.durationKey || "")}
              </p>
            )}

            {project.details.link && (
              <div className="mt-6">
                {project.details.link.url.includes("github") ? (
                  <a
                    href={project.details.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={theme === "light" ? "/assets/git_black.png" : "/assets/git_white.png"}
                      alt="Github"
                      width={30}
                      height={30}
                    />
                  </a>
                ) : (
                  <a
                    href={project.details.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      theme === "light" ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                    } underline`}
                  >
                    {project.details.link.textKey ? t(project.details.link.textKey) : "Link"}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
