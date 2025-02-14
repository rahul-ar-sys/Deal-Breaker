import { SignUpButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'

export default function HomePage() {
    return <>
      <section className='min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4'>
        <h1 className='text-5xl font-bold'>Price Smarter, Sell Bigger</h1>
        <p className='text-lg'>The best deals for your business, all in one place.
           Capture 85% of the untapped market with location-based dynamic pricing</p>
           <SignUpButton>
            <Button className='text-lg p-6 rounded-xl flex gap-2'>
              Get Started for Free <ArrowRightIcon className='size-8' />
            </Button>
          </SignUpButton>
      </section>
    </>
} 
