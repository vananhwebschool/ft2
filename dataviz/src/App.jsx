import './App.css'
import DataBox from "./premiere-page-carte/component-bas-gauche/DataBox.jsx";
import CommonBox from "./premiere-page-carte/component-bas-gauche/CommonBox.jsx";
import Component1 from "./premiere-page-carte/resumeAnnee/component1.jsx";
import Map from "./Map.jsx";

function App() {
    return (
        <>
            <Component1></Component1>
            <Map></Map>
            <DataBox boxNumber={1}>
                <CommonBox/>
            </DataBox>
            <DataBox boxNumber={2}>
                <CommonBox/>
            </DataBox>
            <DataBox boxNumber={3}>
                <CommonBox/>
            </DataBox>
        </>
    )
}

export default App
