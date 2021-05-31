import { GetServerSideProps } from "next";

//? OWN
import UserInfo from "components/pages/profile/UserInfo";


//? UTILS
import { getUser } from 'actions/client/user/profile/profile.action';
import { authenticatedRequest } from 'components/utils/auth/tokenValidations';
import { redirect } from 'components/utils/auth/redirect.utils';


const profile = ({ user }) => {

    return (
        <>
            <h1>
                <pre>{JSON.stringify(user, null, "\t")}</pre>
            </h1>
            <section className="profile-hero">
                <div className="profile-hero__img" />
                <UserInfo
                    full_name={user.full_name}
                    email={user.email}
                    socials={user.socials}
                />
            </section>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await authenticatedRequest(getUser, undefined, ctx)

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

