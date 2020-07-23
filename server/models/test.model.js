class Test {
    constructor(text, subQuestions, answers) {
        this.text = text;
        this.subQuestions = subQuestions;
        this.answers = answers;
        this.createdAt = Date();
    }
}



module.exports = Test;


// let json =
// {
//     "text": "კითხვა 3: გყავთ პერსონალი საერთაშორისო გამოცდილებით? (შეგიძლიათ მონიშნოთ რამდენიმე პასუხი)",
//     "subQuestions": [
//         {
//             "text": "ექსპორტის მართვა",
//             "answers": [
//                 {
//                     "text": "კი",
//                     "score": 5
//                 },
//                 {
//                     "text": "არა",
//                     "score": 0
//                 }
//             ]
//         },
//         {
//             "text": "უცხო ენები(ინგლისური)",
//             "answers": [
//                 {
//                     "text": "კი",
//                     "score": 4
//                 },
//                 {
//                     "text": "არა",
//                     "score": 2
//                 }
//             ]
//         },
//         {
//             "text": "მცირე ან არასაკმარისი გამოცდილება",
//             "answers": [
//                 {
//                     "text": "კი",
//                     "score": 4
//                 },
//                 {
//                     "text": "არა",
//                     "score": 2
//                 }
//             ]
//         }
//     ],
//     "answers": []
// }


// let smalljson = {

//     "text": "კითხვა 1: თქვენი მიმდინარე ფინანსური მდგომარეობიდან გამომდინარე, რა რაოდენობის თანხას დახარჯავდით ერთი წლის განმავლობაში ექსპორტის ხელშეწყობისათვის?",
//     "subQuestions": [],
//     "answers": [
//         {
//             "text": "$1000-10,000",
//             "score": 2
//         },
//         {
//             "text": "$1000-50,000",
//             "score": 3
//         },
//         {
//             "text": "$50,000 და მეტი",
//             "score": 4
//         },
//         {
//             "text": "არ არის საკმარისი თანხები",
//             "score": 1
//         }
//     ]
// }
