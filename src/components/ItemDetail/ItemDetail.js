import './ItemDetail.css'
import { useContext, useState, useEffect } from 'react' 
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetail = ({ itemId }) => {
    
    const [product, setProduct] = useState(null)
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)
    
    useEffect(() => {
        if (!itemId) {
            return;
        }

        const docRef = doc(db, 'juegos', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                setProduct(data);
            })
            .catch(error => {
                console.error('Firestore Error:', error);
            });
    }, [itemId]);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        if (product) {
            const item = {
                id: itemId,
                name: product.name,
                price: product.price
            };
            addItem(item, quantity);
        }
    };

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {product ? product.name : 'Cargando...'}
                </h2>
            </header>
            <picture>
                <img src={product ? product.img : ''} alt={product ? product.name : ''} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Categoría: {product ? product.category : ''}
                </p>
                <p className='Info'>
                    Descripción: {product ? product.description : ''}
                </p>
                <p className='Info'>
                    Precio: {product ? `$${product.price}` : 'Cargando...'}
                </p>
                <p className='Info'>
                    Stock disponible: {product ? product.stock : 0}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={product ? product.stock : 0} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    );
};

export default ItemDetail;