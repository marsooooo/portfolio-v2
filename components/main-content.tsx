"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { InfoOverlay } from "@/components/info-overlay"
import { HomeSection } from "@/components/sections/home-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ProjectModal } from "@/components/project-modal"
import type { Project } from "@/lib/data"
import { useTheme } from "@/contexts/theme-context"

interface MainContentProps {
  projectImages?: Record<string, string[]>
}

type Section = "home" | "section1" | "section2" | "section3"

export function MainContent({ projectImages = {} }: MainContentProps) {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { theme } = useTheme()

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const selectedProjectImages = selectedProject ? projectImages[selectedProject.id] || [] : []

  return (
    <main className="relative w-screen h-screen overflow-hidden box-border font-sans" data-theme={theme}>
      <AnimatedBackground />

      <div
        className={`absolute top-0 left-0 w-full h-full border-[40px] ${
          theme === "light" ? "border-[#f5f5f5]" : "border-[#141414]"
        } ${
          theme === "light" ? "shadow-[inset_0_0_0_1px_#333]" : "shadow-[inset_0_0_0_1px_#D6D6D6]"
        } flex justify-center items-center z-10 pointer-events-none hidden md:flex`}
      >
        {/* This div creates the border effect on desktop */}
      </div>

      {/* Content Wrapper that sits above background but below border on desktop */}
      <div className="w-full h-full flex justify-center items-center z-20 relative">
        <InfoOverlay />

        <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

        <div className="flex justify-center w-full h-full overflow-hidden z-[1]">
          <HomeSection isActive={activeSection === "home"} />
          <AboutSection isActive={activeSection === "section1"} />
          <ProjectsSection
            isActive={activeSection === "section2"}
            onProjectClick={handleProjectClick}
            projectImages={projectImages}
          />
          <ContactSection isActive={activeSection === "section3"} />
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={selectedProjectImages}
      />
    </main>
  )
}
