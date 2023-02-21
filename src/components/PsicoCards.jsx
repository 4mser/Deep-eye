import { Link } from 'react-router-dom';



import psicodelicos from '../data-base/PsicodelicosData';




const PsicoCards = () => {

    

    return (
        <div className="container-psicodelicos" >
            {psicodelicos.map(psicodelico => (
            <div key={psicodelico.id} className="psicodelico2" >
                <Link className='links-router' to={`/deep-eye/psicodelicos/${psicodelico.url}`}>
                    <div className="psicodelico-img2">
                        <img src={psicodelico.image} alt="Psychedelic-image" />
                        <p>{psicodelico.peligro}</p>
                    </div>
                    
                    <div>
                        <h2>{psicodelico.name}</h2>
                        <p>{psicodelico.info}</p>
                    </div>
                    <div className='btn-psicodelicos'>Ver más</div>
                </Link>
            </div>
            
        ))}
        
        </div>
    )
}

export default PsicoCards 