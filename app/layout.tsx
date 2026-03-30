import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Echelon Park Portal",
  description: "Staff Operations System",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
