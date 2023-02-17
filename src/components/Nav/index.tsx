import Link from 'next/link';
import classNames from 'classnames';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

const Nav = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <>
      <nav
        className={classNames(
          'fixed z-10 flex h-16 w-full flex-row items-center justify-between bg-slate-50 px-8 align-middle',
          className
        )}
        {...props}
      >
        <h1 className='text-xl font-medium'>NextJS thing</h1>
        <ul className='flex list-none flex-row gap-4'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <div className='h-16 w-full' />
    </>
  );
};

export default Nav;
