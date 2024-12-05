import { css } from "lit";
import { Color, FontFamily, FontSize, Padding, Rounded } from "../style.ts";

export const styles = css`
  :host { 
    display: inline-block;
  }

  button {
    font-family: ${FontFamily.default};  
    font-size: ${FontSize.default};
    display: inline-block;
    outline: none;
    border: none;
    padding: ${Padding.default};
    border-radius: ${Rounded.default};
    cursor: pointer;
    color: black;
    transition: all 0.3s ease;
  } 

  button.small {
    font-size: ${FontSize.small};
    padding: ${Padding.small};
    border-radius: ${Rounded.small};
  }

  button.large {
    font-size: ${FontSize.large};
    padding: ${Padding.large};
    border-radius: ${Rounded.large};
  }

  button.primary {
    color: white;
    background-color: ${Color.primaryColor};
  }
     
  button.secondary {
    color: white;
    background-color: ${Color.secondaryColor};
  }
`
