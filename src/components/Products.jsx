import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setFilter } from '../redux/slices/filterSlice'

const initialProducts = [
  { name: 'pants', cost: 9.99},
  { name: 'paper plates', cost: 5.99},
  { name: 'staples', cost: 1.99},
]

function Products() {
  const [products] = useState(initialProducts)
  const filterBy = useSelector(
    state => state.productFilter.filter
  );
  return (
    <div>

      {
        products
          .filter(product => 
            filterBy ? product.name.includes(filterBy) : true
          )
          .map((product) => (
          <div key={product.name}>
            {product.name} - {product.cost}
          </div>
      ))}
    </div>
  )
}

export default Products