import styles from "./second-page-component.module.css"

// eslint-disable-next-line react/prop-types
export default function IntemperieButton({oneVector, name, percentage, cssStyleName, children}) {
    let styleButton = cssStyleName + "Button";
    let styleNameButton = styleButton + "_nameIntemp";
    if (oneVector) {
        return (
            <div className={styles[styleButton]}>
                <div>
                    <svg className={styles.forteChaleurButton_vector1} xmlns="http://www.w3.org/2000/svg" width="17"
                         height="31" viewBox="0 0 17 31" fill="none">
                        <path
                            d="M8.5 31C10.08 31.001 11.629 30.5652 12.9728 29.7417C14.3167 28.9181 15.4021 27.7394 16.1072 26.3381C16.8123 24.9367 17.1091 23.3682 16.9642 21.8089C16.8193 20.2495 16.2386 18.7611 15.2871 17.5109V6.72681C15.2871 4.94275 14.5721 3.23175 13.2992 1.97023C12.0264 0.708705 10.3001 0 8.5 0C6.69994 0 4.97359 0.708705 3.70076 1.97023C2.42792 3.23175 1.71286 4.94275 1.71286 6.72681V17.5109C0.761414 18.7611 0.180659 20.2495 0.0357884 21.8089C-0.109083 23.3682 0.187707 24.9367 0.892814 26.3381C1.59792 27.7394 2.68334 28.9181 4.02719 29.7417C5.37104 30.5652 6.92001 31.001 8.5 31ZM4.48488 18.7359L4.62058 18.5943V6.72681C4.62058 5.70708 5.02933 4.72911 5.75685 4.00805C6.48438 3.28699 7.47112 2.88187 8.5 2.88187C9.52888 2.88187 10.5156 3.28699 11.2431 4.00805C11.9707 4.72911 12.3794 5.70708 12.3794 6.72681V18.5943L12.5151 18.7288C13.2805 19.5107 13.7964 20.4988 13.9986 21.5696C14.2007 22.6404 14.0802 23.7466 13.6518 24.7499C13.2235 25.7532 12.5065 26.6091 11.5902 27.2109C10.674 27.8127 9.59917 28.1337 8.5 28.1337C7.40083 28.1337 6.32599 27.8127 5.40975 27.2109C4.49352 26.6091 3.77649 25.7532 3.34816 24.7499C2.91984 23.7466 2.79925 22.6404 3.00141 21.5696C3.20357 20.4988 3.71953 19.5107 4.48488 18.7288"
                            fill="#FF0000"/>
                    </svg>
                    <svg className={styles.forteChaleurButton_vector2} xmlns="http://www.w3.org/2000/svg" width="7"
                         height="14" viewBox="0 0 7 14" fill="none">
                        <path
                            d="M2.86986 13.9499C3.69408 14.0835 4.54436 13.9479 5.26688 13.5676C5.9894 13.1873 6.53651 12.5875 6.8091 11.8765C7.08169 11.1655 7.06177 10.3904 6.75306 9.69148C6.44434 8.99253 5.86722 8.41582 5.12599 8.06574V1.44973C5.12599 1.06525 4.95583 0.696504 4.65298 0.424631C4.35014 0.152759 3.93939 0 3.5111 0C3.08281 0 2.67206 0.152759 2.36922 0.424631C2.06637 0.696504 1.89621 1.06525 1.89621 1.44973V8.06574C1.2339 8.37107 0.6977 8.8585 0.365875 9.45683C0.0340491 10.0552 -0.0759819 10.7331 0.0518254 11.3916C0.178352 12.0238 0.515411 12.6067 1.01852 13.0634C1.52162 13.5201 2.16709 13.8292 2.86986 13.9499Z"
                            fill="#FF0000"/>
                    </svg>
                </div>
                <div className={styles[styleNameButton]}>
                    {name}
                </div>
                <div className={styles[styleNameButton]}>
                    {percentage}
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles[styleButton]}>
                {children}
                <div className={styles[styleNameButton]}>
                    {name}
                </div>
                <div className={styles[styleNameButton]}>
                    {percentage}
                </div>
            </div>
        )
    }
}