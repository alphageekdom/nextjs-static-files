import { IoPersonOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { GoQuestion } from 'react-icons/go';

export default function Header1() {
  return (
    <header className='header header1'>
      <div className='header1__collections-nav'>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
      </div>
      <div className='header1__logo'>
        <a href='/link'>LOGO</a>
      </div>
      <div className='header1__collections-nav'>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/link'>
          <IoPersonOutline />
        </a>
        <a href='/link'>
          <GoQuestion />
        </a>
        <a href='/cart'>
          <IoCartOutline />
        </a>
      </div>
    </header>
  );
}
