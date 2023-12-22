import Header3 from '../Header/Header3/Header3';

export default function MainLayout(props) {
  return (
    <div className='fixed-nav nav-transparent'>
      <Header3 />
      <main>{props.children}</main>
    </div>
  );
}
