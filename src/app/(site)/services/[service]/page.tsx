'use client'
import Hero from '@/components/services/Hero'
import Section2 from '@/components/services/Section2'
import Section3 from '@/components/services/Section3'
import Section4 from '@/components/services/Section4'
import Section5 from '@/components/services/Section5'
import Section6 from '@/components/services/Section6'
import Section7 from '@/components/services/Section7'
import Section8 from '@/components/services/Section8'
import WhatMakeDiffCompo from '@/components/services/WhatMakeDiff'
import Space from '@/components/utils/Space'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Services } from '@/content/Services'

type ServiceKey = keyof typeof Services;

function isValidServiceKey(key: any): key is ServiceKey {
    return key in Services;
}

export default function Page() {
    const pathname = usePathname().split('/')[2];

    if (!isValidServiceKey(pathname)) {
        return <div>Service not found</div>;
    }

    const serviceData = Services[pathname];

    return (
        <div >

            <Hero {...serviceData.hero_section} />
            <WhatMakeDiffCompo {...serviceData.whatmakediff} />

            <Section2 {...serviceData.section2} />
            <Section3 {...serviceData.section31} />
            <Section3 {...serviceData.section32} />
            <Section4 {...serviceData.methodology} />
            <Section5  {...serviceData.methodology.content[0]} />
            <Space h={100} />
            <Section6 {...serviceData.methodology.content[1]} />
            <Space h={100} />
            <Section5  {...serviceData.methodology.content[2]} />
            <Space h={100} />
            <Section5 {...serviceData.methodology.content[3]} />
            <Space h={100} />
            <Section6 {...serviceData.methodology.content[4]} />
            <Section5 {...serviceData.methodology.content[5]} />

            <Space h={100} />
            <Section8 />
        </div>
    );
}
