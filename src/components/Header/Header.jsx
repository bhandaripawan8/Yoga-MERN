import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
;import { useRef } from 'react';

const navlinks = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/sessions',
    display: 'Find your session'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contacts',
    display: 'Contact'
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };
  

  useEffect(() =>{
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  },[])


const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
<header className='header' ref={headerRef}>
  <div className='container flex items-center justify-between'>
    {/* logo */}
    <h2>Logo</h2>
    {/* Navigation */}
    <nav className='navigation' ref={menuRef} onClick={toggleMenu}>
      <ul className='menu flex items-center gap-[2.7rem]'>
        {navlinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              activeClassName='text-primaryColor text-[16px] leading-7 font-[600]'
              className='text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
            >
              {link.display}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* <div className='w-[35px] h-[35px] rounded-full'>
          <h3 className='w-full rounded-full'>userImage</h3>
      </div> */}
    </nav>
    {/* nav right user image */}
    <Link to={'/login'}>
      <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-8 w-25 flex items-center rounded-[40px]'>Login</button>
    </Link>
    <span className='md:hidden'>
      <BiMenu className='w-6 h-6 cursor-pointer' onClick={toggleMenu} />
    </span>
  </div>
</header>

  );
};

export default Header;
