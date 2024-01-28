import styles from "./component-bas-gauche.module.css";
import {useContext} from "react";
import {BoxNumberContext} from "./context/BoxNumberContext.jsx";

// eslint-disable-next-line react/prop-types
export default function CommonBox({data, text}) {
    const boxNumber = useContext(BoxNumberContext);

    if (boxNumber === 1) {
        return (
            <div className={styles.boxGroup}>
                <div className={styles.commonBoxOne}>
                    <p>{text}</p>
                </div>
            </div>
        )
    } else if (boxNumber === 2) {
        return (
            <div className={styles.boxGroup}>
                <div className={styles.commonBoxTwo}>
                    <div className={styles.boldText}>{data[0]}</div>
                    <div className={styles.textSmall}>Trains retardés</div>
                </div>
                <div className={styles.commonBoxTwo}>
                    <div className={styles.boldText}>{data[1]}</div>
                    <div className={styles.textSmall}>Trains supprimés</div>
                </div>
            </div>
        )
    } else if (boxNumber === 3) {
        return (
            <div className={styles.boxGroup}>
                <div className={styles.commonBoxThree}>
                    <div className={styles.textSmall}>{data[2]} €</div>
                    <div className={styles.textSmall}>Montant compensable</div>
                </div>
                <div className={styles.commonBoxThree}>
                    <div className={styles.textSmall}>{data[3]}</div>
                    <div className={styles.textSmall}>Passagers impactés</div>
                </div>
                <div className={styles.commonBoxThree}>
                    <div className={styles.textSmall}>{data[4]}</div>
                    <div className={styles.textSmall}>Minutes perdues</div>
                </div>
            </div>
        )
    }
}
