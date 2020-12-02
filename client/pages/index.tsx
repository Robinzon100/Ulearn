import React, { useState } from "react";
import Hero from "components/index_components/hero";
import Content from "components/index_components/main_content";
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
