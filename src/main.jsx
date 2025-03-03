import { navigation, data, thirdData, trainers,contactus } from "./db/db.js";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App data={data} navigation={navigation} thirdData={thirdData} trainers={trainers} contactus={contactus}/>
);
