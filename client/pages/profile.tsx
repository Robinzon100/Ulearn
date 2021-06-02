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
import Tabs from 'components/lib/tabs/Tabs';



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


                <div className="user-content">
                    <Tabs
                        tabNamesAndIcons={
                            [
                                {
                                    title: 'რაღაცა',
                                    icon: {
                                        name: 'Camera',
                                        color: 'primary-blue',
                                        strokeWidth: 2,
                                    }
                                },
                                {
                                    title: 'რაღაცა',
                                    icon: {
                                        name: 'Clipboard',
                                        color: 'primary-blue',
                                        strokeWidth: 2,
                                    }
                                },
                                {
                                    title: 'რაღაცა',
                                    icon: {
                                        name: 'Camera',
                                        color: 'primary-blue',
                                        strokeWidth: 2,
                                    }
                                },
                            ]
                        }
                        rawHtml={[
                            '<h1>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</h1><br /><br /><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br /><br /><br /><p>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</p><br /><ul><li><p>javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p>რა არის DOM და DOM მანიპულირება</p></li><li><p>ინტერაქიულობის შექმნა</p></li><li><p>სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p>რთული ინტერაქტივები</p></li></ul><hr /><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიცსაშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა,როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p><br /><br /><br /><img></img><br /><br/><p>ეს არის ერთერთი პროექტის სურათი რომელსაც ჩვენ გავაკეთებთდა ყველა ელემენტს დიდი ყურადღებას მივაქცევთ და საჭირო ელემენტებს გავდით ინტერაქტულს რათა თქვენმა მომხმარებელმა მაქსიმალურად დიდხანს ისარგებლოს თვენი საიტის სერვისით და შდაბეჭდილება მოახდინოს.</p><br /><br /><br /><p><span>იმ შემთხვევაში თუ არ იცით რა არის HTML ან CSS</span>შეგიძლიათ ნახოთ ჩემი სხვა კურსი სადაც დეტალურად ვხსნი ამ ორ ენას </p>',
                            '<h1>ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები</h1><br/><p>vs code გადმოსაწერილი ლინკი : <a href=\"https://vscode.com\">https://vscode.com</a></p> <p>ვიდეოში ნანახი ბლოგპოსტის ლინკი: <a href=\"https://medium.com\"> https://medium.com</a></p><br/><br/><br/><br/><br/><br/><p><strong>ამ ვიდეოში დაწერილი კოდის ფაილები:</strong></p>',
                            ''
                        ]}
                        component={
                            [null, null,
                                ['ragaca', 'ragaca'].map((card,i) => (
                                    < Card
                                        key={i}
                                        id={1}
                                        name={card}
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
                                ))
                            ]
                        }
                    />

                    <br /><br /><br /><br /><br />

                </div>

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

