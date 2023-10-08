import { headerLogo } from '../assets/images'
import {navLinks} from '../constants';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    const toggleDark = () => {
        setDarkMode(!darkMode)
    }
    useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('darkMode', 'true');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('darkMode', 'false');
        }
      }, [darkMode]);

    return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img 
                src={headerLogo} 
                alt='Logo'
                width={130}
                height={29}
                />
            </a>
            <ul className={`flex-1 lg:h-10 flex justify-center items-center gap-16 
            ${openMenu ? 'max-lg:absolute max-lg:right-2 max-lg:z-100 max-lg:top-20 max-lg:flex-col max-lg:gap-2 max-lg:shadow-3xl max-lg:shadow-slate-300 max-lg:w-[150px] max-lg:p-4 max-lg:rounded-lg dark:max-lg:shadow-black dark:max-lg:shadow-3xl' : 'max-lg:hidden'}`}>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg 
                        text-slate-gray hover:text-coral-red dark:text-[var(--menu-text-dark)] 
                        dark:hover:text-coral-red">
                            {item.label}
                        </a>
                    </li>
                ))}
                <div className='group lg:w-10 lg:h-[7rem] font-montserrat leading-none m-0 text-lg 
                text-slate-800 flex flex-col items-center lg:absolute lg:top-[2.25rem] lg:right-[110px]' type='button'>
                    <button type="button" 
                    className="w-10 h-10 text-slate-700 dark:text-yellow-300"
                    onClick={toggleDark}>
                        <span className="material-symbols-sharp ">
                            dark_mode
                        </span>
                    </button>
                    <span className="font-palanquin hidden bg-slate-gray 
                    rounded-md text-white text-sm leading-none py-2 w-[120px] 
                    opacity-50 px-[2px] group-hover:flex
                    dark:opacity-100">
                        {`Turn ${darkMode ? 'of': 'on'} Dark Mode`}
                    </span>
                </div>
            </ul>
            <button className="hidden max-lg:block outline-none w-10 h-10 bg-none" onClick={toggleMenu}>
                <span className={`material-symbols-sharp text-[35px] text-slate-700 
                dark:text-[var(--text-dark)] ${openMenu ? 'hidden' : ''}`}>
                    density_medium
                </span>
                <span className={`material-symbols-sharp text-[35px] text-slate-700 
                dark:text-[var(--text-dark)] ${openMenu ? 'block' : 'hidden'}`}>
                    close
                </span>
            </button>
        </nav>
    </header>
  )
}

export default Nav