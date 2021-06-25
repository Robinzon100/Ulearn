import { GetServerSideProps } from "next";


// ========== COMPONENTS
import { NewCourseHeading } from "components/pages/new_course/newCourse.content";
import Tabs from "components/lib/tabs/Tabs";
import Curriculum  from "components/pages/new_course/tabs-content/curriculum/Curriculum";
import RichTextEditor from "components/lib/rich-text-editor/RichTextEditor";


// ========== ACTIONS
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { getUser } from "actions/client/user/profile/profile.action";
import { redirect } from "components/utils/auth/redirect.utils";




let data = [
  {
    id: 0,
    name: "ჯავასკრიპტი",
    sub_videos: [
      {
        id: 0,
        name: "მეტი ჯავასკრიპტზე",
        duration: 15,
        video_url: "undefined-1624555404026",
      },
    ],
  },
];




const NewCourse = () => {
  return (
    <>
      <section className="new_course">
        <div className="new_course-hero" />

        <div className="new_course-tabs">
          <div className="user-content">
            <Tabs
              tabNamesAndIcons={NewCourseHeading}
              rawHtml={[
                "",
                "",
                '<h1>ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები</h1><br/><p>vs code გადმოსაწერილი ლინკი : <a href="https://vscode.com">https://vscode.com</a></p> <p>ვიდეოში ნანახი ბლოგპოსტის ლინკი: <a href="https://medium.com"> https://medium.com</a></p><br/><br/><br/><br/><br/><br/><p><strong>ამ ვიდეოში დაწერილი კოდის ფაილები:</strong></p>',
                '<h1>ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები</h1><br/><p>vs code გადმოსაწერილი ლინკი : <a href="https://vscode.com">https://vscode.com</a></p> <p>ვიდეოში ნანახი ბლოგპოსტის ლინკი: <a href="https://medium.com"> https://medium.com</a></p><br/><br/><br/><br/><br/><br/><p><strong>ამ ვიდეოში დაწერილი კოდის ფაილები:</strong></p>',
              ]}
              component={[
                <>
                  <RichTextEditor/>
                </>,
                <>
                  <Curriculum data={data} />
                </>,
                null,
                null,
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await authenticatedRequest(getUser, null, ctx)


    if (res.statusCode == 200) {
        return {
            props: {
                user: res.user,
            },
        };
    }

    return redirect("/login");
}




export default NewCourse;
