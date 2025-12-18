"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ContactSectionProps {
  isActive: boolean
}

export function ContactSection({ isActive }: ContactSectionProps) {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Message sent!")
  }

  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[40%] transition-all duration-500 z-10",
        theme === "light" ? "text-black" : "text-white",
        isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[20px]",
      )}
    >
      <h1 className="text-4xl md:text-6xl font-black mb-8 text-center">{t("contact_header")}</h1>
      <div className={`${theme === "light" ? "bg-[#e8e8e8]" : "bg-[#222]"} p-8 w-full md:w-[80%] mx-auto`}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder={t("first_name")}
            required
            className={`w-full p-3 font-bold focus:outline-none focus:ring-1 ${
              theme === "light"
                ? "border border-black bg-white text-black placeholder:text-gray-500 focus:ring-black"
                : "border border-white bg-[#141414cd] text-white placeholder:text-gray-400 focus:ring-white"
            }`}
          />
          <input
            type="text"
            placeholder={t("last_name")}
            required
            className={`w-full p-3 font-bold focus:outline-none focus:ring-1 ${
              theme === "light"
                ? "border border-black bg-white text-black placeholder:text-gray-500 focus:ring-black"
                : "border border-white bg-[#141414cd] text-white placeholder:text-gray-400 focus:ring-white"
            }`}
          />
          <input
            type="email"
            placeholder={t("email")}
            required
            className={`w-full p-3 font-bold focus:outline-none focus:ring-1 ${
              theme === "light"
                ? "border border-black bg-white text-black placeholder:text-gray-500 focus:ring-black"
                : "border border-white bg-[#141414cd] text-white placeholder:text-gray-400 focus:ring-white"
            }`}
          />
          <textarea
            placeholder={t("message")}
            rows={5}
            required
            className={`w-full p-3 font-bold resize-none focus:outline-none focus:ring-1 ${
              theme === "light"
                ? "border border-black bg-white text-black placeholder:text-gray-500 focus:ring-black"
                : "border border-white bg-[#141414cd] text-white placeholder:text-gray-400 focus:ring-white"
            }`}
          />

          <div className="flex flex-row items-center gap-4 w-full justify-between mt-2">
            <button
              type="submit"
              className={`border-none h-10 px-6 cursor-pointer font-black transition-colors ${
                theme === "light"
                  ? "bg-black text-white hover:bg-gray-700"
                  : "bg-[#D6D6D6] text-[#141414] hover:bg-[#666]"
              }`}
            >
              {t("send")}
            </button>

            <div className="flex gap-4">
              <a
                href="https://github.com/marsooooo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={theme === "light" ? "/assets/git_black.png" : "/assets/git_white.png"}
                  alt="Github"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/marceau-tison-0bbb612a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={theme === "light" ? "/assets/linkedin_black.png" : "/assets/linkedin_white.webp"}
                  alt="Linkedin"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
