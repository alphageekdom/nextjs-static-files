import AnnounceBar from '@/components/announceBar/AnnounceBar';
import { IoPersonOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';

export default function Header4() {
  return (
    <>
      <AnnounceBar />
      <header className='header header4'>
        <div className='header4__logo'>
          <a href='/link'>LOGO</a>
        </div>
        <div className='header4__collections-nav'>
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
    </>
  );
}
