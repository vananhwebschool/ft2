
import './App.css'
import DataBox from "./component-bas-gauche/DataBox.jsx";
import CommonBox from "./component-bas-gauche/CommonBox.jsx";

function App() {
  return (
    <>
    <DataBox boxNumber={1}>
      <CommonBox />
    </DataBox>
    <DataBox boxNumber={2}>
      <CommonBox />
    </DataBox>
    <DataBox boxNumber={3}>
      <CommonBox />
    </DataBox>
    </>
  )
}

export default App
