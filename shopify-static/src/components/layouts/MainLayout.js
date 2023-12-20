import Header1 from '../header/Header1/Header1';
import Header2 from '../header/Header2/Header2';
import Header3 from '../header/Header3/Header3';

export default function MainLayout(props) {
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />
      <main>{props.children}</main>
      <footer>Footer</footer>
    </>
  );
}
