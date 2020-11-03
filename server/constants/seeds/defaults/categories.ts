const mainCategories = [
    { id: 1, name: "დეველოპმენტი" },
    { id: 2, name: "დიზაინი" },
    { id: 3, name: "IT ტექნოლოგია" },
    { id: 4, name: "ფოტოგრაფია" },
    { id: 5, name: "ფინანსები და ბუღალტერია" },
    { id: 6, name: "ბიზნესი" },
    { id: 7, name: "მარკეტინგი" },
    { id: 8, name: "მუსიკა" },
    { id: 9, name: "ცევკვა" },
    { id: 10, name: "ჯამრთელობა და ფიტნესი" },


    // TODO: samsazareulo da ofisis produqtiulobis damatebaze ifiqre
    // { id: 11, name: "სამზარეულო" },
    // { id: 12, name: "ოფისის პროდუქტიულობა" },
]



const subCategoriesWithoutIds = [
    //! დეველოპმენტი
    { name: "ვებ-დეველომენტი", main_category_id: 1 },
    { name: "დატა მეცნიერება", main_category_id: 1 },
    { name: "მობილურ აპები", main_category_id: 1 },
    { name: "პროგრამირების ენები", main_category_id: 1 },
    { name: "თამაშების დეველპმენტი", main_category_id: 1 },
    { name: "დატაბაზები", main_category_id: 1 },


    //! დიზაინი
    { name: "ვებ-დიზაინი", main_category_id: 2 },
    { name: "გრაფიკული დიზაინი", main_category_id: 2 },
    { name: "დიზაინის პროგრამები", main_category_id: 2 },
    { name: "UX დიზაინი", main_category_id: 2 },
    { name: "3D და ანიმაციები", main_category_id: 2 },
    { name: "მოდა", main_category_id: 2 },
    { name: "არქიტექტურული დიზაინი", main_category_id: 2 },
    { name: "ინტერიერის დიზაინი", main_category_id: 2 },


    //! IT ტექნოლოგია
    { name: "IT სერთიფიკატები", main_category_id: 3 },
    { name: "ქსელი და უსაფრთხოება", main_category_id: 3 },
    { name: "ოპერატიული სისტემები", main_category_id: 3 },
    { name: "აპარატურა (hardware)", main_category_id: 3 },


    //! ფოტოგრაფია
    { name: "ციფრული ფოტოგრაფია", main_category_id: 4 },
    { name: "ფოტოგრაფიის პროგრამები", main_category_id: 4 },
    { name: "ფოტოგრაფიის ფუნდამენტები", main_category_id: 4 },
    { name: "კომერციული ფოტოგრაფია", main_category_id: 4 },
    { name: "პორტრეტები", main_category_id: 4 },
    { name: "ვიდეო დიზაინი", main_category_id: 4 },


    //! ფინანსები და ბუღალტერია
    { name: "აღრიცხვები", main_category_id: 5 },
    { name: "შესაბამისობა", main_category_id: 5 },
    { name: "კრიპტოვალუტა და ბლოკჩეინი", main_category_id: 5 },
    { name: "ეკონომიკა", main_category_id: 5 },
    { name: "ფინანსები", main_category_id: 5 },
    { name: "ფინანსური სერტიფიკატები და საგამოცდო მომზადება", main_category_id: 5 },
    { name: "ფინანსური მოდელირება და ანალიზი", main_category_id: 5 },
    { name: "ინვესტიცია და ვაჭრობა", main_category_id: 5 },
    { name: "ფულის მენეჯმენტის პროგრამები", main_category_id: 5 },
    { name: "გადასახადები", main_category_id: 5 },


    //! ბიზნესი
    { name: "ფინანსები", main_category_id: 6 },
    { name: "მეწარმეობა", main_category_id: 6 },
    { name: "კომუნიკაციები", main_category_id: 6 },
    { name: "გაყიდვები", main_category_id: 6 },
    { name: "სტრატეგია", main_category_id: 6 },
    { name: "ოპერაციები", main_category_id: 6 },
    { name: "პროექტის მენეჯმენტი", main_category_id: 6 },
    { name: "ბისნესის კანონები", main_category_id: 6 },
    { name: "მონაცემები და ანალიტიკა", main_category_id: 6 },
    { name: "საშინაო ბიზნესი", main_category_id: 6 },
    { name: "ადამიანური რესურსები", main_category_id: 6 },
    { name: "ინდუსტრია", main_category_id: 6 },
    { name: "მედია", main_category_id: 6 },
    { name: "უძრავი ქონება", main_category_id: 6 },


    //! მარკეტინგი
    { name: "ციფრული მარკეტინგი", main_category_id: 7 },
    { name: "საძიებო სისტემის ოპტიმიზაცია (SEO)", main_category_id: 7 },
    { name: "სოციალური მედიას მარკეტინგი", main_category_id: 7 },
    { name: "ბრენდირება", main_category_id: 7 },
    { name: "მარკეტინგის ფუნდამენტები", main_category_id: 7 },
    { name: "ანალიტიკა და ავტომატიზაცია", main_category_id: 7 },
    { name: "საზოგადოებასთან ურთიერთობები", main_category_id: 7 },
    { name: "რეკლამები", main_category_id: 7 },
    { name: "ვიდეო და მობაილ მარკეტინგი", main_category_id: 7 },
    { name: "შვილობილი მარკეტინგი (affiliate marketing)", main_category_id: 7 },
    { name: "პროდუქტის მარკეტინგი", main_category_id: 7 },


    //! მუსიკა
    { name: "მუსიკის ფუნდამენტები", main_category_id: 8 },
    { name: "ინსტრუმენტები", main_category_id: 8 },
    { name: "მუსიკის პროგრამები", main_category_id: 8 },
    { name: "DJ ფუნდამენტები", main_category_id: 8 },
    { name: "ვოკალები", main_category_id: 8 },
    { name: "მუსიკის ტექნიკები", main_category_id: 8 },


    //! ცეკვა
    { name: "ქართული", main_category_id: 9 },
    { name: "უცხოური", main_category_id: 9 },


    //! ჯამრთელობა და ფიტნესი
    { name: "ფიტნესი", main_category_id: 10 },
    { name: "ზოგადი ჯამრთელობა", main_category_id: 10 },
    { name: "სპორტი", main_category_id: 10 },
    { name: "სწორი კვება", main_category_id: 10 },
    { name: "იოგა", main_category_id: 10 },
    { name: "ფსიქიკური ჯანმრთელობის", main_category_id: 10 },
    { name: "თავდაცვა", main_category_id: 10 },
    { name: "უსაფრთხოება და პირველადი დახმარება", main_category_id: 10 },
    { name: "მედიტაცია", main_category_id: 10 },

]




