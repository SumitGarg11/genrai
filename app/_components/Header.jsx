
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="flex flex-row sm:flex-row justify-between items-center p-5 shadow-sm">
  <Image 
    src={'/genrai.png'} 
    width={250} 
    height={100} 
    className="w-32 sm:w-40 md:w-52" // Adjust image width for responsiveness
    alt="Logo" // Add alt text for accessibility
  />
  
  
  <Button className="mt-4 sm:mt-0">Get Started</Button> {/* Margin adjustment for mobile */}
</div>

  )
}

export default Header
