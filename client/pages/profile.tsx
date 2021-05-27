import { GetServerSideProps } from 'next';

//? WON


//? UTILS
import { getUser } from 'actions/client/user/profile/profile.action';
import { authenticatedGet } from 'components/utils/auth/IfTokenExpiered';
import { redirect } from 'components/utils/auth/redirect.utils';



const profile = ({ user }) => {
    return (
        <div style={{ marginTop: "10rem" }}>
            <h1>
                <pre>{JSON.stringify(user, null, "\t")}</pre>
            </h1>
        </div>
    )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await authenticatedGet(getUser, ctx)
    
    if (res.statusCode == 200) {
        return {
            props: {
                user: res.user
            }
        }
    }

    return redirect('/login')
}





export default profile