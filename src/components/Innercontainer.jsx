import styles from "./innercontainer.module.css"
export default function({children}) {
    return (
        <div className={styles.childcontainer} >
            {children}
        </div>
    )
}