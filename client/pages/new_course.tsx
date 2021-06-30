import { GetServerSideProps } from "next";
import cookie from 'cookie';


// ========== COMPONENTS
import { NewCourseHeading } from "components/pages/new_course/newCourse.content";
import Tabs from "components/lib/tabs/Tabs";
import Curriculum from "components/pages/new_course/tabs-content/curriculum/Curriculum";
import Resources from "components/pages/new_course/tabs-content/resources/Resources";



// ========== ACTIONS
import { authenticatedRequest } from "components/utils/auth/tokenValidations";
import { getUser } from "actions/client/user/profile/profile.action";
import { redirect } from "components/utils/auth/redirect.utils";
import CourseForm from '../components/pages/new_course/tabs-content/info/CourseForm';
import { useNewCourseStore } from 'mobx/newCourseStateContext';
import { useEffect } from 'react';
import PriceSale from "components/pages/new_course/tabs-content/price-sale/PriceSale"
import { observer } from 'mobx-react-lite';
import Button from "components/lib/button/Button";
import { postNewCourse } from "actions/client/course/newCourse/newCourse.action";





const NewCourse = observer(() => {
    let { newCourseStore } = useNewCourseStore()

    useEffect(() => {
        newCourseStore.newCourseData = {
            courseInfo: {
                title: "",
                description: "",
                detailed_description: "",
                what_will_you_learn: ["", "", ""],
                main_category_id: "",
                sub_category_id: "",
                difficulty: "",
                image_url: "",
                price: 0,
                discount_price: 0,
                ulearn_coin_price: 0,
                resource_file_url: "",
                duration: 0
            },
            curriculum: [
                {
                    id: 0,
                    name: "თავის სახელი",
                    sub_videos: [
                        {
                            id: 0,
                            name: "ვიდეოს სახელი",
                            duration: 0,
                            video_url: "",
                        },
                    ],
                },
            ],

        }

    }, [])


    const submitHandler = async () => {
        const newCourse = JSON.parse(JSON.stringify(newCourseStore.newCourseData))
        const res = await authenticatedRequest(postNewCourse, newCourse, null)
        console.log(res);
    }





    return (
        <>
            {newCourseStore.newCourseData && (
                <section className="new_course">
                    <div className="new_course-hero" />

                    <div className="new_course-tabs">
                        <div className="user-content">
                            <Tabs
                                tabNamesAndIcons={NewCourseHeading}
                                rawHtml={[
                                    "",
                                    "",
                                    "",
                                    "",
                                ]}
                                component={[
                                    <>
                                        <CourseForm />
                                    </>,
                                    <>
                                        <Curriculum />
                                    </>,
                                    <>
                                        <Resources />
                                    </>,
                                    <>
                                        <PriceSale />
                                    </>
                                ]}
                            />
                        </div>

                        <Button
                            className="course-form-btn"
                            width="45rem"
                            size="large"
                            color="blue"
                            onClick={() => submitHandler()}>
                            <p className="f-weight-r f-size-p4 ">შენახვა</p>
                        </Button>

                    </div>
                </section>
            )}
        </>
    );
})






export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { auth_access_token } = cookie.parse(`${ctx.req.headers.cookie}`)
    if (auth_access_token) {
        const res = await authenticatedRequest(getUser, null, ctx);

        // TODO: add condition if the user is authanticated

        if (res.statusCode == 200) {




            return {
                props: {
                    user: res.user,
                },
            };
        }
    }
    return redirect("/login");

}




export default NewCourse;
