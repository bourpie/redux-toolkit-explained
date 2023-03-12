import './App.css'
import { useState } from 'react'
import Filter from './components/Filter'
import Products from './components/Products'

function App() {
  const [filter, setFilter] = useState('')
  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} />
      <Products filterBy={filter} />
    </div>
  );
}

export default App
