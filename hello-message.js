import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

const MyComponent = () => {
  const [data, setData] = useState("hello");
  useEffect(() => {
    setTimeout(() => {
      setData("nooooooo hello");
    }, 4000);
  }, []);
  return <div>{data} world</div>;
};

customElements.define(
  "hello-message",
  reactToWebComponent(MyComponent, React, ReactDOM)
);
