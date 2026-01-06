import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#6B5744",
}

export const metadata: Metadata = {
  title: "A.D. Demosthenous - Expert Wood Constructions",
  description:
    "Crafting timeless woodwork. Specialists in custom wooden constructions including pergolas, wooden houses, decks, roofs, and furniture in Cyprus.",
  keywords:
    "wood constructions, wooden houses, pergolas, decks, custom furniture, Cyprus, carpentry, timber construction",
  authors: [{ name: "A.D. Demosthenous" }],
  creator: "A.D. Demosthenous",
  publisher: "A.D. Demosthenous",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "A.D. Demosthenous",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://addemosthenous.com",
    title: "A.D. Demosthenous - Expert Wood Constructions",
    description: "Crafting timeless woodwork. Specialists in custom wooden constructions.",
    siteName: "A.D. Demosthenous",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
