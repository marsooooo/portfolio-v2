"use client"

import { useEffect, useRef } from "react"

// Simple 3D noise implementation
const PERLIN_YWRAPB = 4
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB
const PERLIN_ZWRAPB = 8
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB
const PERLIN_SIZE = 4095

const perlin_octaves = 4 // default to medium quality
const perlin_amp_falloff = 0.5 // default to 50% reduction/octave

const scaled_cosine = (i: number) => 0.5 * (1.0 - Math.cos(i * Math.PI))

let perlin: number[] | null = null

const noise = (x: number, y = 0, z = 0) => {
  if (perlin == null) {
    perlin = new Array(PERLIN_SIZE + 1)
    for (let i = 0; i < PERLIN_SIZE + 1; i++) {
      perlin[i] = Math.random()
    }
  }

  if (x < 0) x = -x
  if (y < 0) y = -y
  if (z < 0) z = -z

  let xi = Math.floor(x),
    yi = Math.floor(y),
    zi = Math.floor(z)
  let xf = x - xi
  let yf = y - yi
  let zf = z - zi
  let rxf, ryf

  let r = 0
  let ampl = 0.5

  let n1, n2, n3

  for (let o = 0; o < perlin_octaves; o++) {
    let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB)

    rxf = scaled_cosine(xf)
    ryf = scaled_cosine(yf)

    n1 = perlin![of & PERLIN_SIZE]
    n1 += rxf * (perlin![(of + 1) & PERLIN_SIZE] - n1)
    n2 = perlin![(of + PERLIN_YWRAP) & PERLIN_SIZE]
    n2 += rxf * (perlin![(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2)
    n1 += ryf * (n2 - n1)

    of += PERLIN_ZWRAP
    n2 = perlin![of & PERLIN_SIZE]
    n2 += rxf * (perlin![(of + 1) & PERLIN_SIZE] - n2)
    n3 = perlin![(of + PERLIN_YWRAP) & PERLIN_SIZE]
    n3 += rxf * (perlin![(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3)
    n2 += ryf * (n3 - n2)

    n1 += scaled_cosine(zf) * (n2 - n1)

    r += n1 * ampl
    ampl *= perlin_amp_falloff
    xi <<= 1
    xf *= 2
    yi <<= 1
    yf *= 2
    zi <<= 1
    zf *= 2

    if (xf >= 1.0) {
      xi++
      xf--
    }
    if (yf >= 1.0) {
      yi++
      yf--
    }
    if (zf >= 1.0) {
      zi++
      zf--
    }
  }
  return r
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    let mouse = { x: -1000, y: -1000 }
    const mouseSmoothed = { x: -1000, y: -1000 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)
    resize()

    const draw = () => {
      if (!ctx) return
      ctx.fillStyle = "#141414"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      mouseSmoothed.x += (mouse.x - mouseSmoothed.x) * 0.05
      mouseSmoothed.y += (mouse.y - mouseSmoothed.y) * 0.05

      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 6

      // Grid settings
      const gap = 80
      const size = Math.max(canvas.width, canvas.height) * 1.5
      const count = Math.ceil(size / gap) * 2

      // Noise settings
      const noiseScale = 0.0015 // How "zoomed in" the noise is
      const distortionStrength = 250
      const timeSpeed = 0.0005

      for (let i = -count; i < count; i++) {
        ctx.beginPath()

        const segments = 400
        const step = size / segments
        const offset = i * gap

        for (let j = 0; j <= segments; j++) {
          const u = j * step - size / 2
          const v = offset

          // Base diagonal line coordinates
          const angle = Math.PI / 4
          const cos = Math.cos(angle)
          const sin = Math.sin(angle)

          let x = u * cos - v * sin + canvas.width / 2
          let y = u * sin + v * cos + canvas.height / 2

          // Apply Noise Distortion
          // We sample noise based on the screen position (x,y)
          // This ensures that lines in the same area get the same distortion
          const noiseVal = noise(x * noiseScale, y * noiseScale, time * timeSpeed)

          // Calculate displacement vector from noise
          // Using noise value to drive perpendicular displacement to the diagonal
          const displacement = (noiseVal - 0.5) * 2 * distortionStrength

          // Apply displacement perpendicular to the line angle
          // Perpendicular to 45deg is -45deg or 135deg
          // cos(135) = -0.707, sin(135) = 0.707
          x += displacement * -sin
          y += displacement * cos

          // Mouse Interaction
          const dx = x - mouseSmoothed.x
          const dy = y - mouseSmoothed.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const interactionRadius = 400

          if (dist < interactionRadius) {
            const force = Math.pow(1 - dist / interactionRadius, 2) * 60
            // Push away from mouse
            x += (dx / dist) * force
            y += (dy / dist) * force
          }

          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      time += 1
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}
