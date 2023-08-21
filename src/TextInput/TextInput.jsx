import React from "react";
import "./styles/TextInput.css";

const TextInput = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <div className="form-group">
      {label && <label className="text-label">{label}</label>}
      <input
        type={type}
        className="text-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
