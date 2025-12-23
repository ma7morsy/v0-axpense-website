import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Inter, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Axpense - Fleet, Asset & Equipment Management Platform",
  description:
    "Enterprise-grade fleet, asset, and equipment management solution. Track, manage, and optimize your business assets with Axpense.",
  keywords:
    "fleet management, asset management, equipment management, fleet tracking, asset tracking, business management",
  openGraph: {
    title: "Axpense - Fleet, Asset & Equipment Management Platform",
    description: "Enterprise-grade fleet, asset, and equipment management solution.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
