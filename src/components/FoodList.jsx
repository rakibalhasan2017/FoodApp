import Fooditem from "./Fooditem";

export default function({fooddata}) {
    return (
        <div>
             {fooddata.map((food) => (
           <Fooditem key={food.id} food={food} />
         ))}
        </div>
    )
}