"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo.png" 
              alt="A.D. Demosthenous Logo" 
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-xl font-bold tracking-tight text-foreground">A.D. DEMOSTHENOUS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About & Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border/40">
            <Link
              href="/"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About & Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
