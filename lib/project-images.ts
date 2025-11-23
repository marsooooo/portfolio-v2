export type ProjectImages = Record<string, string[]>

export async function getProjectImages(): Promise<ProjectImages> {


  try {
    // This logic detects if we are effectively in a browser/edge runtime where 'fs' is missing
    if (typeof window !== "undefined" || process.env.NEXT_RUNTIME === "edge") {
      throw new Error("Browser/Edge environment")
    }

    // Dynamically import node modules to avoid build-time errors in browser bundles
    const fs = await import("fs")
    const path = await import("path")

    const projectsDir = path.join(process.cwd(), "public/projects")
    const imagesMap: ProjectImages = {}

    if (!fs.existsSync(projectsDir)) {
      return {}
    }

    const files = await fs.promises.readdir(projectsDir)

    files.forEach((file) => {
      const match = file.match(/^(.+)_(\d+)\.(jpg|jpeg|png|webp|gif)$/i)
      if (match) {
        const projectId = match[1]
        const imagePath = `/projects/${file}`
        if (!imagesMap[projectId]) {
          imagesMap[projectId] = []
        }
        imagesMap[projectId].push(imagePath)
      }
    })

    // Sort
    Object.keys(imagesMap).forEach((projectId) => {
      imagesMap[projectId].sort((a, b) => {
        const getIndex = (p: string) => {
          const match = p.match(/_(\d+)\./)
          return match ? Number.parseInt(match[1], 10) : 0
        }
        return getIndex(a) - getIndex(b)
      })
    })

    return imagesMap
  } catch (error) {
    console.warn("Falling back to static image list (fs module not available)")
    return {
      outfitters: ["/projects/outfitters_0.jpg"],
      peaxy: ["/projects/peaxy_0.jpg"],
      piwigo: ["/projects/piwigo_0.jpg"],
      riot_api: ["/projects/riot_api_0.jpg"],
      gamejam: ["/projects/gamejam_0.jpg"],
    }
  }
}
