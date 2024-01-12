import logo from '../assets/logo.svg'

export default function Component1() {
    const styles = {
        rectangleGauche: {
            backgroundColor: "#6E1E78",
            display: "flex",
            width: "165px",
            height: "100px",
            padding: "10px 19px 10px 20px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "4px",
            top: "50px",
            left: "255px"
        },
        texte1: {
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Uber Move",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            margin: "0px",
        },
        texte2: {
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Uber Move",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            margin: "0px"
        },
    }
    return(
        <>
            <div style={styles.rectangleGauche}>
                <div>
                    <p style={styles.texte1}>2023</p>
                    <p style={styles.texte2}>Résumé</p>
                </div>
            </div>
            <img src={logo}></img>
        </>
      
    )
}