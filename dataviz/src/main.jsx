import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SecondPage from "./second-page-line-chart/SecondPage.jsx";
import FirstPage from "./premiere-page-carte/FirstPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<FirstPage></FirstPage>*/}
    <SecondPage />
  </React.StrictMode>,
)
