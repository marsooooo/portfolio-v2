import type React from "react"
import type { Metadata } from "next"
import { Albert_Sans } from "next/font/google"
import "./globals.css"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
  variable: "--font-albert-sans",
})

export const metadata: Metadata = {
  title: "Tison Marceau Portfolio",
  description: "Full stack Web Developer",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={albertSans.className}>{children}</body>
    </html>
  )
}
