import { IoPersonOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';

export default function Header3() {
  return (
    <header className='header header3'>
      <div className='header3__logo'>
        <a href='/link'>LOGO</a>
      </div>
      <div className='header3__collections-nav'>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
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
