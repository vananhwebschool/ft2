import App from "./App";
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