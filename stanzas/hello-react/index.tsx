import React from "react";
import ReactDOM from "react-dom";
import camelCase from "lodash.camelcase";
import Stanza from "togostanza/stanza";
import App from "./App";

function toCamelCase(params: Record<string, unknown>) {
  const camelCaseParams: Record<string, unknown> = {};
  Object.entries(params).forEach(([key, value]) => {
    camelCaseParams[camelCase(key)] = value;
  });
  return camelCaseParams;
}

export default class HelloReact extends Stanza {
  async render() {
    const props = toCamelCase(this.params);
    ReactDOM.render(<App {...props} />, this.root.querySelector("main"));
  }

  handleAttributeChange() {
    const props = toCamelCase(this.params);
    ReactDOM.render(<App {...props} />, this.root.querySelector("main"));
  }
}
