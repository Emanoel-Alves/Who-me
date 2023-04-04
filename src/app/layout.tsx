import '../styles/global.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { NavBar } from '@/components/NavBar/page'
import { About } from '@/components/About/page'
import { ExperienceCard } from '@/components/ExperienceCard/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className='container relative p-20 flex justify-center'>
          <NavBar/>
          <div className="h-full relative">{children}</div>
        </div>
        <div >
          <About />
        </div>
        <div >
          <ExperienceCard />
        </div>
      </body>
    </html>
  )
}
