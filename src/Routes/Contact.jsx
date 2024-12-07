import React from "react";
import Form from "../Components/Form";
import { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context.jsx"; 

const Contact = () => {
  const { state } = useContext(GlobalContext); //ctx

  return (
    <div className={state.theme === "light" ? "light-theme" : "dark-theme"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
