import phone from "../assets/phone.svg";
import title from "../assets/surfinschool.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import whatsapp from "../assets/whatsapp.svg";
import news from "../assets/news-img.jpg";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header__top">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    home
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    activities
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    pricing plan
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    contact us
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    blog
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    about us
                  </a>
                </li>
              </ul>
            </nav>
            <a className="phone" href="tel:+14434451191">
              <img src={phone} alt="phone" />
              +1(443)445-1191
            </a>
          </div>
          <img className="title-img" src={title} alt="title" />
          <h1 className="title visually-hidden">Surfing school</h1>
          <p className="title-text">Kailua, Hawaii</p>
          <div className="header__content">
            <div className="header__info">
              <ul className="header__info-list">
                <li className="header__info-item">
                  <h4>Private lessons</h4>
                </li>
                <li className="header__info-item">
                  <h4>Group lessons</h4>
                </li>
                <li className="header__info-item">
                  <h4>Surf & Sup rentals</h4>
                </li>
                <li className="header__info-item">
                  <h4>Stand up puddle</h4>
                </li>
                <li className="header__info-item">
                  <h4>Surf trips</h4>
                </li>
              </ul>
              <div className="header__social">
                <ul className="header__social-list">
                  <li className="header__social-item">
                    <a className="header__social-link" href="#">
                      <img src={facebook} alt="facebook" />
                    </a>
                  </li>
                  <li className="header__social-item">
                    <a className="header__social-link" href="#">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </li>
                  <li className="header__social-item">
                    <a className="header__social-link" href="#">
                      <img src={youtube} alt="youtube" />
                    </a>
                  </li>
                  <li className="header__social-item">
                    <a className="header__social-link" href="#">
                      <img src={whatsapp} alt="whatsapp" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__news">
              <div className="header__news-box">
                <h3 className="header__news-title">NAZARE. BIG WAvE TRIP</h3>
                <time className="header__news-subtitle">10/02/2025</time>
                <a className="header__news-link" href="#">
                  more info
                </a>
                <img src={news} alt="news" />
              </div>
              <div className="header__buttons">
                <a className="header__buttons-book">book now</a>
                <a className="header__buttons-activities">activities</a>
              </div>{" "}
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <p className="text">
          "WHAT LOOKS IMPOSSIBLE TODAY, TOMORROW WILL BE YOUR SOURCE OF
          INSPIRATION AND RELAXATION"
        </p>
      </div>
    </>
  );
}
