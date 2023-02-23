import { Link } from 'react-router-dom';



import articulostienda from '../data-base/ArticulosTiendaData';



const ArticulosTienda = () => {

    

    return (
        <div className="container-productos" >
            {articulostienda.map(articulo => (
            <div key={articulo.id} className="productos" >
                <Link className='links-router' to={`/deep-eye/productos/${articulo.url}`}>
                    <div className="imagen-producto">
                        <img src={articulo.image} alt="Psychedelic-image" />
                        <p>{articulo.peligro}</p>
                    </div>
                    
                    <div>
                        <h2>{articulo.name}</h2>
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