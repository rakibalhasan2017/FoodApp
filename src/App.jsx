import { useState } from 'react'
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/Container';
import Innercontainer from './components/Innercontainer';
import Fooddetails from './components/Fooddetails';

export default function App() {
  const [fooddata, setfooddata] = useState([]);
  const [foodid, setfoodid] = useState("");
  return (
    <div className='App'>
      <Nav/>
     <Search fooddata = {fooddata} setfooddata = {setfooddata} />
     <Container>
      <Innercontainer>
      <FoodList setfoodid = {setfoodid} fooddata={fooddata} />
      </Innercontainer>
      <Innercontainer>
     <Fooddetails foodid = {foodid} />
      </Innercontainer>
     </Container>
    </div>
  )
}