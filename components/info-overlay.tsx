"use client"

import { useLanguage } from "@/contexts/language-context"

export function InfoOverlay() {
  const { t } = useLanguage()

  return (
    <div className="absolute top-[40px] left-0 w-full text-center md:text-left md:top-[50px] md:left-[50px] z-10 flex flex-col">
      <h1 className="text-white font-thin m-0 text-2xl md:text-3xl">{t("title").replace(" Portfolio", "")}</h1>
      {/* Assuming title in data is "Tison Marceau Portfolio" but design has "Tison Marceau" then "Web Developer" */}
      <h2 className="text-white font-medium m-0 text-xl md:text-2xl">{t("webdev")}</h2>
      <h5 className="text-white font-black m-0 text-sm md:text-base">{t("design")}</h5>
    </div>
  )
}
