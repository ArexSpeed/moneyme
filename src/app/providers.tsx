'use client'

import { ThemeProvider } from 'next-themes'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
    return <ThemeProvider attribute="class" defaultTheme='system' enableSystem><Provider store={storeRef.current}>{children}</Provider></ThemeProvider>
}