import './nav.css';
import { useState, useEffect } from 'react'; 


const Nav = () => {
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
        <ul className={`navbar${isSticky ? '-sticky' : ''}`}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#beneficios">BENEFICIOS</a></li>
            <li><a href="#instrumentos">INSTRUMENTOS</a></li>
            <li><a href="#precos">PREÇOS</a></li>
        </ul>
    )
}

export default Nav;