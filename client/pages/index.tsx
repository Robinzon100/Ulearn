import React, { useState } from "react";
import Hero from "components/Index/hero";
import Content from "components/Index/main_content";
import { useObserver } from "mobx-react-lite";

const Index = () => {
  const [contentId, setContentId] = useState(1);
  return useObserver(() =>(
    <>
      <Hero />
      <Content />
    </>
  ));
};

export default Index;
