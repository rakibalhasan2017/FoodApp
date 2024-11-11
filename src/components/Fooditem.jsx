export default function({food}) {
    return (
        <div>
            <img src={food.image} />
            <h1>{food.title}</h1>
            <button>View Recipe</button>
        </div>
    )
}