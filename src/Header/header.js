import './header.css';
import img  from './assets/guitar.png';
import { useState } from 'react'; 
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const isOpen = () => {
      setMobileMenu(!mobileMenu);

    }
    return(
      <header id='home' className='home'>
        <nav className={`navbar-sticky${mobileMenu ? '-active' : ''}`}>
          <div id='mobileMenu'>
            <GiHamburgerMenu className={mobileMenu ? 'not-show' : ''} onClick={() => { isOpen() }}/>
            <AiOutlineClose className={mobileMenu ? '' : 'not-show'} onClick={() => { isOpen() }}/>
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
            <a className='button-header' href='#precos'> Visualizar Cursos</a>
          </div>
          <div className='image-guitar'>
            <img src={ img } alt='Guitar Man' id='guitar'></img>
          </div>
        </div>
      </header>
    );
}

export default Header;