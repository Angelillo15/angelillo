'use client'

import {NextUIProvider} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <NextUIProvider className='m-2' navigate={router.push}>
      {children}
    </NextUIProvider>
  )
}