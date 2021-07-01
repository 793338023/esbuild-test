import * as React from "react";
import * as Server from "react-dom/server";
import Test from "./Test";
import env from "./src/abc-env";

console.log(env.a)

let Greet = () => (
  <h1>
    Hello, world!
    <Test />
  </h1>
);
console.log(Server.renderToString(<Greet />));
