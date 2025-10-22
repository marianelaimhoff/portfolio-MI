import { Navbar } from "@/components/Navbar/Navbar"
import { Metadata } from "next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio - Marianela",
  description: "Desarrollo de mi portafolio personal",
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
        <Navbar />
      </body>
    </html>
  )
}