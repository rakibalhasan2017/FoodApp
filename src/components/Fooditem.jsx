import styles from "./fooditem.module.css";

export default function FoodItem({ food }) {
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image} alt={food.title} />
            <div className="itemContent">
            <h1 className={styles.itemTitle}>{food.title}</h1>
            </div>
            <div className="buttonContainer">
            <button className={styles.viewButton}>View Recipe</button>
            </div>
           
        </div>
    );
}
