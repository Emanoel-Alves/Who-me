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
        <div className='container mx-auto flex flex-col pt-10 justify-end items-center '>
          <NavBar/>
          <div >
            <About />
          </div>
          <div >
            <ExperienceCard />
          </div>
        </div>
        <div className="h-full relative">{children}</div>


      </body>
    </html>
  )
}
