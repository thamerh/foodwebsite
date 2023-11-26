"use client";
import Footer from '@/components/Footer'
import HeaderComponent from '@/components/Header'
import Contact from '@/components/Contact'
import Gallery  from '@/components/Gallery' 
import AboutAs from '@/components/AboutAs'
import Actuality from '@/components/Actuality'
import Specialities from '@/components/Specialities'
import Restaurant from '@/components/Restaurant'

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <HeaderComponent />
      <AboutAs/>
      <Specialities/>
      <Restaurant/>
      <Actuality/>
      <Gallery/>
      <Contact />
      <Footer />
    </main>
  )
}
