

import { ProfileTabHeading } from "components/pages/profile/ProfileTab.content"
import Tabs from 'components/lib/tabs/Tabs';
import Card from "components/lib/cards/Card";
import { copyClipboard } from "components/utils/clipboard/clipboard.utils";
import { Copy } from "react-feather";




const ProfileTabs = ({ user }) => {
    return (
        <>
            <div className="user-content">
                <Tabs
                    tabNamesAndIcons={ProfileTabHeading}
                    rawHtml={[
                        '',
                        '',
                        ''
                    ]}


                    component={
                        [
                            <>
                                <div className="user-liked-courses-container">
                                    {user.liked_courses.map(card => (
                                        <Card
                                            key={card.id}
                                            uuid={card.uuid}
                                            id={card.id}
                                            name={card.title}
                                            price={card.price}
                                            thumbnail_imageUrl={card.image_url}
                                            creator={card.id}
                                            overall_rating={card.overall_rating}
                                            ratingAmount={card.detailed_rating}
                                            isLiked={true}
                                            bestseller={card.bestseller}
                                            discount_price={card.discount_price}
                                            created_at={card.created_at}
                                            difficulty={card.difficulty}
                                            description={card.description}
                                            descriptionList={card.hoverCardList}
                                        />

                                    ))} </div>
                            </>,
                            <>
                                <h1 className="f-size-h5 f-weight-bl">
                                    Ulearn Coins: {user.Ulearn_coins}
                                </h1>
                            </>,
                            <>

                                <div
                                    className="oxeni-mail"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: 'center',
                                        cursor: 'pointer'
                                    }}
                                    onClick={(e) => copyClipboard(e.currentTarget)}>
                                    <div className="copy">
                                        <Copy size={24} />
                                    </div>
                                    <p
                                        className="f-size-p4 f-weight-r"
                                        style={{
                                            lineBreak: 'anywhere',
                                            width: '180px',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            marginLeft: '2rem'
                                        }}>
                                        {`${process.env.FRONT_END_URL}/affiliate/${user.affiliate_link}`}
                                    </p>
                                </div>
                            </>,
                        ]
                    }
                />

            </div>
        </>
    )
}

export default ProfileTabs
