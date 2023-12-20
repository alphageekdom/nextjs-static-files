import { IoPersonOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { GoQuestion } from 'react-icons/go';

export default function Header2() {
  return (
    <header className='header header2'>
      <div className='header2__logo'>
        <a href='/link'>LOGO</a>
      </div>
      <div className='header2__collections-nav'>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
      </div>
      <div className='header2__collections-nav'>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/link'>
          <IoPersonOutline />
        </a>

        <a href='/cart'>
          <IoCartOutline />
        </a>
      </div>
    </header>
  );
}
