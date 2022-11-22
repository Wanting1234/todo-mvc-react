import React from "react";

function Footer() {
  return (
    <section className="footer">
      <p>Double-click to edit a todo</p>
      <p>
        Created by
        {<a href="https://github.com/Wanting1234/todo-mvc-react"> Ting Wang</a>}
      </p>
      <p>Part of {<a href="https://todomvc.com/">TodoMVC</a>}</p>
    </section>
  );
}

export default Footer;
