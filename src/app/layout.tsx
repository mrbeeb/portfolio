// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'My Portfolio',
  description: 'DevOps & Cloud Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-100 text-gray-900 min-h-screen">
        <header className="p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white sticky top-0 z-50 shadow-lg">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="font-bold text-xl">🚀 Muneeb’s Portfolio</h1>
            <nav className="space-x-6">
              <a href="#home" className="hover:text-yellow-300">Home</a>
              <a href="#projects" className="hover:text-yellow-300">Projects</a>
              <a href="#experience" className="hover:text-yellow-300">Experience</a>
              <a href="#contact" className="hover:text-yellow-300">Contact</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto p-6 space-y-24">{children}</main>
        <footer className="text-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-10 shadow-inner">
          © {new Date().getFullYear()} Muneeb Ali — All Rights Reserved
        </footer>
      </body>
    </html>
  )
}
