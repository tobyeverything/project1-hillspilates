"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book a Class", href: "#book" },
  { label: "New to Pilates?", href: "#new-to-pilates" },
]

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 overflow-hidden rounded-[20px] border border-white/25 bg-white/15 shadow-[0_0_0_0.5px_rgba(255,255,255,0.15),0_2px_8px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-3xl backdrop-brightness-105 backdrop-saturate-[1.8] dark:border-white/[0.08] dark:bg-white/[0.06] dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.06),0_2px_8px_rgba(0,0,0,0.2),0_12px_40px_rgba(0,0,0,0.3)] dark:backdrop-brightness-110 dark:backdrop-saturate-[1.6]">
      {/* Specular highlight — top edge light refraction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/20" aria-hidden="true" />
      <div className="flex items-center justify-between px-5 py-3 md:px-8 lg:px-10">
        {/* Logo */}
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative z-10 flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Hills <span className="text-primary">Pilates</span>
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList className="gap-0">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-lg font-medium text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="lg" asChild>
            <Link href="#book">Book Now</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="#join">Join Up</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-3 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-2">
                <span className="text-lg font-bold tracking-tight">
                  Hills <span className="text-primary">Pilates</span>
                </span>
              </SheetTitle>
              <nav className="flex flex-col gap-1 px-4 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 px-4 pb-8">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#book">Book Now</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="#join">Join Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
