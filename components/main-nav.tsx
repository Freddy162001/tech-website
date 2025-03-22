"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="flex items-center gap-4">
      <div className="hidden md:flex md:gap-6">
        <Link
          href="#hero"
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("hero")
          }}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("about")
          }}
        >
          About
        </Link>
        <Link
          href="#topics"
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("topics")
          }}
        >
          Topics
        </Link>
        <Link
          href="#articles"
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("articles")
          }}
        >
          Articles
        </Link>
        <Link
          href="#newsletter"
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("newsletter")
          }}
        >
          Newsletter
        </Link>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-2 py-6">
            <Link
              href="#hero"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("hero")
              }}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
            >
              About
            </Link>
            <Link
              href="#topics"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("topics")
              }}
            >
              Topics
            </Link>
            <Link
              href="#articles"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("articles")
              }}
            >
              Articles
            </Link>
            <Link
              href="#newsletter"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("newsletter")
              }}
            >
              Newsletter
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

