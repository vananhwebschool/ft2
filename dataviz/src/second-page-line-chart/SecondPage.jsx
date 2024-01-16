import SncfLogo from "./components/SncfLogo.jsx";
import OdSelector from "./components/OdSelector.jsx";
import IntemperiesButtonsSection from "./components/IntemperiesButtonsSection.jsx";
import dataTest from "../data/dataTest.json"
import LineChart from "./components/LineChart.jsx";

export default function SecondPage() {
    const styleDiv = {
        margin: "0 auto",
        paddingTop:"2rem",
        paddingBottom: "5rem",
        display: "flex",
        justifyContent: "space-between"
    }
    return (
        <>
            <div style={styleDiv}>
                <SncfLogo />
                <OdSelector />
            </div>
            <div>
                <IntemperiesButtonsSection />
            </div>
            <div style={{height: "30rem"}}>
                <LineChart data={dataTest} />
            </div>

        </>

    )
}