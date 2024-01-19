import logo from "../assets/logo.svg";
import VectorG from "../assets/VectorG.svg";
import VectorD from "../assets/VectorD.svg";
import { Outlet } from "react-router-dom";

export default function Component1() {
  const styles = {
    contenus: {
      display: "flex",
      flexDirection: "column",
      height: "905px",
      backgroundColor: "white",
      margin: "20px",
    },
    partieHaute: {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "50px",
      paddingTop: "50px",
      marginRight: "50px",
    },
    partieGauche: {
      display: "flex",
    },
    rectangleAnnee: {
      backgroundColor: "#6E1E78",
      width: "165px",
      height: "100px",
      paddingTop: "10px",
      marginLeft: "30px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
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
      margin: "0px",
    },
    logo: {
      margin: "0px",
      display: "flex",
      top: "50px",
      left: "5px",
    },
    
    rectangleAxe: {
      backgroundColor: "#6E1E78",
      width: "200px",
      height: "43px",
      padding: "10px 20px 10px 20px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
    },
    texte3: {
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Uber Move",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      margin: "0",
    },
    rectangleNom: {
      backgroundColor: "#6E1E78",
      width: "200px",
      height: "55px",
      padding: "10px 20px 10px 20px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
      marginTop: "5px",
    },
    vecteurGauche: {
      marginTop: "10px",
      marginRight: "96px",
    },
    partieBasse: {
      marginLeft: "60px",
      height: "36px",
      flex: 1,
      display: "flex"
    },
    ligne1: {
      backgroundColor: "#6E1E78",
      width: "307px",
      height: "36px",
      paddingTop: "5px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
    },
    texte4: {
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Uber Move",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      margin: "0px",
    },
    rectangleLigne2: {
      width: "152px",
      height: "103px",
      backgroundColor: "#6E1E78",
      borderRadius: "4px",
    },
    ligne2: {
      display: "flex",
      justifyContent: "space-between",
      width: "307px",
      marginTop: "5px",
    },
    rectangleLigne3: {
      width: "152px",
      height: "145px",
      backgroundColor: "#6E1E78",
      borderRadius: "4px",
    },
    ligne3: {
      display: "flex",
      justifyContent: "space-between",
      width: "307px",
      marginTop: "5px",
    },
    partieFooter: {
      backgroundColor: "white",
      width: "1620px",
      height: "55px",
      display: "flex",
    },
    partieGauche1: {
      backgroundColor: "white",
      width: "736px",
      height: "60px",
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "2px",
    },
    bloc1: {
      backgroundColor: "#6E1E78",
      width: "130px",
      height: "60px",
    },
    textebloc: {
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Uber Move",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
    },
    bloc2: {
      backgroundColor: "#333333",
      width: "200px",
      height: "60px",
    },
    bloc3: {
      backgroundColor: "#6E1E78",
      width: "200px",
      height: "60px",
    },
    partieMilieu: {
      backgroundColor: "#6E1E78",
      width: "750px",
      height: "60px",
      marginLeft: "2px",
    },
    partieDroite1: {
      backgroundColor: "#6E1E78",
      width: "126px",
      height: "60px",
      marginLeft: "2px",
    },
  };
  return (
    <>
      <div style={styles.contenus}>
        <div style={styles.partieHaute}>
          <div style={styles.partieGauche}>
            <img src={logo} style={styles.logo}></img>
            <div style={styles.rectangleAnnee}>
              <div>
                <p style={styles.texte1}>2023</p>
                <p style={styles.texte2}>Résumé</p>
              </div>
            </div>
          </div>
          <div style={styles.partieDroite}>
            <div style={styles.rectangleAxe}>
              <p style={styles.texte3}>Axe</p>
            </div>
            <div style={styles.rectangleNom}>
            </div>
          </div>
        </div>
        <div style={styles.partieBasse}>
          <Outlet></Outlet>
        </div>
        <div style={styles.partieFooter}>
          <div style={styles.partieGauche1}>
            <div style={styles.bloc1}>
              <p style={styles.textebloc}>2023</p>
            </div>
            <div style={styles.bloc2}>
              <p style={styles.textebloc}>Map</p>
            </div>
            <div style={styles.bloc3}>
              <p style={styles.textebloc}>Graphique</p>
            </div>
            <div style={styles.bloc3}>
              <p style={styles.textebloc}>Favoris</p>
            </div>
          </div>
          <div style={styles.partieMilieu}>
            <div style={styles.bloc4}></div>
          </div>
          <div style={styles.partieDroite1}>
            <div style={styles.bloc5}>
              <p style={styles.textebloc}>Partager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
