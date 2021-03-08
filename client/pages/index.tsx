// import  {JSX } from "react";
import Hero from "components/pages/Index/hero";
import Content from "components/pages/Index/main_content";
import { Observer } from "mobx-react-lite";

const Index = () => {
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
