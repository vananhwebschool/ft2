import "./App.css";
import Map from "./CarteCode";
import DataBox from "./component-bas-gauche/DataBox.jsx";
import CommonBox from "./component-bas-gauche/CommonBox.jsx";
import {useState} from "react";
import dataset1 from "../data/dataset1.json"

function App() {
    const [axe, setAxe] = useState("France");
    const styles = {
        partieBasseDroite: {
            marginLeft: "60px",
            height: "95%",
            flex: 1
        }
    }

    const handleClickMap = clickedAxe => {
        setAxe(clickedAxe);
        console.log("clickedAxe");
        console.log(clickedAxe);
    }

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
            <DataBox boxNumber={1}>
                <CommonBox text={axe} data={impactDataByAxe}/>
            </DataBox>
        </>
    );
}

export default App;
