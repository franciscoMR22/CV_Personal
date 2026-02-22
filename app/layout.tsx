import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'Francisco Mireles | Project Manager & Líder Técnico',
  description: 'Portafolio profesional y CV digital enfocado en gestión de proyectos y gobernanza de TI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          /* Se eliminó disableTransitionOnChange para permitir que el CSS global maneje el fade de 0.5s */
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}