import Link from 'next/link';
import React from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export function NavBar() {
  return <header className=' flex py-6 shadow-xl fixed top-0 w-full z-10 bg-backgoround/95'>
    <nav className='flex items-center gap-10 container font-semibold'>
      <Link href="/" className='mr-auto'>
         <BrandLogo />
      </Link>
      <Link className='text-lg' href='#'>Features</Link>
      <Link className='text-lg' href='/#pricing'>Pricing</Link>
      <Link className='text-lg' href='#'>About</Link>
      <span className='text-lg'>
        <SignedIn>
            <Link href='/dashboard'>Dashboard</Link>
        </SignedIn>
        <SignedOut><SignInButton>Log In</SignInButton></SignedOut>
        </span>
    </nav>
  </header>
}

export default NavBar