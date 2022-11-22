import React from "react";

export const ToggleAll = ({ toggleAll }) => {
  return (
    <>
      <input
        type="checkbox"
        className="toggle-all"
        id="toggle-all"
        onChange={toggleAll}
      />
      <label for="toggle-all"></label>
    </>
  );
};
