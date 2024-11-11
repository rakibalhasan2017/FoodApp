import { useState } from 'react'
import Search from './components/Search';
import FoodList from './components/FoodList';

export default function App() {
  const [fooddata, setfooddata] = useState([]);
  return (
    <div className='App'>
     <Search fooddata = {fooddata} setfooddata = {setfooddata} />
     <FoodList fooddata={fooddata} />
    </div>
  )
}