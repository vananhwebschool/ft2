import styles from "./second-page-component.module.css"

export default function CommonBoxSecondPage({text}) {
    return (
        <div className={styles.commonBoxOneTextLine}>
            <div>{text}</div>
        </div>
    )

}