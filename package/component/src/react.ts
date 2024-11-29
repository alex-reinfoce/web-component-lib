import { createComponent } from "@lit/react";
import React from "react";
import { HelloWorld as HelloWorldElement } from "./component/hello-world.js";

export const HelloWorld = createComponent({
  tagName: 'hello-world',
  elementClass: HelloWorldElement,
  react: React,
});
