

import { ProfileTabHeading } from "components/pages/profile/ProfileTab.content"
import Tabs from 'components/lib/tabs/Tabs';
import Card from "components/lib/cards/Card";




const ProfileTabs = ({user}) => {
    return (
        <>
            <div className="user-content">
                <Tabs
                    tabNamesAndIcons={ProfileTabHeading}
                    rawHtml={[
                        '',
                        '<h1>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</h1><br /><br /><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br /><br /><br /><p>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</p><br /><ul><li><p>javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p>რა არის DOM და DOM მანიპულირება</p></li><li><p>ინტერაქიულობის შექმნა</p></li><li><p>სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p>რთული ინტერაქტივები</p></li></ul><hr /><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიცსაშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა,როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p><br /><br /><br /><img></img><br /><br/><p>ეს არის ერთერთი პროექტის სურათი რომელსაც ჩვენ გავაკეთებთდა ყველა ელემენტს დიდი ყურადღებას მივაქცევთ და საჭირო ელემენტებს გავდით ინტერაქტულს რათა თქვენმა მომხმარებელმა მაქსიმალურად დიდხანს ისარგებლოს თვენი საიტის სერვისით და შდაბეჭდილება მოახდინოს.</p><br /><br /><br /><p><span>იმ შემთხვევაში თუ არ იცით რა არის HTML ან CSS</span>შეგიძლიათ ნახოთ ჩემი სხვა კურსი სადაც დეტალურად ვხსნი ამ ორ ენას </p>',
                        '<h1>ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები</h1><br/><p>vs code გადმოსაწერილი ლინკი : <a href=\"https://vscode.com\">https://vscode.com</a></p> <p>ვიდეოში ნანახი ბლოგპოსტის ლინკი: <a href=\"https://medium.com\"> https://medium.com</a></p><br/><br/><br/><br/><br/><br/><p><strong>ამ ვიდეოში დაწერილი კოდის ფაილები:</strong></p>',
                        '<h1>ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები</h1><br/><p>vs code გადმოსაწერილი ლინკი : <a href=\"https://vscode.com\">https://vscode.com</a></p> <p>ვიდეოში ნანახი ბლოგპოსტის ლინკი: <a href=\"https://medium.com\"> https://medium.com</a></p><br/><br/><br/><br/><br/><br/><p><strong>ამ ვიდეოში დაწერილი კოდის ფაილები:</strong></p>'

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
                                            numberOfVotes={20}
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

                            null, null,
                        ]
                    }
                />

            </div>
        </>
    )
}

export default ProfileTabs
