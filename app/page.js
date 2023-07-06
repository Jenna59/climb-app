import Image from 'next/image'
import { Registration } from './components/register'
import { Login } from './components/login'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className="z-0"
        src="/background.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
      <Registration />
      {/* <Login /> */} 
    </main>
  )
}
