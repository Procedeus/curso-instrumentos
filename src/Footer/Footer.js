import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className='grid-10'>
                <div className='div-footer'>
                    <ul className='footer-links'>
                        <li>
                            <a href='#home'>HOME</a>
                        </li>
                        <li>
                            <a href='#beneficios'>BENEFICIOS</a>
                        </li>
                        <li>
                            <a href='#instrumentos'>INSTRUMENTOS</a>
                        </li>
                    </ul>
                    <form className='form-footer'>
                        <input type='text' placeholder='Email'/>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;