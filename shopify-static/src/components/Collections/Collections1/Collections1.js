import { CiHeart } from 'react-icons/ci';
export default function Collections1() {
  return (
    <div className='collection collection1'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='collection1__collection-item'>
              <div className='collection1__product-img'>
                <div className='collection1__heart'>
                  <CiHeart />
                </div>
                <img
                  src='https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Images.png'
                  alt='Shoes'
                />
              </div>
              <div className='collection1__product-info'>
                <div className='collection1__product-details'>
                  <span className='collection1__product-title'>Sneakers</span>
                  <span className='collection1__product-span'>$200.00</span>
                </div>
                <div className='collection1__colors'>
                  <div className='collection1__color collection1__color--purple'></div>
                  <div className='collection1__color collection1__color--blue'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='collection1__collection-item'>
              <div className='collection1__product-img'>
                <div className='collection1__heart'>
                  <CiHeart />
                </div>
                <img
                  src='https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Air-Max-PNG-File.png'
                  alt=''
                />
              </div>
              <div className='collection1__product-info'>
                <div className='collection1__product-details'>
                  <span className='collection1__product-title'>Sneakers</span>
                  <span className='collection1__product-span'>$500.00</span>
                </div>
                <div className='collection1__colors'>
                  <div className='collection1__color collection1__color--red'></div>
                  <div className='collection1__color collection1__color--orange'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='collection1__collection-item'>
              <div className='collection1__product-img'>
                <div className='collection1__heart'>
                  <CiHeart />
                </div>
                <img
                  src='https://static.nike.com/a/images/t_default/6cf11a76-790b-4112-93aa-a25e6fffc585/custom-nike-dunk-high-by-you-shoes.png'
                  alt=''
                />
              </div>
              <div className='collection1__product-info'>
                <div className='collection1__product-details'>
                  <span className='collection1__product-title'>Sneakers</span>
                  <span className='collection1__product-span'>$150.00</span>
                </div>
                <div className='collection1__colors'>
                  <div className='collection1__color collection1__color--black'></div>
                  <div className='collection1__color collection1__color--yellow'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
