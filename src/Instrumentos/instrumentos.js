import './instrumentos.css'

const Instrumentos = () => {
    return (
        <section id='instrumentos'>
            <div className='grid-10'>
            <div className='title-grid'>
                        <h1>Desvende a Música</h1>
                        <h2>Aprenda a Tocar Diversos Instrumentos Musicais!</h2>
                    </div>
                <div className='instrumentos-row-2'>
                    <div className='instrumentos-flex'>
                        <h3>Cordas</h3>
                        <p>Instrumentos de cordas são tocados ao vibrar as cordas para produzir som.</p>
                        <p>Violão, violino, violoncelo, baixo, harpa e ukulele.</p>
                    </div>
                    <div className='instrumentos-flex'>
                        <h3>Sopro</h3>
                        <p>Instrumentos de sopro produzem som através do ar soprado por meio de uma embocadura</p>
                        <p> Flauta, saxofone, clarinete, trompete, trombone e oboé.</p>
                    </div>
                    <div className='instrumentos-flex'>
                        <h3>Teclas</h3>
                        <p>Instrumentos de teclas têm um teclado que é pressionado para produzir o som.</p>
                        <p>Piano, teclado, órgão e sintetizador.</p>
                    </div>
                    <div className='instrumentos-flex'>
                        <h3>Percussão</h3>
                        <p>Instrumentos de percussão produzem som através de batidas, golpes ou agitação.</p>
                        <p>Bateria, tambor, pandeiro, chocalho e maracas.</p>
                    </div>
                    <div className='instrumentos-flex'>
                        <h3>Instrumentos Eletrônicos</h3>
                        <p>Esses instrumentos usam eletrônica para gerar ou modificar o som.</p>
                        <p>Sintetizador, sampler, drum machine e teclado eletrônico.</p>
                    </div>
                    <div className='instrumentos-flex'>
                        <h3>Instrumentos de Voz</h3>
                        <p>A voz humana também é considerada um instrumento musical. Ela pode ser usada em diversos estilos e gêneros musicais.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Instrumentos;