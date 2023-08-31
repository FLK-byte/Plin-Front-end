import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PageLayout } from '../components'
import { Cloud, Search, ContactPage } from '@mui/icons-material';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  const drawerItems = [
    {label: 'Previsão do tempo', path: 'weather', icon: <Cloud /> },
    {label: 'Buscar CEP', path: 'cep', icon: <Search /> },
    {label: 'Contato', path: 'contact', icon: <ContactPage /> }
  ]

  return (
    <html lang="en">
      <body className={inter.className} style={{margin: 0, padding: 0}}>
        <PageLayout drawerItems={drawerItems} >
          {children}
        </PageLayout>
      </body>
    </html>
  )
}
