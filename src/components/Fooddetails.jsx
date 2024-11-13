import React, { useEffect, useState } from "react";
export default function({foodid}) {
    const URL = `https://api.spoonacular.com/recipes/${foodid}/information`
    const API_KEY = "9fd2790c366f441194b0d76e0ff75653";
    const [food, setfood] = useState([{}]);
    useEffect(() => {
        async function fetchfood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setfood(data);
        }
        if (foodid !== "") fetchfood();
    }, [foodid]);

    return (
        <div>
            <h1>food details</h1>
            <h1>{foodid}</h1>
            <div>
            <h1>{food.title}</h1>
            <img src= {food.image} />
            </div>
            <div>
                <h2>Instruction</h2>
                {food.analyzedInstructions?.[0]?.steps ? (
                    <ol>
                        {food.analyzedInstructions[0].steps.map((step) => (
                            <li key={step.number}>
                                {step.step}
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p>No instructions available.</p>
                )}
            </div>
           
        </div>
    )
}