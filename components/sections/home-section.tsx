"use client"

import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

interface HomeSectionProps {
  isActive: boolean
}

export function HomeSection({ isActive }: HomeSectionProps) {
  const { t } = useLanguage()

  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[40%] transition-all duration-500 flex flex-col items-center justify-center text-center text-white z-10",
        isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[20px]",
      )}
    >
      <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">{t("welcome")}</h1>
      <p className="text-xl md:text-2xl font-light drop-shadow-md max-w-2xl">{t("discover")}</p>
    </div>
  )
}
