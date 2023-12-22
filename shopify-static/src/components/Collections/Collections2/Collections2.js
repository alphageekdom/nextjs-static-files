import { CiHeart } from 'react-icons/ci';
export default function Collections2() {
  return (
    <div className='collection collection2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='collection2__collection-item'>
              <div className='collection2__product-img'>
                <div className='collection2__heart'>
                  <CiHeart />
                </div>
                <img
                  src='https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Images.png'
                  alt='Shoes'
                />
              </div>
              <div className='collection2__product-info'>
                <div className='collection2__product-details'>
                  <span className='collection2__product-title'>Sneakers</span>
                  <span className='collection2__product-span'>$200.00</span>
                </div>
                <div className='collection2__colors'>
                  <div className='collection2__color collection2__color--purple'></div>
                  <div className='collection2__color collection2__color--blue'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='collection2__collection-item'>
              <div className='collection2__product-img'>
                <div className='collection2__heart'>
                  <CiHeart />
                </div>
                <img
                  src='https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Air-Max-PNG-File.png'
                  alt=''
                />
              </div>
              <div className='collection2__product-info'>
                <div className='collection2__product-details'>
                  <span className='collection2__product-title'>Sneakers</span>
                  <span className='collection2__product-span'>$500.00</span>
                </div>
                <div className='collection2__colors'>
                  <div className='collection2__color collection2__color--red'></div>
                  <div className='collection2__color collection2__color--orange'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
