import Analytics from '@/components/home/Analytics'
import CustomerReview from '@/components/home/CustomerReview'
import HeroSection from '@/components/home/HeroSection'
import ServicesBrief from '@/components/home/ServicesBrief'
import TrustedBy from '@/components/home/TrustedBy'
import { AuroraHero } from '@/components/utils/HeroSection'
import Space from '@/components/utils/Space'
import React from 'react'

export default function page() {
  return (
    <div >
      <AuroraHero />
      <div className='xl:px-64 lg:px-20 md:px-8 px-4'>

        <Space h={16} />
        <ServicesBrief />
        <Analytics />
        <CustomerReview />


        <Space h={16} /></div>
    </div>
  )
}

