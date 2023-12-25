import Header2 from '../Header/Header2/Header2';
import Header1 from '../Header/Header1/Header1';
import Header3 from '../Header/Header3/Header3';
import Header4 from '../Header/Header4/Header4';

export default function MainLayout(props) {
  return (
    <div className='fixed-nav nav-transparent'>
      <Header1 />
      <main>{props.children}</main>
    </div>
  );
}
