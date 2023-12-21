import Header3 from '../header/Header3/Header3';

export default function MainLayout(props) {
  return (
    <div className='fixed-nav nav-transparent'>
      <Header3 />
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}
