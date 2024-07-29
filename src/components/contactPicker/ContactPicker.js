import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <>
      <select onChange={props.onChange} value={props.value} name={props.name}></select>
      <option value="">No Contact Selected</option>
      {
        props.contacts.map((contact) => {
          return (<option key={contact.name} value={contact.name}></option>)
        })
      }
    </>
  );
};