import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={props.name} onChange={setName((e) => {e.target.value})}/>
        <input type="tel" value={props.phone} onChange={setPhone((e) => {e.target.value})} patten={"[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"}/>
        <input type="email" value={props.email} onChange={setEmail((e) => {e.target.value})}/>
        <input type="submit">
      </form>
    </>
  );
};

