'use-client'
import Image from 'next/image'
import styles from './page.module.css'
import { Providers } from './providers'
import { Switch } from '@chakra-ui/react'



export default function Home() {

  return (
    <>
      <Providers>
        <div>test</div>
        <Switch size='sm' />
        <Switch size='md' />
        <Switch size='lg' />
      </Providers>
    </>
  )
}
