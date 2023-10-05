import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navItems = [
  { src: "/assets/icons/black-heart.svg", alt: "heart"},
  { src: "/assets/icons/search.svg", alt: "search"},
  { src: "/assets/icons/user.svg", alt: "user"}
]

const Navbar = () => {
  return (
    // the navbar header will have a full width of 100% of the screen but not 100% height
    <header className='w-full'>
        <nav className='nav'>
             <Link href="/" className='flex items-center gap-1'>
              <Image 
               src="/assets/icons/logo.svg"
               alt='logo'
               width={27}
               height={27}
              />
              <p className='nav-logo'>
                Price <span className='text-primary'>Wise</span>
              </p>
             </Link>

             <div className='flex items-center gap-5'>
                  {
                    navItems.map( item => (
                      <Image 
                       key={ item.alt}
                       src={ item.src}
                       alt={ item.alt}
                       width={28}
                       height={28}
                      />
                    ))
                  }
             </div>
        </nav>
    </header>
  )
}

export default Navbar