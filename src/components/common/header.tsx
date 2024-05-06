'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'
import { Separator } from '../ui/separator'
import React from 'react'

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: '',
      title: '',
      openInNewTab: true
    }
    // { href: '#pricing', title: 'Features' },
    // {
    //   href: 'mailto:myemail@.com',
    //   title: 'Contact Us'
    // }
  ]

  // const aboutRef = React.useRef(null);
  // const customerRef = React.useRef(null);
  // const contactRef = React.useRef(null);

  // const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  // const scrollToCustomer = () => customerRef.current.scrollIntoView({ behavior: 'smooth' });
  // const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <img src="/logo.svg" className="mr-3" />
      <Typography className="!text-white !text-base font-medium ">
        Saloonist
      </Typography>
    </Link>
  )

  const getAuthButtons = () => (
    <div className="flex gap-6 items-center">
      <Link
        href="#contact"
      >
        <Typography variant="p" id='contact'>Contact</Typography>
      </Link>

      <Separator orientation='vertical'/>

      <Link
        href="#about"
      >
        <Typography variant="p" id='about'>About</Typography>
      </Link>

      <Link
        href="#customer"
      >
        <Button color="ghost" className=' rounded-none'>
          <Typography 
            variant="p" 
            className="text-black" 
            id='customer'
          >
            Customer
          </Typography>
        </Button>
      </Link>
    </div>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-center w-full
          backdrop-filter backdrop-blur-lg bg-gray-100 bg-opacity-20`,
        className
      )}
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
            </div>
            {getAuthButtons()}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
