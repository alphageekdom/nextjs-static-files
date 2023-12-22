import { IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';
import { GoQuestion } from 'react-icons/go';

export default function Header1() {
  return (
    <header className='header header1'>
      <div className='header1__collections-nav'>
        <a href='/link' className='header1__collection-link'>
          Link <FaAngleDown />
          <ul className='collection-link__sub-links'>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
          </ul>
        </a>
        <a href='/link' className='header1__collection-link'>
          Link
        </a>
        <a href='/link' className='header1__collection-link'>
          Link
        </a>
      </div>
      <div className='header1__logo'>
        <a href='/link'>LOGO</a>
      </div>
      <div className='header1__collections-nav'>
        <a href='/link' className='header1__collection-link'>
          Link <FaAngleDown />
          <ul className='collection-link__sub-links'>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
          </ul>
        </a>
        <a href='/link' className='header1__collection-link'>
          Link
        </a>
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
