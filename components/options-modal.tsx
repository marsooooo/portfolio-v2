"use client"

import { Settings } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import Image from "next/image"

export function OptionsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()

  const languages = [
    { code: "en", label: "English", flag: "/assets/flagEN.png" },
    { code: "fr", label: "Français", flag: "/assets/flagFR.png" },
  ] as const

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-center w-10 h-10 border rounded-[5px] transition-colors cursor-pointer z-20 ${
          theme === "light"
            ? "border-[#e0e0e0] bg-white hover:bg-[#f5f5f5]"
            : "border-[#111] bg-[#111] hover:bg-[#303030]"
        }`}
        aria-label="Options"
      >
        <Settings className={`w-5 h-5 ${theme === "light" ? "text-[#333]" : "text-white"}`} />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className={`max-w-md ${
            theme === "light" ? "bg-white border-[#e0e0e0] text-[#333]" : "bg-[#1a1a1a] border-[#333] text-white"
          }`}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Settings</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-6 mt-4">
            {/* Language Switch */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={language === "en" ? languages[0].flag : languages[1].flag}
                  alt={language === "en" ? languages[0].label : languages[1].label}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-cover"
                />
                <div>
                  <div className="font-semibold">Language</div>
                  <div className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                    {language === "en" ? "English" : "Français"}
                  </div>
                </div>
              </div>
              <Switch checked={language === "fr"} onCheckedChange={(checked) => setLanguage(checked ? "fr" : "en")} />
            </div>

            {/* Theme Switch */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Theme</div>
                <div className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </div>
              </div>
              <Switch checked={theme === "light"} onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
