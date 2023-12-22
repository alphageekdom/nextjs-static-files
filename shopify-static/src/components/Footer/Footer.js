import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer(props) {
  const date = new Date().getFullYear();
  return (
    <footer className={'footer'}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get Help</span>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                </div>
              </div>
              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get Help</span>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                </div>
              </div>
              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get Help</span>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='footer__extra'>
              <span className='footer__column-title'>Email Newsletter:</span>
              <input
                type='text'
                name='email_newsletter'
                className='footer__input'
                placeholder='email@company.com'
              />
              <p className='footer__text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                neque reprehenderit amet cum! Nihil repudiandae ipsa cupiditate
                commodi libero. Sed, ab! Iusto quia sequi officiis magni? Iusto
                dicta possimus maxime.
              </p>
              <div className='footer__social-icons'>
                <a href='#' className='footer__social-link'>
                  <FaFacebook />
                </a>
                <a href='#' className='footer__social-link'>
                  <FaXTwitter />
                </a>
                <a href='#' className='footer__social-link'>
                  <FaInstagram />
                </a>
                <a href='#' className='footer__social-link'>
                  <FaYoutube />
                </a>
                <a href='#' className='footer__social-link'>
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='footer__bottom'>
              <div className='footer__copyright'>
                © {date} Alpha Geekdom, LLC All Rights Reserved
              </div>
              <div className='footer__extra-links'>
                <a href='#'>Link</a>
                <a href='#'>Link</a>
                <a href='#'>Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
