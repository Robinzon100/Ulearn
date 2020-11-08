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
    { name: "მოდის დიზაინი", main_category_id: 2 },
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
    { name: "მეწარმეობა", main_category_id: 6 },
    { name: "კომუნიკაციები", main_category_id: 6 },
    { name: "გაყიდვები", main_category_id: 6 },
    { name: "ბიზნეს სტრატეგია", main_category_id: 6 },
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

    //! ვებ-დიზაინი 7
    { name: "UI/UX დიზაინი", sub_category_id: 7 },
    { name: "Figma", sub_category_id: 7 },
    { name: "Adobe XD", sub_category_id: 7 },
    { name: "HTML და CSS", sub_category_id: 7 },
    { name: "მობილური აპის დიზაინი", sub_category_id: 7 },


    //! გრაფიკული დიზაინი 8
    { name: "Photoshop", sub_category_id: 8 },
    { name: "Adobe Illustrator", sub_category_id: 8 },
    { name: "ბრენდის დიზაინი", sub_category_id: 8 },
    { name: "ფერების თეორია", sub_category_id: 8 },
    { name: "ლოგო დიზაინი", sub_category_id: 8 },
    { name: "InDesign", sub_category_id: 8 },
    { name: "Corel Draw", sub_category_id: 8 },
    { name: "ხატვა", sub_category_id: 8 },
    { name: "პოსტერის დიზაინი", sub_category_id: 8 },
    { name: "Canva", sub_category_id: 8 },
    { name: "პერსონაჟების ხატვა", sub_category_id: 8 },
    { name: "პროდუქტის დიზაინი", sub_category_id: 10 },



    //! დიზაინის პროგრამები 9
    { name: "Photoshop", sub_category_id: 9 },
    { name: "Adobe Illustrator", sub_category_id: 9 },
    { name: "After Effects", sub_category_id: 9 },
    { name: "Adobe Premiere", sub_category_id: 9 },
    { name: "Figma", sub_category_id: 9 },
    { name: "Adobe XD", sub_category_id: 9 },
    { name: "InDesign", sub_category_id: 9 },
    { name: "Corel Draw", sub_category_id: 9 },
    { name: "AutoCAD", sub_category_id: 9 },


    //! UX დიზაინი 10
    { name: "User Interface (UI)", sub_category_id: 10 },
    { name: "Adobe XD", sub_category_id: 10 },
    { name: "Figma", sub_category_id: 10 },
    { name: "ვებ-დიზაინი", sub_category_id: 10 },
    { name: "მობილური აპის დიზაინი", sub_category_id: 10 },
    { name: "მოხმარების ტესტირება", sub_category_id: 10 },
    
    
    //! 3D და ანიმაციები 11
    { name: "Cinema 4d", sub_category_id: 11 },
    { name: "Blender", sub_category_id: 11 },
    { name: "3DS Max", sub_category_id: 11 },
    { name: "Maya", sub_category_id: 11 },
    { name: "ArchiCAD", sub_category_id: 11 },
    { name: "Zbrush", sub_category_id: 11 },
    { name: "3D მოდელირება", sub_category_id: 11 },
    { name: "3D ანიმაცია", sub_category_id: 11 },
    { name: "3D ტექსტურირება", sub_category_id: 11 },
    { name: "After Effects", sub_category_id: 11 },
    { name: "2D ანიმაცია", sub_category_id: 11 },
    { name: "2D ანიმაცია", sub_category_id: 11 },


    //! მოდა 12
    { name: "მოდა", sub_category_id: 12 },
    { name: "კერვა", sub_category_id: 12 },
    { name: "Adobe Illustrator", sub_category_id: 12 },
    { name: "სამკაულების დიზაინი", sub_category_id: 12 },
    { name: "Photoshop", sub_category_id: 12 },
    { name: "მაისურის დიზაინი", sub_category_id: 12 },


    //! არქიტექტურული დიზაინი 13
    { name: "AudoCAD", sub_category_id: 13 },
    { name: "SketchUp", sub_category_id: 13 },
    { name: "Blender", sub_category_id: 13 },
    { name: "ArchiCAD", sub_category_id: 13 },
    { name: "არქიტექტორული ფუნდამენტები", sub_category_id: 13 },


    //! ინტერიერის დიზაინი 14
    { name: "ფერების თეორია", sub_category_id: 14 },
    { name: "SketchUp", sub_category_id: 14 },
    { name: "მექანიკური ინჟინერია", sub_category_id: 14 },
    { name: "Blender", sub_category_id: 14 },
    { name: "მინიმალიზმი", sub_category_id: 14 },




    // ******************
    //! IT ტექნოლოგია
    // ******************
    //! IT სერთიფიკატები
    { name: "CompTIA A+", sub_category_id: 15 },
    { name: "CompTIA Security+", sub_category_id: 15 },
    { name: "AWS სერტიფიკატი", sub_category_id: 15 },
    { name: "Amazon AWS", sub_category_id: 15 },
    { name: "Microsoft სერტიფიკატი", sub_category_id: 15 },
    { name: "AWS Certified Solutions Architect - Associate", sub_category_id: 15 },
    { name: "AWS Certified Cloud Practitioner", sub_category_id: 15 },
    { name: "Cisco CCNA", sub_category_id: 15 },
    { name: "AWS Certified Developer - Associate", sub_category_id: 15 },
    
    
    

    //! ქსელი და უსაფრთხოება
    { name: "ეთიკური ჰაკირება", sub_category_id: 16 },
    { name: "კიბერ უსაფრთხოება", sub_category_id: 16 },
    { name: "CompTIA Security+", sub_category_id: 16 },
    { name: "CompTIA Network+", sub_category_id: 16 },
    { name: "პენ ტესტირება", sub_category_id: 16 },
    { name: "ქსელის უსაფრთხოება", sub_category_id: 16 },
    { name: "IT ქსელების ფუნდამენტები", sub_category_id: 16 },
    { name: "Cisco CCNA", sub_category_id: 16 },    
    
    

    //! ოპერატიული სისტემები
    { name: "Linux", sub_category_id: 17 },
    { name: "Linux ადმინისტრაცია", sub_category_id: 17 },
    { name: "Windows სერვერ", sub_category_id: 17 },
    { name: "Shell Scripting", sub_category_id: 17 },
    { name: "PowerShell", sub_category_id: 17 },
    { name: "VMware Vsphere", sub_category_id: 17 },
    { name: "LPIC-1: Linux ადმინისტრატორი", sub_category_id: 17 },
    { name: "ოპერატიული სისტემების შექმნა", sub_category_id: 17 },
    
    
    

    //! აპარატურა (hardware
    { name: "Docker", sub_category_id: 18 },
    { name: "Python", sub_category_id: 18 },
    { name: "Kubernetes", sub_category_id: 18 },
    { name: "DevOps", sub_category_id: 18 },
    { name: "ალგორითმები", sub_category_id: 18 },
    { name: "AWS Certified Solutions Architect - Professional", sub_category_id: 18 },
    { name: "AWS Certification", sub_category_id: 18 },
    { name: "Java", sub_category_id: 18 },    
    
    




    // ******************   
    //! ფოტოგრაფია
    // ****************** 
    
    //! ციფრული ფოტოგრაფია
    { name: "Photoshop", sub_category_id: 19 },
    { name: "კომპოზიცია ფოტოგრაფიაში", sub_category_id: 19 },
    { name: "DSLR", sub_category_id: 19 },
    { name: "კამერები", sub_category_id: 19 },
    { name: "განათება ფოტოგრაფიში", sub_category_id: 19 },
    { name: "საჭმლის ფოტოგრაფია", sub_category_id: 19 },
    { name: "Ფილმის გადაღება", sub_category_id: 19 },
    
    
    
    //! ფოტოგრაფიის პროგრამები
    { name: "Adobe Lightroom", sub_category_id: 20 },
    { name: "Photoshop", sub_category_id: 20 },
    { name: "სურატის მანიპულირება", sub_category_id: 20 },
    { name: "Affinity Photo", sub_category_id: 20 },
    { name: "Photoshop-ით შესწორება", sub_category_id: 20 },
    { name: "დრონით ფოტოგრაფია", sub_category_id: 20 },
    
    
     
    //! კომერციული ფოტოგრაფია
    { name: "უძრავი ქონების ფოტოგრაფია", sub_category_id: 21 },
    { name: "მარკეტინგის სტრატეგია", sub_category_id: 21 },
    { name: "არქიტექტორული ფოტოგრაფია", sub_category_id: 21 },
    { name: "ფოტორგრაფიის ბიზნესი", sub_category_id: 21 },
    { name: "საქორწინო ფოტოგრფია", sub_category_id: 21 },
    { name: "პროდუქტის ფოტოგრაფია", sub_category_id: 21 },
    { name: "საჭმლის ფოტოგრაფია", sub_category_id: 21 },
    
    
    //! პორტრეტები
    { name: "Photoshop შესწორება", sub_category_id: 22 },
    { name: "პოზირება", sub_category_id: 22 },
    { name: "განათება", sub_category_id: 22 },
    { name: "ფოტოგრაფია", sub_category_id: 22 },
    { name: "ოჯახური პორტრეტის ფოტოგრაფია", sub_category_id: 22 },
    

    
    //! ვიდეო დიზაინი
    { name: "ვიდეო ედიტირება", sub_category_id: 23 },
    { name: "Adobe Premiere", sub_category_id: 23 },
    { name: "ვიდეო პროდუქცია", sub_category_id: 23 },
    { name: "კინოს გაკეთება", sub_category_id: 23 },
    { name: "ვიდეოგრაფია", sub_category_id: 23 },
    { name: "DaVinci Resolve", sub_category_id: 23 },
    { name: "Final Cut Pro", sub_category_id: 23 },
    { name: "სინემატოგრაფია", sub_category_id: 23 },
    { name: "ფერების შესწორება", sub_category_id: 23 },
    
    

    // ****************** 
    //! ფინანსები და ბუღალტერია
    // ****************** 

    
    //! აღრიცხვები
    { name: "აღრიცხვები", sub_category_id: 24 },
    { name: "ფინანსების ფუნდამენტები", sub_category_id: 24 },
    { name: "ფინანსური აღიცხვები", sub_category_id: 24 },
    { name: "Xero", sub_category_id: 24 },
    { name: "IFRS", sub_category_id: 24 },
     
    
    //! შესაბამისობა
    { name: "ანტი ფულის გათეტრება", sub_category_id: 25},
    { name: "რისკის მენეჯმენტი", sub_category_id: 25},
    { name: "Sarbanes-Oxley (SOX)", sub_category_id: 25},
    { name: "Certified Internal Auditor (CIA)", sub_category_id: 25},
    { name: "CAMS Certification", sub_category_id: 25},
    { name: "IFRS", sub_category_id: 25},
    { name: "ფინანსური რისკის მენეჯმენტი (FRM)", sub_category_id: 25},
    { name: "სერტიფიცირებული თაღლითობის შემმოწმებელი (CFE)", sub_category_id: 25},
    

    
    //! კრიპტოვალუტა და ბლოკჩეინი
    { name: "კრიპტოვალუტა", sub_category_id: 26 },
    { name: "Bitcoin", sub_category_id: 26 },
    { name: "ბლოკჩეინი", sub_category_id: 26 },
    { name: "პირადი ფინანსები", sub_category_id: 26 },
    { name: "დღის ვაჭრობა", sub_category_id: 26 },
    { name: "ალგორითმული ვაჭრობა", sub_category_id: 26 },
    { name: "Bitcoin ვაჭრობა", sub_category_id: 26 },
    { name: "Ethereum", sub_category_id: 26 },
    { name: "ტექნიკური ანალიზი", sub_category_id: 26 },

    
    
    //! ეკონომიკა
    { name: "მიკროეკონომიკა", sub_category_id: 27 },
    { name: "მაკროეკონომიკა", sub_category_id: 27 },
    { name: "ეკონომეტრიკა", sub_category_id: 27 },
    { name: "მეწარმეობის საფუძვლები", sub_category_id: 27 },
    { name: "პოლიტიკური მეცნიერება", sub_category_id: 27 },
    { name: "ფინანსების ფუნდამენტები", sub_category_id: 27 },
    { name: "Რეგრესიული ანალიზი", sub_category_id: 27 },
    

    
    //! ფინანსები
    { name: "პირადი ფინანსები", sub_category_id: 28 },
    { name: "Investment Banking", sub_category_id: 28 },
    { name: "CFA", sub_category_id: 28 },
    { name: "ფინანსების ფუნდამენტები", sub_category_id: 28 },
    { name: "ფინანსური მენეჯმენტი", sub_category_id: 28 },
    { name: "ფინანსური ანალიზი", sub_category_id: 28 },
    { name: "Კორპორატიული ფინანსები", sub_category_id: 28 },
    { name: "Excel", sub_category_id: 28 },
    { name: "კომპანიის შეფასება", sub_category_id: 28 },

    
    //! ფინანსური სერტიფიკატები და საგამოცდო მომზადება
    { name: "CFA", sub_category_id: 29 },
    { name: "ფინანსური მარკეტი", sub_category_id: 29 },
    { name: "რაოდენობრივი ფინანსები", sub_category_id: 29 },
    { name: "მენეჯმენტის სერტიფიცირებული ბუღალტერი (CMA)", sub_category_id: 29 },
    { name: "ACCA", sub_category_id: 29 },
    { name: "ფინანსური მენეჯმენტი", sub_category_id: 29 },
    { name: "ANBIMA სერტიფიკატი", sub_category_id: 29 },
    { name: "Კორპორატიული ფინანსები", sub_category_id: 29 },

    
    //! ფინანსური მოდელირება და ანალიზი
    { name: "ფინანსური ანალიზი", sub_category_id: 30 },
    { name: "ფინანსური მოდელირება", sub_category_id: 30 },
    { name: "ფინანსების ფუნდამენტები", sub_category_id: 30 },
    { name: "Excel", sub_category_id: 30 },
    { name: "Აღრიცხვა", sub_category_id: 30 },
    { name: "ინვესტიცია", sub_category_id: 30 },
    { name: "Python", sub_category_id: 30 },
    { name: "საინვესტიციო ბანკი", sub_category_id: 30 },
    { name: "ფინანსური მენეჯმენტი", sub_category_id: 30 },

    
    //! ინვესტიცია და ვაჭრობა
    { name: "საფონდო ვაჭრობა", sub_category_id: 31 },
    { name: "Forex", sub_category_id: 31 },
    { name: "ტექნიკური ანალიზი", sub_category_id: 31 },
    { name: "ინვენსტიცია", sub_category_id: 31 },
    { name: "სავაჭრო პარამეტრები", sub_category_id: 31 },
    { name: "დღის ვაჭრობა", sub_category_id: 31 },
    { name: "ალგორითმული ვაჭრობა", sub_category_id: 31 },
    { name: "ფინანსური ანალიზი", sub_category_id: 31 },
    { name: "ფინანსური ვაჭრობა", sub_category_id: 31 },

    
    //! ფულის მენეჯმენტის პროგრამები
    { name: "QuickBooks Online", sub_category_id: 32 },
    { name: "Excel", sub_category_id: 32 },
    { name: "QuickBooks", sub_category_id: 32 },
    { name: "SAP FICO", sub_category_id: 32 },
    { name: "QuickBooks Pro", sub_category_id: 32 },
    { name: "Xero", sub_category_id: 32 },
    { name: "Excel ანალიტიკები", sub_category_id: 32 },

    
    //! გადასახადები
    { name: "გადასახადის მომზადება", sub_category_id: 33 },
    { name: "საქონლისა და მომსახურების გადასახადი", sub_category_id: 33 },
    { name: "Აღრიცხვა", sub_category_id: 33 },
    { name: "Დამატებითი ღირებულების გადასახადი (VAT)", sub_category_id: 33 },
    { name: "QuickBooks Online", sub_category_id: 33 },
    { name: "პირადი ფინანსები", sub_category_id: 33 },
    { name: "საშინაო ბიზნესი", sub_category_id: 33 },
    { name: "ფინანსური დაგეგმვა", sub_category_id: 33 },
    { name: "ფინანსური აღრიცხვა", sub_category_id: 33 },





    // ****************** 
    //! ბიზნესი
    // ****************** 
 

    //! მეწარმეობა
    { name: "ბიზნესის ფუნდამენტები", sub_category_id: 34 },
    { name: "მეწარმეობის ფუნდამენტები", sub_category_id: 34 },
    { name: "ბიზნეს სტრატეგია", sub_category_id: 34 },
    { name: "სტარტაპი", sub_category_id: 34 },
    { name: "ბიზნეს გეგმა", sub_category_id: 34 },
    { name: "Freelancing", sub_category_id: 34 },
    { name: "Blogging", sub_category_id: 34 },
    { name: "ონლაინ ბიზნესი", sub_category_id: 34 },
    { name: "საშინაო ბიზნესი", sub_category_id: 34 },
    
    

    //! კომუნიკაციები
    { name: "წერა", sub_category_id: 35 },
    { name: "კომუნიკაციის უნარები", sub_category_id: 35 },
    { name: "პრეზენტაციის უნარები", sub_category_id: 35 },
    { name: "Საჯარო გამოსვლები", sub_category_id: 35 },
    { name: "მხატვრული ლიტერატურა", sub_category_id: 35 },
    { name: "ბიზნეს წერა", sub_category_id: 35 },
    { name: "ტექნიკური წერა", sub_category_id: 35 },
    { name: "Email ეტიკეტი", sub_category_id: 35 },

    //! გაყიდვები
    { name: "პროდუქტის მენეჯმენტი", sub_category_id: 36 },
    { name: "ლიდერობა", sub_category_id: 36 },
    { name: "მენეჯმენტის უნარი", sub_category_id: 36 },
    { name: "ISO 9001", sub_category_id: 36 },
    { name: "ბიზნეს პროცესის მენეჯმენტი", sub_category_id: 36 },
    { name: "რისკის მენეჯმენტი", sub_category_id: 36 },
    { name: "Agile", sub_category_id: 36 },
    { name: "ხარისხის მენეჯმენტი", sub_category_id: 36 },
    { name: "მენეჯმენტის მწვრთნელები", sub_category_id: 36 },
    

    //! ბიზნეს სტრატეგია
    { name: "ციფრული მარკეტინგი", sub_category_id: 37 },
    { name: "მენეჯმენტ კონსულტაცია", sub_category_id: 37 },
    { name: "Google Ads (Adwords)", sub_category_id: 37 },
    { name: "ბიზნეს მოდელი", sub_category_id: 37 },
    { name: "TOGAF 9 ფუნდამენტები", sub_category_id: 37 },
    { name: "სტრატეგიული დაგეგმვა", sub_category_id: 37 },
    { name: "ინოვაცია", sub_category_id: 37 },
    { name: "ბიზნეს გეგმა", sub_category_id: 37 },

    //! ოპერაციები
    { name: "Six Sigma", sub_category_id: 38 },
    { name: "Six Sigma Green Belt", sub_category_id: 38 },
    { name: "Six Sigma Yellow Belt", sub_category_id: 38 },
    { name: "Six Sigma Black Belt", sub_category_id: 38 },
    { name: "Lean Six Sigma Green Belt", sub_category_id: 38 },
    { name: "Მიწოდების ჯაჭვი", sub_category_id: 38 },
    { name: "ხარისხის მენეჯმენტი", sub_category_id: 38 },

    //! პროექტის მენეჯმენტი
    { name: "PMP", sub_category_id: 39 },
    { name: "PMBOK", sub_category_id: 39 },
    { name: "Agile", sub_category_id: 39 },
    { name: "Scrum", sub_category_id: 39 },
    { name: "CAPM", sub_category_id: 39 },
    { name: "PMI-ACP", sub_category_id: 39 },
    { name: "Microsoft Project", sub_category_id: 39 },
    { name: "Risk Management", sub_category_id: 39 },

    //! ბისნესის კანონები
    { name: "პატენტი", sub_category_id: 40 },
    { name: "GDPR", sub_category_id: 40 },
    { name: "Სახელშეკრულებო სამართალი", sub_category_id: 40 },
    { name: "Law", sub_category_id: 40 },
    { name: "LGPD Lei Geral de Proteção de Dados", sub_category_id: 40 },
    { name: "ჯანდაცვის IT", sub_category_id: 40 },
    { name: "სამედიცინო მოწყობილობის განვითარება", sub_category_id: 40 },
    { name: "მონაცემთა დაცვა", sub_category_id: 40 },

    //! მონაცემები და ანალიტიკა
    { name: "SQL", sub_category_id: 41 },
    { name: "Microsoft Power BI", sub_category_id: 41 },
    { name: "Tableau", sub_category_id: 41 },
    { name: "ბიზნეს ანალიზი", sub_category_id: 41 },
    { name: "ბიზნეს დაზვერვა", sub_category_id: 41 },
    { name: "Მონაცემთა ანალიზი", sub_category_id: 41 },
    { name: "MySQL", sub_category_id: 41 },
    { name: "მონაცემთა მოდელირება", sub_category_id: 41 },
    { name: "Big Data", sub_category_id: 41 },

    //! საშინაო ბიზნესი
    { name: "საშინაო ბიზნესი", sub_category_id: 42 },

    //! ადამიანური რესურსები
    { name: "ადამიანური რესურსები", sub_category_id: 43 },

    //! ინდუსტრია
    { name: "ინდუსტრია", sub_category_id: 44 },

    //! მედია
    { name: "მედია", sub_category_id: 6 },

    //! უძრავი ქონება
    { name: "უძრავი ქონება", sub_category_id: 6 },


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

