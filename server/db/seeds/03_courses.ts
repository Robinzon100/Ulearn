import { Knex } from 'knex';

import tableNames from "../../constants/tableNames";
import { course } from "../../constants/defaults";
import { v4 } from 'uuid';


export async function seed(knex: Knex): Promise<void> {


    await knex(tableNames.courses).insert([
        {
            uuid: v4(),
            title: 'როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.',
            description: 'გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ',
            detailed_description: `<p><strong>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</strong></p><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br/><br/><p><strong>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</strong></p><ul><li><p >javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p >რა არის DOM და DOM მანიპულირება</p></li><li><p >ინტერაქიულობის შექმნა</p></li><li><p >სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p >რთული ინტერაქტივები</p></li></ul><br/><br/><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p>`,
            difficulty: 3,
            thumbnail_imageUrl: 'https://picsum.photos/200/300',
            intro_videoUrl: 'https://temp.media/video/?height=1080&width=1920&length=10',
            duration: 6.30,
            what_will_you_learn: JSON.stringify([
                'გარემიქსებას ნებისმიერი მუსიკის',
                'DJ-ის მოწყობილობების გამოყენება',
                'მუსიკის იზოლირება სიმღერიდან',
                'მუსიკის გადაკეთება და რა არის BPS',
                'საუკეთესო პრაქტიკები',
                'როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და სერვისები',
            ]),
            student_amount: 140,
            detailed_rating: JSON.stringify({ "5": 0, "4": 10, "3": 30, "2": 2, "1": 0 }),
            overall_rating: 4.5,
            course_content: JSON.stringify([
                {
                    title: 'ჯავასცრიპტის ძირითადები',
                    content: [
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        },
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        }
                    ]
                }
            ]),
            units_sold: 25,
            price: 35,
            ulearn_coin_price: 200,
            discount_price: 15,
            affiliation_price: 25,

            main_category_id: 1,
            sub_category_id: 1,
            sub_sub_category_id: 1,
            

            creator_id: 1,
        },
        {
            uuid: v4(),
            title: 'როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.',
            description: 'გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ',
            detailed_description: `<p><strong>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</strong></p><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br/><br/><p><strong>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</strong></p><ul><li><p >javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p >რა არის DOM და DOM მანიპულირება</p></li><li><p >ინტერაქიულობის შექმნა</p></li><li><p >სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p >რთული ინტერაქტივები</p></li></ul><br/><br/><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p>`,
            difficulty: 3,
            thumbnail_imageUrl: 'https://picsum.photos/200/300',
            intro_videoUrl: 'https://temp.media/video/?height=1080&width=1920&length=10',
            duration: 6.30,
            what_will_you_learn: JSON.stringify([
                'გარემიქსებას ნებისმიერი მუსიკის',
                'DJ-ის მოწყობილობების გამოყენება',
                'მუსიკის იზოლირება სიმღერიდან',
                'მუსიკის გადაკეთება და რა არის BPS',
                'საუკეთესო პრაქტიკები',
                'როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და სერვისები',
            ]),
            student_amount: 140,
            detailed_rating: JSON.stringify({ "5": 0, "4": 10, "3": 30, "2": 2, "1": 0 }),
            overall_rating: 4.5,
            course_content: JSON.stringify([
                {
                    title: 'ჯავასცრიპტის ძირითადები',
                    content: [
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        },
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        }
                    ]
                }
            ]),
            units_sold: 25,
            price: 35,
            ulearn_coin_price: 200,
            discount_price: 15,
            affiliation_price: 25,

            main_category_id: 1,
            sub_category_id: 1,
            sub_sub_category_id: 1,
            

            creator_id: 1,
        },
        {
            uuid: v4(),
            title: 'როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.',
            description: 'გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ',
            detailed_description: `<p><strong>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</strong></p><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br/><br/><p><strong>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</strong></p><ul><li><p >javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p >რა არის DOM და DOM მანიპულირება</p></li><li><p >ინტერაქიულობის შექმნა</p></li><li><p >სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p >რთული ინტერაქტივები</p></li></ul><br/><br/><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p>`,
            difficulty: 3,
            thumbnail_imageUrl: 'https://picsum.photos/200/300',
            intro_videoUrl: 'https://temp.media/video/?height=1080&width=1920&length=10',
            duration: 6.30,
            what_will_you_learn: JSON.stringify([
                'გარემიქსებას ნებისმიერი მუსიკის',
                'DJ-ის მოწყობილობების გამოყენება',
                'მუსიკის იზოლირება სიმღერიდან',
                'მუსიკის გადაკეთება და რა არის BPS',
                'საუკეთესო პრაქტიკები',
                'როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და სერვისები',
            ]),
            student_amount: 140,
            detailed_rating: JSON.stringify({ "5": 0, "4": 10, "3": 30, "2": 2, "1": 0 }),
            overall_rating: 4.5,
            course_content: JSON.stringify([
                {
                    title: 'ჯავასცრიპტის ძირითადები',
                    content: [
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        },
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        }
                    ]
                }
            ]),
            units_sold: 25,
            price: 35,
            ulearn_coin_price: 200,
            discount_price: 15,
            affiliation_price: 25,

            main_category_id: 1,
            sub_category_id: 1,
            sub_sub_category_id: 1,
            

            creator_id: 1,
        },
        {
            uuid: v4(),
            title: 'როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.',
            description: 'გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ',
            detailed_description: `<p><strong>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</strong></p><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br/><br/><p><strong>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</strong></p><ul><li><p >javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p >რა არის DOM და DOM მანიპულირება</p></li><li><p >ინტერაქიულობის შექმნა</p></li><li><p >სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p >რთული ინტერაქტივები</p></li></ul><br/><br/><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p>`,
            difficulty: 3,
            thumbnail_imageUrl: 'https://picsum.photos/200/300',
            intro_videoUrl: 'https://temp.media/video/?height=1080&width=1920&length=10',
            duration: 6.30,
            what_will_you_learn: JSON.stringify([
                'გარემიქსებას ნებისმიერი მუსიკის',
                'DJ-ის მოწყობილობების გამოყენება',
                'მუსიკის იზოლირება სიმღერიდან',
                'მუსიკის გადაკეთება და რა არის BPS',
                'საუკეთესო პრაქტიკები',
                'როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და სერვისები',
            ]),
            student_amount: 140,
            detailed_rating: JSON.stringify({ "5": 0, "4": 10, "3": 30, "2": 2, "1": 0 }),
            overall_rating: 4.5,
            course_content: JSON.stringify([
                {
                    title: 'ჯავასცრიპტის ძირითადები',
                    content: [
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        },
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        }
                    ]
                }
            ]),
            units_sold: 25,
            price: 35,
            ulearn_coin_price: 200,
            discount_price: 15,
            affiliation_price: 25,

            main_category_id: 1,
            sub_category_id: 1,
            sub_sub_category_id: 1,
            

            creator_id: 1,
        },
        {
            uuid: v4(),
            title: 'როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.',
            description: 'გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ',
            detailed_description: `<p><strong>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</strong></p><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br/><br/><p><strong>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</strong></p><ul><li><p >javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p >რა არის DOM და DOM მანიპულირება</p></li><li><p >ინტერაქიულობის შექმნა</p></li><li><p >სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p >რთული ინტერაქტივები</p></li></ul><br/><br/><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p>`,
            difficulty: 3,
            thumbnail_imageUrl: 'https://picsum.photos/200/300',
            intro_videoUrl: 'https://temp.media/video/?height=1080&width=1920&length=10',
            duration: 6.30,
            what_will_you_learn: JSON.stringify([
                'გარემიქსებას ნებისმიერი მუსიკის',
                'DJ-ის მოწყობილობების გამოყენება',
                'მუსიკის იზოლირება სიმღერიდან',
                'მუსიკის გადაკეთება და რა არის BPS',
                'საუკეთესო პრაქტიკები',
                'როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და სერვისები',
            ]),
            student_amount: 140,
            detailed_rating: JSON.stringify({ "5": 0, "4": 10, "3": 30, "2": 2, "1": 0 }),
            overall_rating: 4.5,
            course_content: JSON.stringify([
                {
                    title: 'ჯავასცრიპტის ძირითადები',
                    content: [
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        },
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        }
                    ]
                }
            ]),
            units_sold: 25,
            price: 35,
            ulearn_coin_price: 200,
            discount_price: 15,
            affiliation_price: 25,

            main_category_id: 1,
            sub_category_id: 1,
            sub_sub_category_id: 1,
            

            creator_id: 1,
        },
        {
            uuid: v4(),
            title: 'როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.',
            description: 'გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ',
            detailed_description: `<p><strong>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</strong></p><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br/><br/><p><strong>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</strong></p><ul><li><p >javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p >რა არის DOM და DOM მანიპულირება</p></li><li><p >ინტერაქიულობის შექმნა</p></li><li><p >სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p >რთული ინტერაქტივები</p></li></ul><br/><br/><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p>`,
            difficulty: 3,
            thumbnail_imageUrl: 'https://picsum.photos/200/300',
            intro_videoUrl: 'https://temp.media/video/?height=1080&width=1920&length=10',
            duration: 6.30,
            what_will_you_learn: JSON.stringify([
                'გარემიქსებას ნებისმიერი მუსიკის',
                'DJ-ის მოწყობილობების გამოყენება',
                'მუსიკის იზოლირება სიმღერიდან',
                'მუსიკის გადაკეთება და რა არის BPS',
                'საუკეთესო პრაქტიკები',
                'როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და სერვისები',
            ]),
            student_amount: 140,
            detailed_rating: JSON.stringify({ "5": 0, "4": 10, "3": 30, "2": 2, "1": 0 }),
            overall_rating: 4.5,
            course_content: JSON.stringify([
                {
                    title: 'ჯავასცრიპტის ძირითადები',
                    content: [
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        },
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        }
                    ]
                }
            ]),
            units_sold: 25,
            price: 35,
            ulearn_coin_price: 200,
            discount_price: 15,
            affiliation_price: 25,

            main_category_id: 1,
            sub_category_id: 1,
            sub_sub_category_id: 1,
            

            creator_id: 1,
        },
        {
            uuid: v4(),
            title: 'როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.',
            description: 'გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ',
            detailed_description: `<p><strong>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</strong></p><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br/><br/><p><strong>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</strong></p><ul><li><p >javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p >რა არის DOM და DOM მანიპულირება</p></li><li><p >ინტერაქიულობის შექმნა</p></li><li><p >სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p >რთული ინტერაქტივები</p></li></ul><br/><br/><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p>`,
            difficulty: 3,
            thumbnail_imageUrl: 'https://picsum.photos/200/300',
            intro_videoUrl: 'https://temp.media/video/?height=1080&width=1920&length=10',
            duration: 6.30,
            what_will_you_learn: JSON.stringify([
                'გარემიქსებას ნებისმიერი მუსიკის',
                'DJ-ის მოწყობილობების გამოყენება',
                'მუსიკის იზოლირება სიმღერიდან',
                'მუსიკის გადაკეთება და რა არის BPS',
                'საუკეთესო პრაქტიკები',
                'როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და სერვისები',
            ]),
            student_amount: 140,
            detailed_rating: JSON.stringify({ "5": 0, "4": 10, "3": 30, "2": 2, "1": 0 }),
            overall_rating: 4.5,
            course_content: JSON.stringify([
                {
                    title: 'ჯავასცრიპტის ძირითადები',
                    content: [
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        },
                        {
                            title: 'როგორო მუშაობს ჯავასკრიპტი',
                            duration: 12
                        }
                    ]
                }
            ]),
            units_sold: 25,
            price: 35,
            ulearn_coin_price: 200,
            discount_price: 15,
            affiliation_price: 25,

            main_category_id: 1,
            sub_category_id: 1,
            sub_sub_category_id: 1,
            

            creator_id: 1,
        }
    ]);
};