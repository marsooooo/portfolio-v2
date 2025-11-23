import { LanguageProvider } from "@/contexts/language-context"
import { MainContent } from "@/components/main-content"
import { getProjectImages } from "@/lib/project-images"

export default async function Home() {
  const projectImages = await getProjectImages()

  return (
    <LanguageProvider>
      <MainContent projectImages={projectImages} />
    </LanguageProvider>
  )
}
