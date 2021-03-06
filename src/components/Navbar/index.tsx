import { NavbarItem, NavbarItemProps } from './NavbarItem';
import logo from './logo.png';
import logo2 from './logo2.png';
import black from './BlackLogo.png';
import { Bookmark, ExternalLink, ArrowRight } from 'react-feather';
import ExtensionCard from '../Common/extensionCard';
import Footer from '../Footer';
import useDarkMode from '../../hooks/useDarkMode';
import { useSelector } from 'react-redux';

import { useEffect, useRef, useState } from 'react';

import { NavLink, NavLinkProps } from 'react-router-dom';

import { useParams, useLocation } from 'react-router-dom';
import {
  BarChart2,
  Clock,
  Settings,
  HelpCircle,
  Search,
  Bell,
} from 'react-feather';
import { RootState } from '../../store';

interface NavbarProps {
  primaryItems: any;
  secondaryItems?: NavbarItemProps[];
  className?: string;
  isDisabled?: boolean;
}

const Navbar = ({
  primaryItems,
  secondaryItems,
  className,
  isDisabled,
}: NavbarProps) => {
  const isDarkToggle = useSelector((state: RootState) => state.activity.isDark);
  let location = useLocation();

  const is = location.pathname;

  return (
    <>
      <nav className='  border-r border-grey-m w-side     m2xl:hidden mmd:hidden    flex flex-col justify-between dark:bg-gray-900 h-full'>
        <div>
          <div>
            <div className='flex w-20  p-6 mb-2 justify-center xxl:hidden'>
              <img alt='logo2' src={logo2} width={32} height={32} />
            </div>
            <div className=' flex p-6 items-center  justify-between m2xl:hidden'>
              <img alt='logo' src={isDarkToggle ? black : logo} />
              <Bookmark color='#70768C' />
            </div>
          </div>
          <div className='border mx-4 flex m2xl:hidden'></div>
          <div>
            <div className='px-4 pt-6 text-gray-400 font-medium text-sm m2xl:hidden'>
              REPORTS
            </div>
            {/* {primaryItems?.map((itemProps) => (
              <div key={itemProps.text}>
                <NavbarItem {...itemProps} />
              </div>
            ))}
             */}

            <NavLink
              to='/analytics'
              className={`w-full flex px-4 pt-6 items-center ${
                is == '/analytics' ? ' text-slate-900' : '  text-greyTint-m'
              }   font-medium m2xl:px-0 m2xl:pt-0 m2xl:flex m2xl:p-8`}>
              <div
                className={`w-10/12 rounded-lg   px-2 py-2 ${
                  is == '/analytics'
                    ? 'bg-slate-50 dark:bg-gray-700 dark:text-white'
                    : ''
                }  hover:text-slate-900    dark:hover:text-white  flex items-center m2xl:w-full m2xl:flex-col m2xl:justify-center m2xl:items-center`}>
                <div>
                  <BarChart2 size='20' />
                </div>
                <span className='ml-2 m2xl:ml-0 '>Analytics</span>
              </div>
            </NavLink>
            <NavLink
              to='/history'
              className={`w-full flex px-4 pt-6 items-center ${
                is == '/history' ? ' text-slate-900' : '  text-greyTint-m'
              }   font-medium m2xl:px-0 m2xl:pt-0 m2xl:flex m2xl:p-8`}>
              <div
                className={`w-10/12 rounded-lg   px-2 py-2 ${
                  is == '/history'
                    ? 'bg-slate-50 dark:bg-gray-700 dark:text-white'
                    : ''
                }  hover:text-slate-900    dark:hover:text-white  flex items-center m2xl:w-full m2xl:flex-col m2xl:justify-center m2xl:items-center`}>
                <div>
                  <Clock size='20' />
                </div>
                <span className='ml-2 m2xl:ml-0 '>History</span>
              </div>
            </NavLink>
          </div>
          <div className='pt-6 m2xl:hidden'>
            <div className='border mx-4 flex '></div>
          </div>
          <div>
            <div className='px-4 pt-6 text-gray-400 font-medium text-sm m2xl:hidden'>
              OPTION
            </div>
            <NavLink
              to='/settings'
              className={`w-full flex px-4 pt-6 items-center ${
                is == '/settings' ? ' text-slate-900' : '  text-greyTint-m'
              }   font-medium m2xl:px-0 m2xl:pt-0 m2xl:flex m2xl:p-8`}>
              <div
                className={`w-10/12 rounded-lg   px-2 py-2 ${
                  is == '/settings'
                    ? 'bg-slate-50 dark:bg-gray-700 dark:text-white'
                    : ''
                }  hover:text-slate-900    dark:hover:text-white  flex items-center m2xl:w-full m2xl:flex-col m2xl:justify-center m2xl:items-center`}>
                <div>
                  <Settings size='20' />
                </div>
                <span className='ml-2 m2xl:ml-0 '>Settings</span>
              </div>
            </NavLink>
          </div>
        </div>
        <section className='bottom-10   w-side m2xl:hidden '>
          <div className='flex items-center px-4 w-full  '>
            <ExtensionCard
              icon={<ExternalLink size='20' />}
              text='Download the extension from Chrome Web Store.'
              to={{ pathname: 'Try now', icon: <ArrowRight size='20' /> }}
            />
          </div>
          <div className='px-4 pt-4 mb-6 dark:text-neutral-300'>
            <Footer />
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
