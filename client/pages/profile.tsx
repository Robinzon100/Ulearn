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

            <h1></h1>
            <section className="profile-hero">
                <div className="profile-hero__img" />
                <UserInfo 
                    full_name={user[0]?.full_name} 
                    email={user[0]?.email}
                    password={user[0]?.password}
                    socials={user[0]?.socials}
                />
            </section>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await authenticatedGet(getUser, ctx)

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

