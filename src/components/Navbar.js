"use client"

import { cn } from '@/lib/utils'
import { House, NotepadText, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  { href: '/', label: 'Home', icon: <House className='mr-6 lg:mx-2' /> },
  { href: '/profile', label: 'Profile', icon: <User className='mr-6 lg:mx-2' /> },
  { href: '/contact', label: 'Contact', icon: <NotepadText className='mr-6 lg:mx-2' /> },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='lg:h-full lg:w-min w-full transform flex lg:flex-col flex-row justify-center items-center lg:border-r lg:border-r-slate-800 lg:border-t-0 border-t border-t-slate-800'>
      {
        links.map(({ href, label, icon }) => {
          const isActiveLink = href === pathname || pathname?.startsWith(`${href}/`)
          return <Link key={href} href={href} className={cn('hover:cursor-pointer hover:text-slate-500 my-4 lg:mx-2 text-slate-700', isActiveLink && 'text-slate-400')} title={label}>
            {icon}
          </Link>
        })
      }
    </nav>
  )
}

export default Navbar