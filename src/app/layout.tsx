'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import store from '../redux/store'
import { Provider } from '../../node_modules/react-redux/es/index'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Plin Challenger</title>
      <body className={inter.className}>
      <Header />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
