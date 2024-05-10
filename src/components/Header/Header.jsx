import React from 'react'

const Header = () => {
  return (
<header className="header flex justify-between items-center px-5 py-6 bg-gray-800 text-white">
<img src="logo.svg" alt="Yoga Logo" className="h-8" />
<nav className="flex space-x-10 px-5">
  <a href="" className="text-base hover:underline">Explore Yoga</a>
  <a href="" className="text-base hover:underline">About Us</a>
  <a href="" className="text-base hover:underline">Sign Up</a>
</nav>
</header>
  )
}

export default Header