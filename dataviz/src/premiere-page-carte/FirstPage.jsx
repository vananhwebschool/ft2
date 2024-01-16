import './FirstPage.css'
import DataBox from "./component-bas-gauche/DataBox.jsx";
import CommonBox from "./component-bas-gauche/CommonBox.jsx";
import Component1 from "./resumeAnnee/component1.jsx";
import Map from "./map/Map.jsx";

function FirstPage() {
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

export default FirstPage
