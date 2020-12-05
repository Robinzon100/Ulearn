import React, { useState } from "react";
import Hero from "components/Index/hero";
import Content from "components/Index/main_content";
import { Observer } from "mobx-react-lite";

const Index = (): JSX.Element => {
  return (
    <Observer>
      {() => (
        <>
          <Hero />
          <Content />
        </>
      )}
    </Observer>
  );
};

export default Index;
