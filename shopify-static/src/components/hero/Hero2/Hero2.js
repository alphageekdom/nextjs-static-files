export default function Hero2() {
  return (
    <div className='hero hero2'>
      <div className='hero2__collection1'>
        <img
          src='https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=3262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Hero'
          className='hero2__bg'
        />
        <div className='hero2__content-container'>
          <div className='hero2__info'>
            <a href='#' className='hero2__button'>
              Men
            </a>
          </div>
        </div>
      </div>
      <div className='hero2__collection2'>
        <img
          src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Hero'
          className='hero2__bg'
        />
        <div className='hero2__content-container'>
          <div className='hero2__info'>
            <a href='#' className='hero2__button'>
              Women
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
