import { CiHeart } from 'react-icons/ci';
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import data from '@/components/Collections/Collections4/data';

export default function Collections4() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='collection collection4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='collection4__collection-item'>
              <div className='collection4__product-img'>
                <div className='collection4__heart'>
                  <CiHeart />
                </div>
                <img
                  src={data[currentIndex]['url']}
                  alt='Shoes'
                  className='collection4__img-front item'
                />
                ;
                <div className='collection4__buttons'>
                  <div className='collection4__btn-left'>
                    <FaArrowAltCircleLeft size={40} onClick={prevSlide} />
                  </div>
                  {/* Right Button */}
                  <div className='collection4__btn-right'>
                    <FaArrowAltCircleRight size={40} onClick={nextSlide} />
                  </div>
                </div>
              </div>
              <div className='collection4__product-info'>
                <div className='collection4__product-details'>
                  <span className='collection4__product-title'>Sneakers</span>
                  <span className='collection4__product-span'>$200.00</span>
                </div>
                <div className='collection4__colors'>
                  <div className='collection4__color collection1__color--purple'></div>
                  <div className='collection4__color collection1__color--blue'></div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='col-md-3'>
            <div className='collection4__collection-item'>
              <div className='collection4__product-img'>
                <div className='collection4__heart'>
                  <CiHeart />
                </div>
                <img
                  src={data[currentIndex]['url']}
                  alt='Shoes'
                  className='collection4__img-front item'
                />
                <div className='collection4__buttons'>
                  <div className='collection4__btn-left'>
                    <FaArrowAltCircleLeft size={40} onClick={prevSlide} />
                  </div>
                  <div className='collection4__btn-right'>
                    <FaArrowAltCircleRight size={40} onClick={nextSlide} />
                  </div>
                </div>
              </div>
              <div className='collection4__product-info'>
                <div className='collection4__product-details'>
                  <span className='collection4__product-title'>Sneakers</span>
                  <span className='collection4__product-span'>$200.00</span>
                </div>
                <div className='collection4__colors'>
                  <div className='collection4__color collection1__color--purple'></div>
                  <div className='collection4__color collection1__color--blue'></div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className='col-md-3'>
            <div className='collection4__collection-item'>
              <div className='collection4__product-img'>
                <div className='collection4__heart'>
                  <CiHeart />
                </div>
                <img
                  src={data[currentIndex]['url']}
                  alt='Shoes'
                  className='collection4__img-front item'
                />
                <div className='collection4__buttons'>
                  <div className='collection4__btn-left'>
                    <FaArrowAltCircleLeft size={40} onClick={prevSlide} />
                  </div>
                  <div className='collection4__btn-right'>
                    <FaArrowAltCircleRight size={40} onClick={nextSlide} />
                  </div>
                </div>
              </div>
              <div className='collection4__product-info'>
                <div className='collection4__product-details'>
                  <span className='collection4__product-title'>Sneakers</span>
                  <span className='collection4__product-span'>$200.00</span>
                </div>
                <div className='collection4__colors'>
                  <div className='collection4__color collection1__color--purple'></div>
                  <div className='collection4__color collection1__color--blue'></div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className='col-md-3'>
            <div className='collection4__collection-item'>
              <div className='collection4__product-img'>
                <div className='collection4__heart'>
                  <CiHeart />
                </div>
                <img
                  src={data[currentIndex]['url']}
                  alt='Shoes'
                  className='collection4__img-front item'
                />
                <div className='collection4__buttons'>
                  <div className='collection4__btn-left'>
                    <FaArrowAltCircleLeft size={40} onClick={prevSlide} />
                  </div>
                  <div className='collection4__btn-right'>
                    <FaArrowAltCircleRight size={40} onClick={nextSlide} />
                  </div>
                </div>
              </div>
              <div className='collection4__product-info'>
                <div className='collection4__product-details'>
                  <span className='collection4__product-title'>Sneakers</span>
                  <span className='collection4__product-span'>$200.00</span>
                </div>
                <div className='collection4__colors'>
                  <div className='collection4__color collection1__color--purple'></div>
                  <div className='collection4__color collection1__color--blue'></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
