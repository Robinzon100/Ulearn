import BaseLayout from "components/base-layout";
import Hero from "components/index_components/hero";
import Content from "components/index_components/main_content";
import CardDetail from "components/global_components/cards/PrimaryContentCard";

const Index = () => {
  return (
    <BaseLayout>
      <Hero />
      <Content />
      </BaseLayout>
  );
};

export default Index;
