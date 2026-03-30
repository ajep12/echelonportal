import "./globals.css"

export const metadata = {
  title: "Echelon Park Portal",
  description: "Staff Operations System",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}