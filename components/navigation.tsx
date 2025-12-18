"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

type Section = "home" | "section1" | "section2" | "section3"

interface NavigationProps {
  activeSection: Section
  onNavigate: (section: Section) => void
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col absolute left-[5%] top-1/2 -translate-y-1/2 z-20">
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => onNavigate("section1")}
            className={cn(
              `text-left italic font-thin text-2xl transition-colors ${
                theme === "light" ? "text-[#333] hover:text-black" : "text-white hover:text-gray-300"
              }`,
              activeSection === "section1" && `${theme === "light" ? "text-black" : "text-white"} font-normal`,
            )}
          >
            {t("about_me")}
          </button>
          <button
            onClick={() => onNavigate("section2")}
            className={cn(
              `text-left italic font-thin text-2xl transition-colors ${
                theme === "light" ? "text-[#333] hover:text-black" : "text-white hover:text-gray-300"
              }`,
              activeSection === "section2" && `${theme === "light" ? "text-black" : "text-white"} font-normal`,
            )}
          >
            {t("my_projects")}
          </button>
          <button
            onClick={() => onNavigate("section3")}
            className={cn(
              `text-left italic font-thin text-2xl transition-colors ${
                theme === "light" ? "text-[#333] hover:text-black" : "text-white hover:text-gray-300"
              }`,
              activeSection === "section3" && `${theme === "light" ? "text-black" : "text-white"} font-normal`,
            )}
          >
            {t("contact")}
          </button>
        </nav>
      </div>

      {/* Home Button (Desktop) */}
      <div className="hidden md:flex absolute bottom-[50px] left-[50px] z-20">
        <button onClick={() => onNavigate("home")} className="hover:opacity-80 transition-opacity">
          <svg width="30" height="32" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.75 22.5V56.25H19.5V41.25C19.5 37.1079 22.8579 33.75 27 33.75C31.1421 33.75 34.5 37.1079 34.5 41.25V56.25H53.25V22.5L27 0L0.75 22.5Z"
              fill={theme === "light" ? "#333" : "#D6D6D6"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-transparent p-5 z-50 flex justify-center w-full">
        <nav className="flex justify-around w-full max-w-md">
          <button
            onClick={() => onNavigate("section1")}
            className={`text-lg ${theme === "light" ? "text-[#333]" : "text-white"}`}
          >
            {t("about_me")}
          </button>
          <button
            onClick={() => onNavigate("section2")}
            className={`text-lg ${theme === "light" ? "text-[#333]" : "text-white"}`}
          >
            {t("my_projects")}
          </button>
          <button
            onClick={() => onNavigate("section3")}
            className={`text-lg ${theme === "light" ? "text-[#333]" : "text-white"}`}
          >
            {t("contact")}
          </button>
        </nav>
      </div>

      {/* Home Button (Mobile) */}
      <div className="md:hidden absolute top-[40px] left-[40px] opacity-75 z-20">
        <button onClick={() => onNavigate("home")}>
          <svg width="25" height="25" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.75 22.5V56.25H19.5V41.25C19.5 37.1079 22.8579 33.75 27 33.75C31.1421 33.75 34.5 37.1079 34.5 41.25V56.25H53.25V22.5L27 0L0.75 22.5Z"
              fill={theme === "light" ? "#333" : "#D6D6D6"}
            />
          </svg>
        </button>
      </div>
    </>
  )
}
