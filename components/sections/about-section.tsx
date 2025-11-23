"use client"

import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

interface AboutSectionProps {
  isActive: boolean
}

export function AboutSection({ isActive }: AboutSectionProps) {
  const { t } = useLanguage()

  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[40%] transition-all duration-500 text-white z-10",
        isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[20px]",
      )}
    >
      <h1 className="text-4xl md:text-6xl font-black mb-8 text-center">{t("about_me_header")}</h1>
      <div className="space-y-6">
        <p className="text-lg md:text-2xl font-bold">{t("about_text")}</p>
        <p className="text-base md:text-xl font-thin">{t("about_text2")}</p>
        <p className="text-lg md:text-2xl font-normal">{t("about_text3")}</p>
        <p className="text-base md:text-xl font-thin">{t("about_text4")}</p>
      </div>
    </div>
  )
}
