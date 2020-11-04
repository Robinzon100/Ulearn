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
    { name: "მოდა", main_category_id: 12 },
    { name: "კერვა", main_category_id: 12 },
    { name: "Adobe Illustrator", main_category_id: 12 },
    { name: "სამკაულების დიზაინი", main_category_id: 12 },
    { name: "Photoshop", main_category_id: 12 },
    { name: "მაისურის დიზაინი", main_category_id: 12 },


    //! არქიტექტურული დიზაინი 13
    { name: "AudoCAD", main_category_id: 13 },
    { name: "SketchUp", main_category_id: 13 },
    { name: "Blender", main_category_id: 13 },
    { name: "ArchiCAD", main_category_id: 13 },
    { name: "არქიტექტორული ფუნდამენტები", main_category_id: 13 },


    //! ინტერიერის დიზაინი 14
    { name: "ფერების თეორია", main_category_id: 14 },
    { name: "SketchUp", main_category_id: 14 },
    { name: "მექანიკური ინჟინერია", main_category_id: 14 },
    { name: "Blender", main_category_id: 14 },
    { name: "მინიმალიზმი", main_category_id: 14 },




    // ******************
    //! IT ტექნოლოგია
    // ******************
    //! IT სერთიფიკატები
    { name: "CompTIA A+", main_category_id: 15 },
    { name: "CompTIA Security+", main_category_id: 15 },
    { name: "AWS სერტიფიკატი", main_category_id: 15 },
    { name: "Amazon AWS", main_category_id: 15 },
    { name: "Microsoft სერტიფიკატი", main_category_id: 15 },
    { name: "AWS Certified Solutions Architect - Associate", main_category_id: 15 },
    { name: "AWS Certified Cloud Practitioner", main_category_id: 15 },
    { name: "Cisco CCNA", main_category_id: 15 },
    { name: "AWS Certified Developer - Associate", main_category_id: 15 },
    
    
    

    //! ქსელი და უსაფრთხოება
    { name: "ეთიკური ჰაკირება", main_category_id: 16 },
    { name: "კიბერ უსაფრთხოება", main_category_id: 16 },
    { name: "CompTIA Security+", main_category_id: 16 },
    { name: "CompTIA Network+", main_category_id: 16 },
    { name: "პენ ტესტირება", main_category_id: 16 },
    { name: "ქსელის უსაფრთხოება", main_category_id: 16 },
    { name: "IT ქსელების ფუნდამენტები", main_category_id: 16 },
    { name: "Cisco CCNA", main_category_id: 16 },    
    
    

    //! ოპერატიული სისტემები
    { name: "Linux", main_category_id: 17 },
    { name: "Linux ადმინისტრაცია", main_category_id: 17 },
    { name: "Windows სერვერ", main_category_id: 17 },
    { name: "Shell Scripting", main_category_id: 17 },
    { name: "PowerShell", main_category_id: 17 },
    { name: "VMware Vsphere", main_category_id: 17 },
    { name: "LPIC-1: Linux ადმინისტრატორი", main_category_id: 17 },
    { name: "ოპერატიული სისტემების შექმნა", main_category_id: 17 },
    
    
    

    //! აპარატურა (hardware
    { name: "Docker", main_category_id: 18 },
    { name: "Python", main_category_id: 18 },
    { name: "Kubernetes", main_category_id: 18 },
    { name: "DevOps", main_category_id: 18 },
    { name: "ალგორითმები", main_category_id: 18 },
    { name: "AWS Certified Solutions Architect - Professional", main_category_id: 18 },
    { name: "AWS Certification", main_category_id: 18 },
    { name: "Java", main_category_id: 18 },    
    
    




    // ******************   
    //! ფოტოგრაფია
    // ****************** 
    
    //! ციფრული ფოტოგრაფია
    { name: "Photoshop", main_category_id: 19 },
    { name: "კომპოზიცია ფოტოგრაფიაში", main_category_id: 19 },
    { name: "DSLR", main_category_id: 19 },
    { name: "კამერები", main_category_id: 19 },
    { name: "განათება ფოტოგრაფიში", main_category_id: 19 },
    { name: "საჭმლის ფოტოგრაფია", main_category_id: 19 },
    { name: "Ფილმის გადაღება", main_category_id: 19 },
    
    
    
    //! ფოტოგრაფიის პროგრამები
    { name: "Adobe Lightroom", main_category_id: 20 },
    { name: "Photoshop", main_category_id: 20 },
    { name: "სურატის მანიპულირება", main_category_id: 20 },
    { name: "Affinity Photo", main_category_id: 20 },
    { name: "Photoshop-ით შესწორება", main_category_id: 20 },
    { name: "დრონით ფოტოგრაფია", main_category_id: 20 },
    
    
     
    //! კომერციული ფოტოგრაფია
    { name: "უძრავი ქონების ფოტოგრაფია", main_category_id: 21 },
    { name: "მარკეტინგის სტრატეგია", main_category_id: 21 },
    { name: "არქიტექტორული ფოტოგრაფია", main_category_id: 21 },
    { name: "ფოტორგრაფიის ბიზნესი", main_category_id: 21 },
    { name: "საქორწინო ფოტოგრფია", main_category_id: 21 },
    { name: "პროდუქტის ფოტოგრაფია", main_category_id: 21 },
    { name: "საჭმლის ფოტოგრაფია", main_category_id: 21 },
    
    
    //! პორტრეტები
    { name: "Photoshop შესწორება", main_category_id: 22 },
    { name: "პოზირება", main_category_id: 22 },
    { name: "განათება", main_category_id: 22 },
    { name: "ფოტოგრაფია", main_category_id: 22 },
    { name: "ოჯახური პორტრეტის ფოტოგრაფია", main_category_id: 22 },
    

    
    //! ვიდეო დიზაინი
    { name: "ვიდეო ედიტირება", main_category_id: 23 },
    { name: "Adobe Premiere", main_category_id: 23 },
    { name: "ვიდეო პროდუქცია", main_category_id: 23 },
    { name: "კინოს გაკეთება", main_category_id: 23 },
    { name: "ვიდეოგრაფია", main_category_id: 23 },
    { name: "DaVinci Resolve", main_category_id: 23 },
    { name: "Final Cut Pro", main_category_id: 23 },
    { name: "სინემატოგრაფია", main_category_id: 23 },
    { name: "ფერების შესწორება", main_category_id: 23 },
    
    

    // ****************** 
    //! ფინანსები და ბუღალტერია
    // ****************** 

    
    //! აღრიცხვები
    { name: "აღრიცხვები", main_category_id: 24 },
    { name: "ფინანსების ფუნდამენტები", main_category_id: 24 },
    { name: "ფინანსური აღიცხვები", main_category_id: 24 },
    { name: "Xero", main_category_id: 24 },
    { name: "IFRS", main_category_id: 24 },
     
    
    //! შესაბამისობა
    { name: "ანტი ფულის გათეტრება", main_category_id: 25},
    { name: "რისკის მენეჯმენტი", main_category_id: 25},
    { name: "Sarbanes-Oxley (SOX)", main_category_id: 25},
    { name: "Certified Internal Auditor (CIA)", main_category_id: 25},
    { name: "CAMS Certification", main_category_id: 25},
    { name: "IFRS", main_category_id: 25},
    { name: "ფინანსური რისკის მენეჯმენტი (FRM)", main_category_id: 25},
    { name: "სერტიფიცირებული თაღლითობის შემმოწმებელი (CFE)", main_category_id: 25},
    

    
    //! კრიპტოვალუტა და ბლოკჩეინი
    { name: "კრიპტოვალუტა", main_category_id: 26 },
    { name: "Bitcoin", main_category_id: 26 },
    { name: "ბლოკჩეინი", main_category_id: 26 },
    { name: "პირადი ფინანსები", main_category_id: 26 },
    { name: "დღის ვაჭრობა", main_category_id: 26 },
    { name: "ალგორითმული ვაჭრობა", main_category_id: 26 },
    { name: "Bitcoin ვაჭრობა", main_category_id: 26 },
    { name: "Ethereum", main_category_id: 26 },
    { name: "ტექნიკური ანალიზი", main_category_id: 26 },

    
    
    //! ეკონომიკა
    { name: "მიკროეკონომიკა", main_category_id: 27 },
    { name: "მაკროეკონომიკა", main_category_id: 27 },
    { name: "ეკონომეტრიკა", main_category_id: 27 },
    { name: "მეწარმეობის საფუძვლები", main_category_id: 27 },
    { name: "პოლიტიკური მეცნიერება", main_category_id: 27 },
    { name: "ფინანსების ფუნდამენტები", main_category_id: 27 },
    { name: "Რეგრესიული ანალიზი", main_category_id: 27 },
    

    
    //! ფინანსები
    { name: "პირადი ფინანსები", main_category_id: 28 },
    { name: "Investment Banking", main_category_id: 28 },
    { name: "CFA", main_category_id: 28 },
    { name: "ფინანსების ფუნდამენტები", main_category_id: 28 },
    { name: "ფინანსური მენეჯმენტი", main_category_id: 28 },
    { name: "ფინანსური ანალიზი", main_category_id: 28 },
    { name: "Კორპორატიული ფინანსები", main_category_id: 28 },
    { name: "Excel", main_category_id: 28 },
    { name: "კომპანიის შეფასება", main_category_id: 28 },

    
    //! ფინანსური სერტიფიკატები და საგამოცდო მომზადება
    { name: "CFA", main_category_id: 29 },
    { name: "ფინანსური მარკეტი", main_category_id: 29 },
    { name: "რაოდენობრივი ფინანსები", main_category_id: 29 },
    { name: "მენეჯმენტის სერტიფიცირებული ბუღალტერი (CMA)", main_category_id: 29 },
    { name: "ACCA", main_category_id: 29 },
    { name: "ფინანსური მენეჯმენტი", main_category_id: 29 },
    { name: "ANBIMA სერტიფიკატი", main_category_id: 29 },
    { name: "Კორპორატიული ფინანსები", main_category_id: 29 },

    
    //! ფინანსური მოდელირება და ანალიზი
    { name: "ფინანსური ანალიზი", main_category_id: 30 },
    { name: "ფინანსური მოდელირება", main_category_id: 30 },
    { name: "ფინანსების ფუნდამენტები", main_category_id: 30 },
    { name: "Excel", main_category_id: 30 },
    { name: "Აღრიცხვა", main_category_id: 30 },
    { name: "ინვესტიცია", main_category_id: 30 },
    { name: "Python", main_category_id: 30 },
    { name: "საინვესტიციო ბანკი", main_category_id: 30 },
    { name: "ფინანსური მენეჯმენტი", main_category_id: 30 },

    
    //! ინვესტიცია და ვაჭრობა
    { name: "საფონდო ვაჭრობა", main_category_id: 31 },
    { name: "Forex", main_category_id: 31 },
    { name: "ტექნიკური ანალიზი", main_category_id: 31 },
    { name: "ინვენსტიცია", main_category_id: 31 },
    { name: "სავაჭრო პარამეტრები", main_category_id: 31 },
    { name: "დღის ვაჭრობა", main_category_id: 31 },
    { name: "ალგორითმული ვაჭრობა", main_category_id: 31 },
    { name: "ფინანსური ანალიზი", main_category_id: 31 },
    { name: "ფინანსური ვაჭრობა", main_category_id: 31 },

    
    //! ფულის მენეჯმენტის პროგრამები
    { name: "QuickBooks Online", main_category_id: 32 },
    { name: "Excel", main_category_id: 32 },
    { name: "QuickBooks", main_category_id: 32 },
    { name: "SAP FICO", main_category_id: 32 },
    { name: "QuickBooks Pro", main_category_id: 32 },
    { name: "Xero", main_category_id: 32 },
    { name: "Excel ანალიტიკები", main_category_id: 32 },

    
    //! გადასახადები
    { name: "გადასახადის მომზადება", main_category_id: 33 },
    { name: "საქონლისა და მომსახურების გადასახადი", main_category_id: 33 },
    { name: "Აღრიცხვა", main_category_id: 33 },
    { name: "Დამატებითი ღირებულების გადასახადი (VAT)", main_category_id: 33 },
    { name: "QuickBooks Online", main_category_id: 33 },
    { name: "პირადი ფინანსები", main_category_id: 33 },
    { name: "სახლის ბიზნესი", main_category_id: 33 },
    { name: "ფინანსური დაგეგმვა", main_category_id: 33 },
    { name: "ფინანსური აღრიცხვა", main_category_id: 33 },



    

    // ****************** 
    //! ბიზნესი
    // ****************** 


    //! ფინანსები
    { name: "ფინანსები", main_category_id: 6 },

    //! მეწარმეობა
    { name: "მეწარმეობა", main_category_id: 6 },

    //! კომუნიკაციები
    { name: "კომუნიკაციები", main_category_id: 6 },

    //! გაყიდვები
    { name: "გაყიდვები", main_category_id: 6 },

    //! სტრატეგია
    { name: "სტრატეგია", main_category_id: 6 },

    //! ოპერაციები
    { name: "ოპერაციები", main_category_id: 6 },

    //! პროექტის მენეჯმენტი
    { name: "პროექტის მენეჯმენტი", main_category_id: 6 },

    //! ბისნესის კანონები
    { name: "ბისნესის კანონები", main_category_id: 6 },

    //! მონაცემები და ანალიტიკა
    { name: "მონაცემები და ანალიტიკა", main_category_id: 6 },

    //! საშინაო ბიზნესი
    { name: "საშინაო ბიზნესი", main_category_id: 6 },

    //! ადამიანური რესურსები
    { name: "ადამიანური რესურსები", main_category_id: 6 },

    //! ინდუსტრია
    { name: "ინდუსტრია", main_category_id: 6 },

    //! მედია
    { name: "მედია", main_category_id: 6 },

    //! უძრავი ქონება
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

