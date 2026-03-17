"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Button } from "@/components/ui/button"

const words = ["Strength.", "Balance.", "Control."]

function SplitWord({ word }: { word: string }) {
  return (
    <span className="inline-flex overflow-hidden">
      {word.split("").map((char, i) => (
        <span key={i} className="hero-char inline-block translate-y-full">
          {char}
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!headlineRef.current) return

    const chars = headlineRef.current.querySelectorAll(".hero-char")
    const sectionEl = headlineRef.current.closest("section")

    // Fast animation on initial load
    gsap.fromTo(
      chars,
      { y: "100%" },
      {
        y: "0%",
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.out",
        delay: 0.3,
      }
    )

    // Slower scroll-triggered replay
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "none reverse none play",
      },
    })

    tl.fromTo(
      chars,
      { y: "100%" },
      {
        y: "0%",
        duration: 1.2,
        stagger: 0.06,
        ease: "power3.out",
      }
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/hero-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex w-full flex-col gap-6 px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24">
        <h1
          ref={headlineRef}
          className="flex max-w-3xl flex-col text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {words.map((word) => (
            <SplitWord key={word} word={word} />
          ))}
        </h1>
        <div>
          <Button size="lg" className="gap-3 px-8 py-6 text-lg md:text-xl" asChild>
            <Link href="#book">
              Book A Class Now
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
