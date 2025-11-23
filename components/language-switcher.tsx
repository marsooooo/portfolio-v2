"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const languages = [
    { code: "en", label: "English", flag: "/assets/flagEN.png" },
    { code: "fr", label: "Français", flag: "/assets/flagFR.png" },
  ] as const

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  return (
    <div className="absolute top-[5px] right-[40px] z-50 hidden md:block" ref={containerRef}>
      <div
        className="flex items-center gap-1.5 border border-[#111] p-0.5 rounded-[5px] bg-[#111] cursor-pointer select-none min-w-[90px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={currentLang.flag || "/placeholder.svg"}
          alt={currentLang.label}
          width={20}
          height={20}
          className="w-5 h-5 object-cover"
        />
        <span className="text-white text-sm">{currentLang.label}</span>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 w-full border border-[#111] border-t-0 bg-[#111] rounded-b-[5px] overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center gap-1.5 px-2 py-1.5 cursor-pointer hover:bg-[#303030] transition-colors"
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
            >
              <Image
                src={lang.flag || "/placeholder.svg"}
                alt={lang.label}
                width={20}
                height={20}
                className="w-5 h-5 object-cover"
              />
              <span className="text-white text-sm">{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
