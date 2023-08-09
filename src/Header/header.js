import './header.css';
import img  from './assets/guitar.png';
import { useState, useEffect } from 'react'; 
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

    window.addEventListener('scroll', handleScroll);
    }, []);

    const isOpen = () => {
      setMobileMenu(!mobileMenu);
    }
    return(
      <header id='home' className={`home${isSticky ? '-sticky' : ''}`}>
        <nav className={`navbar${isSticky ? '-sticky' : ''}${mobileMenu ? '-active' : ''}`}>
          <div  id='mobileMenu' onClick={() => { isOpen() }}>
            <GiHamburgerMenu/>
          </div>
          <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#beneficios">BENEFICIOS</a></li>
              <li><a href="#instrumentos">INSTRUMENTOS</a></li>
              <li><a href="#precos">PREÇOS</a></li>
          </ul>
        </nav>
        <div className='grid-10 center-header'>
          <div className='header-text'>
            <h1>Aprenda a Tocar o Instrumento dos Seus Sonhos em Poucas Semanas!</h1>
            <h2>Imagine-se tocando aquele instrumento que sempre foi seu sonho dominar, emocionando plateias e expressando sua paixão pela música.</h2>
            <a className='button-header' href='/'> Visualizar Cursos</a>
          </div>
          <div className='image-guitar'>
            <img src={ img } alt='Guitar Man' id='guitar'></img>
          </div>
        </div>
      </header>
    );
}

export default Header;