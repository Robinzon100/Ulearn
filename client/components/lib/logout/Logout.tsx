


import  NextLink  from 'components/utils/nextLink/NextLink';

const Logout = ({isLougoutToggled,deleteCookie}) => {
    return (
        <>
            <div className="logout" data-logout={isLougoutToggled}>
                    <div className="profile-link">
                        <NextLink route="/profile">
                            <p className="f-size-p6 f-weight-r">პროფილი</p>
                        </NextLink>
                    </div>
                    <div className="logout-btn" onClick={deleteCookie}>
                        <p className="f-size-p6 f-weight-r">გამოსვლა</p>
                    </div>
            </div>
        </>
    )
}

export default Logout
