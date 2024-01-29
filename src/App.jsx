import "./App.css";
import NavBar from "./NavBar";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [pageSelected, setPageSelected] = useState("Weight");
  const handleNavItemClick = (selectedItem) => {
    setPageSelected(selectedItem);
  };
  return (
    <>
      <NavBar onNavItemClick={handleNavItemClick} />
      {pageSelected === "Weight" ? <Form to="Kilos" from="Pounds" /> : null}
      {pageSelected === "Distance" ? (
        <Form to="Kilometers" from="Miles" />
      ) : null}
      {pageSelected === "Temperature" ? (
        <Form to="Celsius" from="Fahrenheit" />
      ) : null}
    </>
  );
}

export default App;
