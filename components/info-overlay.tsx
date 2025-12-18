"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { OptionsButton } from "@/components/options-modal"

export function InfoOverlay() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <div className="absolute top-[40px] left-0 w-full md:top-[50px] md:left-[50px] z-10 flex flex-col">
      <div className="flex justify-center md:justify-between items-start w-full px-[40px] md:px-0 md:w-auto md:mr-[50px]">
        <div className="text-center md:text-left">
          <h1 className={`${theme === "light" ? "text-[#333]" : "text-white"} font-thin m-0 text-2xl md:text-3xl`}>
            {t("title").replace(" Portfolio", "")}
          </h1>
          <h2 className={`${theme === "light" ? "text-[#333]" : "text-white"} font-medium m-0 text-xl md:text-2xl`}>
            {t("webdev")}
          </h2>
        </div>

        <div className="absolute right-[35px] top-0 md:relative md:mr-4 md:top-auto flex-shrink-0">
          <OptionsButton />
        </div>
      </div>
    </div>
  )
}
