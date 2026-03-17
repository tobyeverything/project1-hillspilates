import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ImageMarquee } from "@/components/image-marquee"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { HowToBook } from "@/components/how-to-book"
import { NewToPilates } from "@/components/new-to-pilates"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageMarquee />
      <About />
      <Reviews />
      <HowToBook />
      <NewToPilates />
      <Footer />
    </>
  )
}
