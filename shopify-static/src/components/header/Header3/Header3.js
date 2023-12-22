import { IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';

export default function Header3() {
  return (
    <header className='header header3'>
      <div className='header3__logo'>
        <a href='/link'>LOGO</a>
      </div>
      <div className='header3__collections-nav'>
        <a href='/link' className='header3__collection-link'>
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
        <a href='/link' className='header3__collection-link'>
          Link
        </a>
        <a href='/link' className='header3__collection-link'>
          Link
        </a>
        <a href='/link' className='header3__collection-link'>
          Link
        </a>
        <a href='/link' className='header3__collection-link'>
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
