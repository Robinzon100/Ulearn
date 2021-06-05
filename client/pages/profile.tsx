import { GetServerSideProps } from "next";

//? OWN
import UserInfo from "components/pages/profile/UserInfo";

//? UTILS
import { getUser } from 'actions/client/user/profile/profile.action';
import { authenticatedRequest } from 'components/utils/auth/tokenValidations';
import { redirect } from 'components/utils/auth/redirect.utils';

import RangeSlider from 'components/lib/RangeSlider/RangeSlider';
import ProfileTabs  from "components/pages/profile/ProfileTabs";


//* ACTIONS 

const profile = ({ user }) => {


    return (
        <>
            <section className="user-profile-section">
                <div className="profile-hero-img" />


                <div className="user-profile-section__container">
                    <UserInfo
                        full_name={user.full_name}
                        email={user.email}
                        socials={user.socials}
                    />

                    <ProfileTabs user={user}/>
                </div>

                <RangeSlider/>
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
};

export default profile;

