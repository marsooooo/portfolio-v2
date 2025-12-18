import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { MainContent } from "@/components/main-content"
import { getProjectImages } from "@/lib/project-images"

export default async function Home() {
  const projectImages = await getProjectImages()

  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent projectImages={projectImages} />
      </LanguageProvider>
    </ThemeProvider>
  )
}
