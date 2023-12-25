import { IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';

export default function Header2() {
  return (
    <header className='header header2'>
      <div className='header2__logo'>
        <a href='/link'>LOGO</a>
      </div>
      <ul className='header2__collections-nav'>
        <li className='header2__collection-link'>
          <a href='/link'>
            Link <FaAngleDown />
          </a>
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
        </li>

        <li className='header2__collection-link'>
          <a href='/link'>Link</a>
        </li>
        <li className='header2__collection-link'>
          <a href='/link'>Link</a>
        </li>
      </ul>
      <ul className='header1__collections-nav'>
        <li className='header1__collection-link'>
          <a href='/link'>
            Link <FaAngleDown />
          </a>
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
        </li>

        <li className='header2__collection-link'>
          <a href='/link'>Link</a>
        </li>

        <a href='/link'>
          <IoPersonOutline />
        </a>

        <a href='/cart'>
          <IoCartOutline />
        </a>
      </ul>
    </header>
  );
}
