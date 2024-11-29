import { createComponent } from "@lit/react";
import React from "react";
import { HelloWorld } from "./component/hello-world.js";

export const ReactHelloWorld = createComponent({
  tagName: 'hello-world',
  elementClass: HelloWorld,
  react: React,
});
