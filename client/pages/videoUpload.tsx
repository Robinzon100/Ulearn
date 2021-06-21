import { VideoUploadHeading } from "components/pages/video-upload/video-upload.content";
import Tabs from "components/lib/tabs/Tabs";

import Sylabus from "components/pages/video-upload/tabs-content/sylabus/Sylabus";




let data = [
  {
    id: 1,
    name: "ჯავასკრიპტი",
    sub_videos: [
      {
        id: 1,
        name: "მეტი ჯავასკრიპტზე",
        duration: 15,
        video_url: "https://player.vimeo.com/external/488295369.sd.mp4?s=96338e16e3d0afae37be9399b9c67a4fb9efd063&profile_id=165&oauth2_token_id=57447761",
      },
    ],
  },
];




const videoUpload = () => {
  return (
    <>
      <section className="video-upload">
        <div className="video-upload-hero" />

        <div className="video-upload-tabs">
          <div className="user-content">
            <Tabs
              tabNamesAndIcons={VideoUploadHeading}
              rawHtml={[
                "",
                "<h1>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</h1><br /><br /><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br /><br /><br /><p>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</p><br /><ul><li><p>javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p>რა არის DOM და DOM მანიპულირება</p></li><li><p>ინტერაქიულობის შექმნა</p></li><li><p>სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p>რთული ინტერაქტივები</p></li></ul><hr /><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიცსაშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა,როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p><br /><br /><br /><img></img><br /><br/><p>ეს არის ერთერთი პროექტის სურათი რომელსაც ჩვენ გავაკეთებთდა ყველა ელემენტს დიდი ყურადღებას მივაქცევთ და საჭირო ელემენტებს გავდით ინტერაქტულს რათა თქვენმა მომხმარებელმა მაქსიმალურად დიდხანს ისარგებლოს თვენი საიტის სერვისით და შდაბეჭდილება მოახდინოს.</p><br /><br /><br /><p><span>იმ შემთხვევაში თუ არ იცით რა არის HTML ან CSS</span>შეგიძლიათ ნახოთ ჩემი სხვა კურსი სადაც დეტალურად ვხსნი ამ ორ ენას </p>",
                '<h1>ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები</h1><br/><p>vs code გადმოსაწერილი ლინკი : <a href="https://vscode.com">https://vscode.com</a></p> <p>ვიდეოში ნანახი ბლოგპოსტის ლინკი: <a href="https://medium.com"> https://medium.com</a></p><br/><br/><br/><br/><br/><br/><p><strong>ამ ვიდეოში დაწერილი კოდის ფაილები:</strong></p>',
                '<h1>ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები</h1><br/><p>vs code გადმოსაწერილი ლინკი : <a href="https://vscode.com">https://vscode.com</a></p> <p>ვიდეოში ნანახი ბლოგპოსტის ლინკი: <a href="https://medium.com"> https://medium.com</a></p><br/><br/><br/><br/><br/><br/><p><strong>ამ ვიდეოში დაწერილი კოდის ფაილები:</strong></p>',
              ]}
              component={[
                <>
                  <Sylabus data={data} />
                </>,
                null,
                null,
                null,
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default videoUpload;
