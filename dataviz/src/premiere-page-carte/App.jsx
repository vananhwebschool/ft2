import "./App.css";
import Map from "./CarteCode";
import DataBox from "./component-bas-gauche/DataBox.jsx";
import CommonBox from "./component-bas-gauche/CommonBox.jsx";
import {useMemo, useState} from "react";
import dataset1 from "../data/dataset1.json"
import logo from "../assets/logo.svg";

function App() {
    const [axe, setAxe] = useState("France");
    const styles = {
        partieBasseDroite: {
            marginLeft: "60px",
            height: "95%",
            flex: 1
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
        partieBasse: {
            marginLeft: "60px",
            height: "36px",
            flex: 1,
            display: "flex"
        }
    }

    const handleClickMap = clickedAxe => {
        setAxe(clickedAxe);
        console.log("clickedAxe");
        console.log(clickedAxe);
    }

    const memoizedLogo2023 = useMemo(() => {
        return (
            <div style={styles.partieGauche}>
                <img src={logo} style={styles.logo}></img>
                <div style={styles.rectangleAnnee}>
                    <div>
                        <p style={styles.texte1}>2023</p>
                        <p style={styles.texte2}>Résumé</p>
                    </div>
                </div>
            </div>)
    }, []);

    function getImpactDataByAxe() {
        const intemperiesClimatiquesList = ["Intempéries - Brouillard",
            "Intempéries - Forte chaleur",
            "Intempéries - Givre / Verglas",
            "Intempéries - Fortes pluies",
            "Intempéries - Vent fort",
            "Végétation",
            "Intempéries - Orage / Grêle",
            "Intempéries - Neige / congères"];
        const arrayMontantCompensable = [];
        const arrayMinsPerdus = [];
        const arrayPax = [];

        if (!!dataset1 && Array.isArray(dataset1) && axe !== "") {
            const filteredIntemperieClimatData = dataset1.filter(e => intemperiesClimatiquesList.includes(e.IO_Lib_defaillance));
            let temp = [];
            if (axe === "France") {
                temp = [...filteredIntemperieClimatData];
            } else {
                temp = [...filteredIntemperieClimatData.filter(e => e.Axe === axe)]
            }

            temp.filter(
                e => !!e.Montant_compensable).map(e => arrayMontantCompensable.push(parseInt(e.Montant_compensable.replace(",", ""))));
            const sumMontantCompensable =
                arrayMontantCompensable.length > 0 ? arrayMontantCompensable.reduce((total, num) => total + num) : 0

            temp.filter(
                e => !!e.Pax).map(e => arrayPax.push(parseInt(e.Pax.replace(",", ""))));
            const sumPax = arrayPax.length > 0 ? arrayPax.reduce((total, num) => total + num) : 0;

            temp.filter(
                e => !!e.EH && e.EH > 0).map(e => arrayMinsPerdus.push(parseInt(e.EH.replace(",", ""))));
            const moyenMinsPerdus = arrayMinsPerdus.length > 0 ? Math.round(arrayMinsPerdus.reduce((total, num) => total + num) / arrayMinsPerdus.length) : 0;

            const nbTrainRetard = temp.filter(e => !!e.Suppression && e.Suppression === "0").length;
            const nbTrainsSupprimes = temp.filter(e => !!e.Suppression && e.Suppression === "1").length;

            return [nbTrainRetard, nbTrainsSupprimes, sumMontantCompensable, sumPax, moyenMinsPerdus];
        }

        return [0, 0, 0, 0, 0];
    }

    const impactDataByAxe = getImpactDataByAxe();
    return (
        <>
            <div style={styles.partieHaute}>
                {memoizedLogo2023}
                <DataBox boxNumber={1}>
                    <CommonBox text={axe} data={impactDataByAxe}/>
                </DataBox>
            </div>
            <div style={styles.partieBasse}>
                <div className={"partieBox"}>
                    <DataBox boxNumber={1}>
                        <CommonBox text={"Données d'impact"} data={impactDataByAxe}/>
                    </DataBox>
                    <DataBox boxNumber={2}>
                        <CommonBox data={impactDataByAxe}/>
                    </DataBox>
                    <DataBox boxNumber={3}>
                        <CommonBox data={impactDataByAxe}/>
                    </DataBox>
                </div>
                <div style={styles.partieBasseDroite}>
                    <Map onClickMap={handleClickMap}></Map>
                </div>
            </div>
        </>
    );
}

export default App;
