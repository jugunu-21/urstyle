

// import Clothes from './components/Clot



// import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'


// import handleClick()
// {
//   console.log("heyy");
// };

const navigation = [

  { name: 'About', to: '/about', current: true },
  { name: 'Contact', to: '/contact', current: true },
  { name: 'Home', to: '/home', current:true}
]



export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  return (
  
 
    <div className="min-h-full h-full dark:bg-black">
     <nav className=" bg-purple-200  ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
               <Link to="/" className=" font-serif text-cyan-800  text-xl font-extrabold">URSTYLE </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="text-gray-900 text-base font-semibold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 "
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>

                {/* <!-- Profile dropdown --> */}
                <div className="relative ml-3">
                  <div className="relative ml-3" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                    
                    <button type="button" className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button"
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                   
                      
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-10 rounded-full" src="https://cdnb.artstation.com/p/assets/images/images/048/110/613/small/pankaj-kumar-roy-12.jpg?1649236129" alt="" />
                    </button>
                  </div>
                  {/* 
              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
                {isDropdownOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</Link>
                  </div>
                )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-900 font-serif  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
       
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                <div className="text-sm font-medium leading-none text-gray-700">tom@example.com</div>
              </div>
              <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Your Profile</Link>
              <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Settings</Link>
              <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Sign out</Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow dark:bg-black ">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">


          <h1 className="text-xl font-bold tracking-tight text-gray-900 font-serif dark:text-rose-200">Welcome to our site.....</h1>


          
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* <!-- Your content --> */}
        </div>
      </main>
    </div>
  )
}

     
    

