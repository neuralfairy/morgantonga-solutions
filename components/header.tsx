"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-teal-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Morgantonga Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-teal-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent">
              <Link href="/demo">Book Demo</Link>
            </Button>
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-black">
              <Link href="/trial">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-teal-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/features" className="text-gray-700 hover:text-teal-600 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-teal-600 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  asChild
                  className="border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent"
                >
                  <Link href="/demo">Book Demo</Link>
                </Button>
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-black">
                  <Link href="/trial">Start Free Trial</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
