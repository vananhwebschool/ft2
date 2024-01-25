import App from "./premiere-page-carte/App.jsx";
import Layout from "./Layout/layout"
import SecondPage from "./second-page-line-chart/SecondPage.jsx";
export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      { path: "/second-page", element: <SecondPage /> },
      { path: "/third-page", element: <SecondPage /> },
    ],
  },
];