var courses = [
    {
        "id": 15,
        "title": "HTML CSS Pro",
        "slug": "htmlcss",
        "description": "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
        "image": "courses/15/62f13d2424a47.png",
        "icon": "courses/15/62385d6c63dfa.png",
        "video_type": "upload",
        "video": null,
        "old_price": 2499000,
        "price": 1299000,
        "pre_order_price": 699000,
        "students_count": 2208,
        "is_pro": true,
        "is_coming_soon": false,
        "is_selling": true,
        "published_at": "2022-08-18T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
        "video_url": "",
        "landing_page_url": "/landing/htmlcss",
        "is_pre_order": false,
        "is_published": true
    },
    {
        "id": 19,
        "title": "JavaScript Pro",
        "slug": "javascript-pro",
        "description": "Khóa học JavaScript Pro",
        "image": "courses/19/62f13cb607b4b.png",
        "icon": "courses/19/62f13cb685c81.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 222213,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2023-01-31T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
        "video_url": "",
        "landing_page_url": "/landing/javascript-pro",
        "is_pre_order": false,
        "is_published": false
    },
    {
        "id": 20,
        "title": "ReactJS Pro",
        "slug": "reactjs-pro",
        "description": "Khóa học ReactJS Pro",
        "image": "courses/20/62f13dded314e.png",
        "icon": "courses/20/62f13ddf5e7f9.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 152342,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2023-05-31T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13ddf5e7f9.png",
        "video_url": "",
        "landing_page_url": "/landing/reactjs-pro",
        "is_pre_order": false,
        "is_published": false
    }
]

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const root = ReactDOM.createRoot($('#root'));

function ChangeCurrency({ num } = props) {
    return new Intl.NumberFormat('VN-vi', { style: 'currency', currency: 'VND' }).format(num);
}

function Course({ title, description, image, price } = props) {
    return <div className="course-wrapper">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image}></img>
        <p><ChangeCurrency num={price} /></p>
    </div>
}

root.render(
    <div className="app">
        {courses.map((course, i) => {
            return <Course
                key={i} title={course.title}
                description={course.description}
                image={course.image_url}
                price={course.price}
            />
        })}
    </div>
)