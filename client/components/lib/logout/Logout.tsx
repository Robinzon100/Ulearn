import NextLink from 'components/utils/nextLink/NextLink';



const Logout = ({ isLougoutToggled, deleteCookie }) => {


    return (
        <>  
            <ul  className="logout" data-logout={isLougoutToggled}>
                <li className="profile-link item">
                    <NextLink route="/profile">
                        <p className="f-size-p6 f-weight-r">პროფილი</p>
                    </NextLink>
                </li>
                <li className="item ">
                    <NextLink route="mailto:info@ulearn.com" className="link">
                        <p className="f-weight-r f-size-p6">გახდი ლექტორი</p>
                    </NextLink>
                </li>

                <li className="logout-btn item" onClick={deleteCookie}>
                    <p className="f-size-p6 f-weight-r">გამოსვლა</p>
                </li>

            </ul>
    
        </>
    )
}

export default Logout
