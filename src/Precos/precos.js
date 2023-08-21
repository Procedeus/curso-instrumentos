import './precos.css';
import { FaGuitar } from 'react-icons/fa';
import { SiLevelsdotfyi } from 'react-icons/si';
import { LuCrown } from 'react-icons/lu';

const Precos = () => {
    return(
        <section id='precos'>
            <div className='grid-10'>
                <div className='title-grid'>
                    <h1>Desvende a Música</h1>
                    <h2>Aprenda a Tocar Diversos Instrumentos Musicais!</h2>
                </div>
                <div className='precos-row-2'>
                    <div className='precos-justify'>
                        <div className='precos-box'>
                            <SiLevelsdotfyi />
                            <h3>Iniciante</h3>
                            <p>Acesso a aulas básicas de instrumento</p>
                            <p>Material de estudo incluso</p>
                            <p>Suporte por e-mail</p>
                        </div>
                        <div className='div-button'>
                            <h2>R$99,90/mês</h2>
                            <a className='button-precos' href='/'>Assinar Agora</a>
                        </div>
                    </div>
                    <div className='precos-justify'>
                        <div className='precos-box'>
                            <FaGuitar />
                            <h3>Intermediário</h3>
                            <p>Acesso a aulas avançadas e técnicas específicas</p>
                            <p>Material de estudo completo</p>
                            <p>Suporte por e-mail e chat ao vivo</p>
                        </div>
                        <div className='div-button'>
                            <h2>R$149,90/mês</h2>
                            <a className='button-precos' href='/'>Assinar Agora</a>
                        </div>
                    </div>
                    <div className='precos-justify'>
                        <div className='precos-box'>
                            <LuCrown />
                            <h3>Premium</h3>
                            <p>Acesso ilimitado a todas as aulas e conteúdos exclusivos</p>
                            <p>Material de estudo em formato impresso e digital</p>
                            <p>Suporte personalizado por e-mail, chat ao vivo e sessões individuais de tutoria</p>
                        </div>
                        <div className='div-button'>
                            <h2>R$199,90/mês</h2>
                            <a className='button-precos' href='/'>Assinar Agora</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Precos;