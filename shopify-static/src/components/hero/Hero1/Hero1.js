export default function Hero1() {
  return (
    <div className='hero hero1 hero1--aligned-right'>
      <img
        src='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Hero'
        className='hero1__bg'
      />
      <div className='hero1__content-container'>
        <div className='hero1__info'>
          <h1 className='hero1__title'>Title</h1>
          <p className='hero1__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            illo aperiam labore, saepe repellendus quos quia corporis veniam ex
            a voluptatibus exercitationem, libero deserunt error culpa expedita
            excepturi. Fugit, sint.
          </p>
          <a href='#' className='hero1__button'>
            View More
          </a>
        </div>
      </div>
      <h1>Hero1</h1>
    </div>
  );
}
