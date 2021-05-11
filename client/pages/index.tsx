// import { GetServerSideProps } from "next";



import Hero from "components/pages/Index/Hero";
import CourseCards from "components/pages/Index/CourseCards";
import { Observer } from "mobx-react-lite";





const Index = () => {
  return (
    <Observer>
      {() => (
        <>
          <Hero />
          <CourseCards 
            // data={data}
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
