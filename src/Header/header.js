import './header.css';
import img  from './assets/guitar.png';
import { useState, useEffect } from 'react'; 
import './Nav/nav.css';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 40) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

    window.addEventListener('scroll', handleScroll);
  }, []);
    return(
      <header id='home' className={`home${isSticky ? '-sticky' : ''}`}>
        <ul className={`navbar${isSticky ? '-sticky' : ''}`}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#beneficios">BENEFICIOS</a></li>
            <li><a href="#instrumentos">INSTRUMENTOS</a></li>
            <li><a href="#precos">PREÇOS</a></li>
        </ul>
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