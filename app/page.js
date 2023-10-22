import Action from '@/components/Action'
import Banner from '@/components/Banner'
import Carousel from '@/components/Carousel'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Banner />
      <Carousel />
      <Action />
    </main>
  )
}
