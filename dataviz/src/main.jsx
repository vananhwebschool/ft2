import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SecondPage from "./second-page-line-chart/SecondPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<FirstPage></FirstPage>*/}
    <SecondPage />
  </React.StrictMode>,
)
