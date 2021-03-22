import Hero from "components/pages/Index/Hero";
import Content from "components/pages/Index/CourseCards";
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
