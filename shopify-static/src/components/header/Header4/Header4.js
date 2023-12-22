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
        <div className='header4__collections-nav'>
          <a href='/link' className='header4__collection-link'>
            Link
          </a>
          <a href='/link' className='header4__collection-link'>
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
          <a href='/link' className='header4__collection-link'>
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
          <a href='/link' className='header4__collection-link'>
            Link
          </a>
          <a href='/link' className='header4__collection-link'>
            Link
          </a>
          <a href='/link'>
            <IoPersonOutline />
          </a>

          <a href='/cart'>
            <IoCartOutline />
          </a>
        </div>
      </header>
    </>
  );
}
