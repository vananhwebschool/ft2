import styles from "./second-page-component.module.css"
import CommonBoxSecondPage from "./CommonBoxSecondPage.jsx";

export default function OdSelector()

{
    return (
        <div className={styles.logoTextBox}>
            <CommonBoxSecondPage text={"OD"} />
            <button className={styles.selectorButton}>
                <i className={styles.selectorButton_arrow}></i>
            </button>
        </div>
    )
}