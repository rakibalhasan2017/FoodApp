import { useEffect, useState } from "react"
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9fd2790c366f441194b0d76e0ff75653";


export default function Search({fooddata, setfooddata}) {
    const [query, setQuery] = useState("pizza");
    const handlechange = (event) => {
        setQuery(event.target.value);
      };
      useEffect(() => {
        async function fetchfood() {
           const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY} `);
           const data = await res.json();
           console.log(data.results);
           setfooddata(data.results);
           
        }
        fetchfood();
      }, [query]);
    return (
        <div>
            <input
             type="text"
             value={query}
             onChange={handlechange}
              />
              <p>the input value is {query}</p>
        </div>
    )
}