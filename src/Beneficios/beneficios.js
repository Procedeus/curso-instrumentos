import './beneficios.css';
import { IoMdSchool } from 'react-icons/io';
import { GiTeacher } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';
import { BiSolidBookAdd } from 'react-icons/bi';


const Beneficios = () => {
    return (
        <section id='beneficios'>
            <div className='grid-10'>
                <div className='title-grid title-margin'>
                    <h1>Benefícios do curso</h1>
                    <h2>Amplie sua criatividade e conquiste confiança para tocar qualquer melodia com nosso curso de instrumentos</h2>
                </div>
                <div className='beneficios-row-2'>
                    <div className='beneficios-box'>
                        <IoMdSchool />
                        <h3>Aprendizado Acelerado</h3>
                        <p> Se concentra em identificar as melhores 
                            estratégias para cada indivíduo, levando em 
                            conta seus estilos de aprendizagem, interesses 
                            e habilidades únicas.
                        </p>
                    </div>
                    <div className='beneficios-box'>
                        <GiTeacher />
                        <h3>Instrutores Experientes</h3>
                        <p> Com anos de prática e conhecimento acumulado, 
                            esses profissionais trazem consigo uma bagagem 
                            valiosa que enriquece a jornada educacional dos 
                            estudantes.
                        </p>
                    </div>
                    <div className='beneficios-box'>
                        <MdSupportAgent />
                        <h3>Suporte Personalizado</h3>
                        <p> Acompanhamento individualizado e atento aos alunos, 
                            proporcionando-lhes uma experiência educacional mais 
                            eficaz e significativa.
                        </p>
                    </div>
                    <div className='beneficios-box'>
                        <BiSolidBookAdd />
                        <h3>Acesso a material de estudos</h3>
                        <p> Proporcionar aos alunos acesso fácil e abrangente ao 
                            conteúdo de estudo é essencial para maximizar o aprendizado 
                            e o desenvolvimento de habilidades.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beneficios;