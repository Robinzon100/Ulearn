import React, { useState } from "react";
import BaseLayout from "components/base-layout";
import Hero from "components/Index/hero";
import Content from "components/Index/main_content";
import CardDetail from "components/global_components/cards/PrimaryContentCard";

const Index = () => {
  const [contentId, setContentId] = useState(1);
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

export default Index;
