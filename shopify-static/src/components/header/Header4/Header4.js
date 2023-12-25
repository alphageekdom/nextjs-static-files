import AnnounceBar from '../../AnnounceBar/AnnounceBar';
import { IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';

export default function Header4() {
  return (
    <>
      <AnnounceBar />
      <header className='header header4'>
        <div className='header4__logo'>
          <a href='/link'>LOGO</a>
        </div>
        <ul className='header4__collections-nav'>
          <li className='header4__collection-link'>
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
          <li className='header4__collection-link'>
            <a href='/link'>Link</a>
          </li>
          <li className='header4__collection-link'>
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
    </>
  );
}
