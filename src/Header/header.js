import './header.css';
import img  from './assets/guitar.png';

const Header = () => {
    return(
      <header>
        <div className='grid-10'>
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