import Header1 from '../header/Header1/Header1';

export default function MainLayout(props) {
  return (
    <>
      <Header1>Header</Header1>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </>
  );
}
