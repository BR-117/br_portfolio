import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { Press_Start_2P } from 'next/font/google'

const pixelFont = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
})

export const metadata = {
  title: 'Bim Rai',
  description: 'Welcome to my portfolio site.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pixelFont.variable}>

      <body>
        <div className="layout">
          <main className="main-content">{children}</main>
          <Navbar />
        </div>
        <Footer />
      </body>
    </html>
  )
}
