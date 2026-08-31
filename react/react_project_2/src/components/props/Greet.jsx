
import { Children } from "react";

function Greet({ name, age,children }) {
  return (
    <h3>
      Hello {name}, you are {age} years old {Children.only(children)}

    </h3>
  );
}

export default Greet;
