import styles from "./second-page-component.module.css"
import logo from "../../assets/logo-sncf-voyageurs.svg"
import CommonBoxSecondPage from "./CommonBoxSecondPage.jsx";
export default function SncfLogo() {
    return (
        <>
            <div className={styles.logoTextBox}>
                <img className={styles.logo} src={logo} alt="logo-sncf-voyageurs" />
                <div className={styles.logoTextBox}>
                    <div className={styles.commonBoxTwoTextLines}>
                        <div className={styles.boldText}>2023</div>
                        <div className={styles.textSmall}>Résumé</div>
                    </div>
                    <div>
                        <CommonBoxSecondPage text={"SUD-EST"} />
                        <CommonBoxSecondPage text={"Intempéries"} />
                    </div>
                </div>
            </div>
        </>
    )
}