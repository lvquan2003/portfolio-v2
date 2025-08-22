import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Welcome to my portfolio",
  description: "Minimal portfolio showcasing my work and experience",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
  --font-heading: ${spaceGrotesk.variable};
}
        `}</style>
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="portfolio-theme"
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
