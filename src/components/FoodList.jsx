import Fooditem from "./Fooditem";

export default function({fooddata, setfoodid}) {
    return (
        <div>
             {fooddata.map((food) => (
           <Fooditem setfoodid = {setfoodid} key={food.id} food={food} />
         ))}
        </div>
    )
}