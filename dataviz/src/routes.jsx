import App from "./premiere-page-carte/App.jsx";
import Layout from "./Layout/layout"
export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
    ],
  },
];