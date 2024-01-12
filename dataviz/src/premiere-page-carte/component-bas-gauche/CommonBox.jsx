import styles from "./component-bas-gauche.module.css";
import {useContext} from "react";
import {BoxNumberContext} from "./context/BoxNumberContext.jsx";

export default function CommonBox() {
    const boxNumber = useContext(BoxNumberContext);
    const montantCompensable = 7;
    const passagersImpactes = 489;
    if (boxNumber === 1) {
        return (
            <div className={styles.boxGroup}>
                <div className={styles.commonBoxOne}>
                    <p>Données générales</p>
                </div>
            </div>
        )
    } else if (boxNumber === 2) {
        return (
            <div className={styles.boxGroup}>
                <div className={styles.commonBoxTwo}>
                    <div className={styles.boldText}>{montantCompensable} €</div>
                    <div className={styles.textSmall}>Montant compensable</div>
                </div>
                <div className={styles.commonBoxTwo}>
                    <div className={styles.boldText}>{passagersImpactes} K</div>
                    <div className={styles.textSmall}>Passagers impactés</div>
                </div>
            </div>
        )
    } else if (boxNumber === 3) {
        return (
            <div className={styles.boxGroup}>
                <div className={styles.commonBoxThree}>
                </div>
                <div className={styles.commonBoxThree}>
                </div>
                <div className={styles.commonBoxThree}>
                </div>
            </div>
        )
    }
}

function defineDisplayContent(boxType) {
    if (boxType === "data") {
        return <p>Données générales</p>
    } else if (boxType === "label-selector") {
        return <p>Axe</p>
    } else if (boxType === "options-selector") {
        return
    }
}