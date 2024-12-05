import { createComponent } from "@lit/react";
import React from "react";
import { WebButton } from "./component/button/index";

export const Button = createComponent({
  tagName: "web-button",
  elementClass: WebButton,
  react: React,
});
