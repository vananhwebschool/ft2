import "./App.css";
import Map from "./Map.jsx";

function App() {
    const styles = {
        partieBasseDroite: {
            marginLeft: "60px",
            height: "100%",
            flex: 1,
        },
        partieBasseGauche: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "50px"
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
            width: "101px",
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
    }
    
  return (
    <>
      <div style={styles.partieBasseGauche}>
        <div style={styles.ligne1}>
          <p style={styles.texte4}>Données générales</p>
        </div>
        <div style={styles.ligne2}>
          <div style={styles.rectangleLigne2}></div>
          <div style={styles.rectangleLigne2}></div>
          <div style={styles.rectangleLigne2}></div>
        </div>
        <div style={styles.ligne3}>
          <div style={styles.rectangleLigne3}></div>
          <div style={styles.rectangleLigne3}></div>
        </div>
      </div>
      <div style={styles.partieBasseDroite}>
      <Map></Map> 
      </div>
    </>
  );
}

export default App;
