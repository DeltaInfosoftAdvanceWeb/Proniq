import type { ReactNode } from 'react'
import '../src/index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Proniq',
  description: 'Proniq by Delta Infosoft',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ paddingTop: 80 }}>
          <Navbar />
          <Footer />
          {children}
        </div>
      </body>
    </html>
  )
}


