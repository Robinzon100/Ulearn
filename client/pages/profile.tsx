import { GetServerSideProps } from "next";

//? OWN
import UserInfo from "components/pages/profile/UserInfo";
import Card from "components/lib/cards/Card";

//? UTILS
import { getUser } from 'actions/client/user/profile/profile.action';
import { authenticatedRequest } from 'components/utils/auth/tokenValidations';
import { redirect } from 'components/utils/auth/redirect.utils';

//* ACTIONS 
// import { getAllCourseVideos } from "actions/client/course/landingPage/landing.courses.action"



const profile = ({ user }) => {

    return (
        <>
            {/* <h1>
                <pre>{JSON.stringify(user, null, "\t")}</pre>
            </h1> */}
            <section className="profile-hero">
                <div className="profile-hero__img" />
                <UserInfo
                    full_name={user.full_name}
                    email={user.email}
                    socials={user.socials}
                />


                {/* <div className="user-courses">
                <Card
                    key={1}
                    id={1}
                    name={"beqaaaaaa"}
                    price={12}
                    thumbnail_imageUrl={"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}
                    creator={"ბექა არაბოძე"}
                    overall_rating={12.3}
                    numberOfVotes={20}
                    discount_price={20}
                    isLiked={false}
                    created_at={"12/15/2021"}
                    difficulty={3}
                    description={"როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე"}
                />
                </div> */}
                
            </section>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await authenticatedRequest(getUser, null, ctx)



    if (res.statusCode == 200) {
        // const landingCourse = await getAllCourseVideos();
        return {
            props: {
                user: res.user,
                // data:landingCourse
            },
        };
    }

    return redirect("/login");
};

export default profile;

