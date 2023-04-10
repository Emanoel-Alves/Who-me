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
        <div className='container flex flex-col h-screen pt-10 flex justify-center'>
          <NavBar/>
          <div >
            <About />
          </div>
        </div>
        <div className="h-full relative">{children}</div>

        <div >
          <ExperienceCard />
        </div>
      </body>
    </html>
  )
}
