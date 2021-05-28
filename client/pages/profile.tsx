import { GetServerSideProps } from "next";

//? OWN
import UserInfo from "components/pages/profile/UserInfo";


//? UTILS
import { getUser } from 'actions/client/user/profile/profile.action';
import { authenticatedGet } from 'components/utils/auth/IfTokenExpiered';
import { redirect } from 'components/utils/auth/redirect.utils';

const profile = ({ user }) => {

    return (
        <>

            <h1>
                <pre>{JSON.stringify(user, null, "\t")}</pre>
            </h1>
            <section className="profile-hero">
                <div className="profile-hero__img" />
                <UserInfo />
            </section>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await authenticatedGet(getUser, ctx)
    console.log(res);
    

    if (res) {
        return {
            props: {
                user: res.user,
            },
        };
    }

    return redirect("/login");
};

export default profile;

// <h1>
//                 <pre>{JSON.stringify(user, null, "\t")}</pre>
//             </h1>