const subSubCategoriesWithoutIds = [
    //! ვებ-დეველომენტი 1
    { name: "Javascript", sub_category_id: 1 },
    { name: "Html და CSS", sub_category_id: 1 },
    { name: "React", sub_category_id: 1 },
    { name: "Angular", sub_category_id: 1 },
    { name: "Vue", sub_category_id: 1 },
    { name: "Node js", sub_category_id: 1 },
    { name: "Python", sub_category_id: 1 },
    { name: "wordpress დეველოპმენტი", main_category_id: 1 },
    { name: "ონლაინ მაღაზია", main_category_id: 1 },

    //! დატა მეცნიერება 2
    { name: "R programming", sub_category_id: 2 },
    { name: "Python", sub_category_id: 2 },
    { name: "Data Analysis", sub_category_id: 2 },
    { name: "Machine Learning", sub_category_id: 2 },
    { name: "Deep Learning", sub_category_id: 2 },
    { name: "Artificial Intelligence", sub_category_id: 2 },
    { name: "TensorFlow", sub_category_id: 2 },
    { name: "Neural Network", sub_category_id: 2 },


    //! მობილურ აპები 3
    { name: "Flutter", sub_category_id: 3 },
    { name: "Android development", sub_category_id: 3 },
    { name: "IOS development", sub_category_id: 3 },
    { name: "Kotlin", sub_category_id: 3 },
    { name: "Swift", sub_category_id: 3 },
    { name: "React Native", sub_category_id: 3 },
    { name: "Dart Programming Language", sub_category_id: 3 },
    

    //! პროგრამირების ენები 4
    { name: "Javascript", sub_category_id: 4 },
    { name: "Python", sub_category_id: 4 },
    { name: "Java", sub_category_id: 4 },
    { name: "Spring Framework", sub_category_id: 4 },
    { name: "GO", sub_category_id: 4 },
    { name: "C#", sub_category_id: 4 },
    { name: "C++", sub_category_id: 4 },
    { name: "C", sub_category_id: 4 },



    //! თამაშების დეველპმენტი 5
    { name: "Unity", sub_category_id: 5 },
    { name: "Unreal Engine", sub_category_id: 5 },
    { name: "3D თამაშები", sub_category_id: 5 },
    { name: "2D თამაშები", sub_category_id: 5 },
    { name: "javascript თამაშების დეველოპმენტი", sub_category_id: 5 },
    { name: "C# თამაშების დეველოპმენტი", sub_category_id: 5 },
    { name: "C++ თამაშების დეველოპმენტი", sub_category_id: 5 },
    { name: "Blender", sub_category_id: 5 },
    
    
    //! თამაშების დეველპმენტი 6
    { name: "SQL", sub_category_id: 6 },
    { name: "MySQL", sub_category_id: 6 },
    { name: "Oracle SQL", sub_category_id: 6 },
    { name: "PostgresSQL", sub_category_id: 6 },
    { name: "MongoDB", sub_category_id: 6 },
    { name: "Database Management", sub_category_id: 6 },


    // ***************
    //! დიზაინი
    // ***************

    //! ვებ-დიზაინი 1
    { name: "UI/UX დიზაინი", sub_category_id: 7 },
    { name: "Figma", sub_category_id: 7 },
    { name: "Adobe XD", sub_category_id: 7 },
    { name: "HTML და CSS", sub_category_id: 7 },
    { name: "მობილური აპის დიზაინი", sub_category_id: 7 },


    //! გრაფიკული დიზაინი 2
    { name: "Photoshop", sub_category_id: 8 },
    { name: "Illustrator", sub_category_id: 8 },
    { name: "InDesign", sub_category_id: 8 },
    { name: "Corel Draw", sub_category_id: 8 },
    { name: "ხატვა", sub_category_id: 8 },
    { name: "Canva", sub_category_id: 8 },
    { name: "პერსონაჟების ხატვა", sub_category_id: 8 },


    //! დიზაინის პროგრამები 3
    { name: "დიზაინის პროგრამები", sub_category_id: 2 },


    //! UX დიზაინი 4
    { name: "UX დიზაინი", sub_category_id: 2 },


    //! 3D და ანიმაციები 5
    { name: "3D და ანიმაციები", sub_category_id: 2 },


    //! მოდა 6
    { name: "მოდა", main_category_id: 2 },


    //! არქიტექტურული დიზაინი 7
    { name: "არქიტექტურული დიზაინი", main_category_id: 2 },


    //! ინტერიერის დიზაინი 8
    { name: "ინტერიერის დიზაინი", main_category_id: 2 },




    //! IT ტექნოლოგია
    { name: "IT სერთიფიკატები", main_category_id: 3 },
    { name: "ქსელი და უსაფრთხოება", main_category_id: 3 },
    { name: "ოპერატიული სისტემები", main_category_id: 3 },
    { name: "აპარატურა (hardware)", main_category_id: 3 },


    //! ფოტოგრაფია
    { name: "ციფრული ფოტოგრაფია", main_category_id: 4 },
    { name: "ფოტოგრაფიის პროგრამები", main_category_id: 4 },
    { name: "ფოტოგრაფიის ფუნდამენტები", main_category_id: 4 },
    { name: "კომერციული ფოტოგრაფია", main_category_id: 4 },
    { name: "პორტრეტები", main_category_id: 4 },
    { name: "ვიდეო დიზაინი", main_category_id: 4 },


    //! ფინანსები და ბუღალტერია
    { name: "აღრიცხვები", main_category_id: 5 },
    { name: "შესაბამისობა", main_category_id: 5 },
    { name: "კრიპტოვალუტა და ბლოკჩეინი", main_category_id: 5 },
    { name: "ეკონომიკა", main_category_id: 5 },
    { name: "ფინანსები", main_category_id: 5 },
    { name: "ფინანსური სერტიფიკატები და საგამოცდო მომზადება", main_category_id: 5 },
    { name: "ფინანსური მოდელირება და ანალიზი", main_category_id: 5 },
    { name: "ინვესტიცია და ვაჭრობა", main_category_id: 5 },
    { name: "ფულის მენეჯმენტის პროგრამები", main_category_id: 5 },
    { name: "გადასახადები", main_category_id: 5 },


    //! ბიზნესი
    { name: "ფინანსები", main_category_id: 6 },
    { name: "მეწარმეობა", main_category_id: 6 },
    { name: "კომუნიკაციები", main_category_id: 6 },
    { name: "გაყიდვები", main_category_id: 6 },
    { name: "სტრატეგია", main_category_id: 6 },
    { name: "ოპერაციები", main_category_id: 6 },
    { name: "პროექტის მენეჯმენტი", main_category_id: 6 },
    { name: "ბისნესის კანონები", main_category_id: 6 },
    { name: "მონაცემები და ანალიტიკა", main_category_id: 6 },
    { name: "საშინაო ბიზნესი", main_category_id: 6 },
    { name: "ადამიანური რესურსები", main_category_id: 6 },
    { name: "ინდუსტრია", main_category_id: 6 },
    { name: "მედია", main_category_id: 6 },
    { name: "უძრავი ქონება", main_category_id: 6 },


    //! მარკეტინგი
    { name: "ციფრული მარკეტინგი", main_category_id: 7 },
    { name: "საძიებო სისტემის ოპტიმიზაცია (SEO)", main_category_id: 7 },
    { name: "სოციალური მედიას მარკეტინგი", main_category_id: 7 },
    { name: "ბრენდირება", main_category_id: 7 },
    { name: "მარკეტინგის ფუნდამენტები", main_category_id: 7 },
    { name: "ანალიტიკა და ავტომატიზაცია", main_category_id: 7 },
    { name: "საზოგადოებასთან ურთიერთობები", main_category_id: 7 },
    { name: "რეკლამები", main_category_id: 7 },
    { name: "ვიდეო და მობაილ მარკეტინგი", main_category_id: 7 },
    { name: "შვილობილი მარკეტინგი (affiliate marketing)", main_category_id: 7 },
    { name: "პროდუქტის მარკეტინგი", main_category_id: 7 },


    //! მუსიკა
    { name: "მუსიკის ფუნდამენტები", main_category_id: 8 },
    { name: "ინსტრუმენტები", main_category_id: 8 },
    { name: "მუსიკის პროგრამები", main_category_id: 8 },
    { name: "DJ ფუნდამენტები", main_category_id: 8 },
    { name: "ვოკალები", main_category_id: 8 },
    { name: "მუსიკის ტექნიკები", main_category_id: 8 },


    //! ცეკვა
    { name: "ქართული", main_category_id: 9 },
    { name: "უცხოური", main_category_id: 9 },


    //! ჯამრთელობა და ფიტნესი
    { name: "ფიტნესი", main_category_id: 10 },
    { name: "ზოგადი ჯამრთელობა", main_category_id: 10 },
    { name: "სპორტი", main_category_id: 10 },
    { name: "სწორი კვება", main_category_id: 10 },
    { name: "იოგა", main_category_id: 10 },
    { name: "ფსიქიკური ჯანმრთელობის", main_category_id: 10 },
    { name: "თავდაცვა", main_category_id: 10 },
    { name: "უსაფრთხოება და პირველადი დახმარება", main_category_id: 10 },
    { name: "მედიტაცია", main_category_id: 10 },

]


let subCategories = subCategoriesWithoutIds.map(({ name, main_category_id }, i) => {
    return { id: i+1, name: name, main_category_id: main_category_id }
})


let subSubCategories = subSubCategoriesWithoutIds.map(({ name, main_category_id }, i) => {
    return { id: i+1, name: name, main_category_id: main_category_id }
})

export {
    mainCategories,
    subCategories,
    subSubCategories
}

