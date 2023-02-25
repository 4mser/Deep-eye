import { Link } from 'react-router-dom';



import articulostienda from '../data-base/ArticulosTiendaData';



const ArticulosTienda = () => {

    

    return (
        <div className="container-productos" >
            {articulostienda.map(articulo => (
            <div key={articulo.id} className="productos" >
                <Link className='link-productos' to={`/deep-eye/productos/${articulo.url}`}>
                    <div className="p-img">
                        <img src={articulo.image} alt="Psychedelic-image" />
                    </div>
                    
                    <div className='p-info'>
                        <h2>{articulo.name}</h2>
                        <p>{articulo.oferta}</p>
                        <p>{articulo.info}</p>
                    </div>
                    
                    <div className='btn-productos'>Ver Producto</div>
                </Link>
            </div>
            
        ))}
        
        </div>
    )
}

export default ArticulosTienda