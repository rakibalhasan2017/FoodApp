import { useState } from 'react'
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';

export default function App() {
  const [fooddata, setfooddata] = useState([]);
  return (
    <div className='App'>
      <Nav/>
     <Search fooddata = {fooddata} setfooddata = {setfooddata} />
     <FoodList fooddata={fooddata} />
    </div>
  )
}