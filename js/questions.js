const questions = [
{
    question:"Lần đầu mình nhắn tin là khi nào?",
    image: "https://i.redd.it/rku3tl5b9mcb1.jpg",
    options:[
        "20/07/2024",
        "21/07/2024",
        "22/07/2024",
        "24/07/2024"
    ],
    answer:1, 
    memory: {

        title: "Tin nhắn đầu tiên",

        image: "images/nhantinlandau.jpg",

        story: "A ơi, em đki link r nma bấm vào link lớp thì nó lỗi ạ:) A add e vào với. HEHE"

    }
},
{
    question:"Lần đâu đi ăn chung là ăn gì?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJIKgZwjS0xs38Qpj-LudqUArbNSvkN86OWuWxG7FTA&s=10",
    options:[
        "Mỳ cay",
        "Gà",
        "Uống nước",
        "Xiên bẩn"
    ],
    answer:1, 
    memory: {

        title: "Lần đầu đi ăn chung",

        image: "images/bkz.jpg",

        story: "Người hoa mắt tụt huyết áp cùng người tóc bết đang ủ vào quán ăn gà."

    }
},
{
    question:"Ngày yêu nhau là khi nào?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnZHO7i__5e33Sa0j9eCdqFBlu1Kk5JdQDAWLO7FRfP7dZabpyeAUBvfW&s=10",
    options:[
        "07/07",
        "13/07",
        "06/07",
        "08/07"
    ],
    answer:0,
    memory: {

        title: "Ngày yêu nhau",

        image: "images/theone.JPG",

        story: "Đêm hôm ý thức cũng khuya á, em còn ngủ với mẹ may mà không đứng tim ra đấy"

    }
},
{
    question:"Ngày mình tỏ tình là bao giờ?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhZXQcRwMAKol5tcSlrxZXgX0JRHvaNwRGn-n3hyNDvfTHoImzzgPsdU&s=10",
    options:[
        "07/07",
        "08/07",
        "13/07",
        "14/07"
    ],
    answer:2, 
    memory: {

        title: "Ngày tỏ tình",

        image: "images/ngaytotinh.jpg",

        story: "Lời tỏ tình văn chương đủ mở bài thân bài kết bài, mặc dù em cãi hơi ngang nhưng mà a chịu đựng được :)), chưa bao giờ thấy gian nan như hôm ý."

    }
}, 
{
    question:"Hộp quà lúc tỏ tình được buộc dây màu gì?",
    image: "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550584925177_org.jpg",
    options:[
        "Xanh",
        "Hồng",
        "Trắng",
        "Đỏ"
    ],
    answer:3, 
    memory: {

        title: "Hộp quà tỏ tình",

        image: "images/hopqua.JPG",

        story: "Hộp giấy nâu, màu đỏ nhá. Người ta chọn cả buổi trưa đấy."

    }
}, 
{
    question:"Lúc mở quà thì bị rơi đồ gì?",
    image: "images/doroi.jpg",
    options:[
        "Vòng tay",
        "Vòng cổ",
        "Buộc tóc",
        "Kẹp tóc"
    ],
    answer:0,
    memory: {

        title: "Đồ bị rơi",

        image: "images/vongtay.PNG",

        story: "Đánh rơi mất cái vòng, còn lừa người ta không lên tìm để tự lên tìm nữa :)) Nhưng mà mất cũng may giờ có vòng tay mới"

    }
}, 
{
    question:"Sinh nhật em anh tặng em quà gì?",
    image: "images/sinhnhat.JPG",
    options:[
        "Cốc",
        "JellyCat",
        "Thỏ Zootopia",
        "Móc khóa"
    ],
    answer:1,
    memory: {

        title: "Quà sinh nhật",

        image: "images/jellycat.JPG",

        story: "Chọn quà này cũng lâu á, có cả video em unbox mà. Hôm ý bố đã đoán ra là tặng em rồi, mỗi tội mùi hơi coolfresh."

    }
},

{
    question:"Giáng sinh anh định tặng em cái gì đầu tiên?",
    image: "images/giangsinh.JPG",
    options:[
        "Cốc",
        "Không tặng gì",
        "Sừng",
        "Móc khóa"
    ],
    answer:2,
    memory: {

        title: "Quà lúc đầu",

        image: "images/quagiangsinh.jpg",

        story: "Lúc đầu a định tặng cái sừng đấy, trêu e xong gặp luôn ở quán mới hay chứ."

    }
},
{
    question:"Hộp quà valentine có bao nhiêu viên sicula?",
    image: "images/vlt.jpg",
    options:[
        "8",
        "9",
        "10",
        "11"
    ],
    answer:2, 
    memory: {

        title: "Hộp sicula",

        image: "images/sicula.JPG",

        story: "Đếm xem mấy viên :)) Hôm ý hơi ứ ừ đẹ. Với cả ăn sicuala hơi lâu nhá"

    }
},

{
    question:"Lần đầu hôn má là hôm nào?",
    image: "images/thomma1.JPG",
    options:[
        "1/12",
        "8/12",
        "9/12",
        "22/12"
    ],
    answer:1, 
    memory: {

        title: "Hun má",

        image: "images/honma.JPG",

        story: "Phần thưởng hơi rườm rà, cứ đợi nhân viên nó không nhìn. Chiều hôm ý còn đi ăn tacos."

    }
},
{
    question:"Lần đầu hôn môi là khi nào?",
    image: "images/honmoi.JPG",
    options:[
        "8/12",
        "9/12",
        "22/12",
        "29/12"
    ],
    answer:3, 
    memory: {

        title: "Hun môi",

        image: "images/honmoi1.JPG",

        story: "Sáng đi thi còn chiều hẹn thì phải. Tôi yêu đoán các nước hê hê. Lần đầu mà mắt cứ mở thô lố ra."

    }
},
{
    question:"Lần đầu chụp ảnh photobooth là khi nào?",
    image: "images/ptb1.JPG",
    options:[
        "24/03/2026",
        "25/03/2026",
        "26/03/2026",
        "27/03/2026"
    ],
    answer:1, 
    memory: {

        title: "PHOTOBOOTH",

        image: "images/ptb2.PNG",

        story: "Đi xem phim ma, được ôm hơi nhìu, hơi bị thít hehe"

    }
},

{
    question:"E có muốn xem phần tiếp theo không?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nESIxp0Pqs4rsylVpVfoLExyjj7AWy9C_Qvob-18oQ&s=10",
    options:[
        "Có",
        "Không",
    ],
    answer:0,
    memory: {

        title: "Chuyển sang mục tiếp theo",

        image: "images/nextpart.jpg",

        story: "Sang phần tiếp theo xem sao"

    }
}
];