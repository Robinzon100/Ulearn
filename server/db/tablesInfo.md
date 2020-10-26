# created tables
## small simple tables 
- [x] types_of_reports
- [x] complaint_types
- [x] sub_categories


## complex tables with relations
- [x] main_categories
- [x] users
- [x] subscriptions
- [x] reports
- [x] made_reports


# models
## user
```javascript
    const insertTestUser = {
        full_name: "rowValue1",
        email: "email",
        password: "password",
        recovery_email: "recovery_email",
        description: "description",
        last_login: "2018-01-03 07:54",
        restore_token: "restore_token",
        token_expiration: '1602611766048',
        image_url: "image_url",
        notifications: JSON.stringify([{ name: "asd" }]),
        paynment_info: JSON.stringify([{ name: "asd" }]),
        student_amount: 1,
        review_amount: 2,
        total_minutes_of_courses: 12,
        detailed_ratings: user.rating_starts,
        rating: 2,
        verified: true,
        isInstructor: true,
        subscriber_count: 123,
        show_details_public: true,
        personal_detales: user.socials,
        socials: JSON.stringify({ name: "asd" }),
        purchased_courses_Receipts: JSON.stringify({ name: "asd" }),
        Ulearn_coins: 21,
        affiliate_link: "alsdkfjla.com",
        last_searched: JSON.stringify([{ name: "asd" }]),
        liked_courses_ids: JSON.stringify([1, 3]),
        viewed_courses_ids: JSON.stringify([]),
        favorite_main_category_ids: JSON.stringify([1, 2]),
        favorite_sub_category_ids: JSON.stringify([1, 2]),
        generated_categories_ids: JSON.stringify([1, 2]),
        generated_sub_category_ids: JSON.stringify([1, 2]),
        rating_title_id: 1,
        favorite_main_category_id: 1,
        instructor_category_id: 2,
        user_type_id: 1,
    }
```