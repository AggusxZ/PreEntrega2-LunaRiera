import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) 
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 

        const collectionRef = categoryId
          ? query(collection(db, 'juegos'), where('category', '==', categoryId))
          : collection(db, 'juegos')

        const response = await getDocs(collectionRef)
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false); 
      }
    }

    fetchData()
  }, [categoryId])

  return (
    <div className="Container">
      <div className="Content">
        <h1>{greeting}</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </div>
  )
}

export default ItemListContainer