import { GetServerSideProps } from "next";



import Hero from "components/pages/Index/Hero";
import Content from "components/pages/Index/CourseCards";
import { Observer } from "mobx-react-lite";





const Index = (data:any) => {
  return (
    <Observer>
      {() => (
        <>
          <Hero />
          <Content 
            data={data}
          />
        </>
      )}
    </Observer>
  );
};



// export const getServerSideProps: GetServerSideProps = async () => {


//     return {
//         props: {
//             data: data
//         }
//     }
// }




export default Index;
