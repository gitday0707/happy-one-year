let currentQuestion = 0;
let lives = 3;
const musicPlayer = document.getElementById("musicPlayer");

function typeWriter(element, text, speed, callback) {
  let index = 0;

  function type() {
    if (index <= text.length) {
      element.innerHTML =
        text.substring(0, index) + '<span class="typing-cursor">|</span>';

      const letterCard = document.querySelector(".letter-card");

      letterCard.scrollTop = letterCard.scrollHeight;

      index++;

      setTimeout(type, speed);
    } else {
      element.innerHTML = text;

      if (callback) callback();
    }
  }

  type();
}

const tingSound = document.getElementById("tingSound");

function startGame() {
  console.log("START GAME");
  musicPlayer.src = "music/background.mp3";

    musicPlayer.loop = true;

    musicPlayer.volume = 0.4;

    musicPlayer.play().catch(console.error);

}

const gameCard = document.querySelector(".game-card");

function fadeOutGameCard() {
  gameCard.classList.add("fade-out");
}

function fadeInGameCard() {
  gameCard.classList.remove("fade-out");

  gameCard.classList.add("fade-in");

  setTimeout(() => {
    gameCard.classList.remove("fade-in");
  }, 600);
}

function loadQuestion() {
  const gameCard = document.querySelector(".game-card");

  gameCard.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const q = questions[currentQuestion];

  // Progress
  document.getElementById("progress").innerText =
    `Câu ${currentQuestion + 1} / ${questions.length}`;

  // Thanh progress
  document.getElementById("progress-fill").style.width =
    ((currentQuestion + 1) / questions.length) * 100 + "%";

  // Nội dung câu hỏi
  document.getElementById("question").innerText = q.question;

  // Ảnh
  const image = document.getElementById("question-image");

  if (q.image) {
    image.src = q.image;
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }

  // Đáp án
  const answerContainer = document.getElementById("answer-container");

  answerContainer.innerHTML = "";

  q.options.forEach((option, index) => {
    answerContainer.innerHTML += `
            <label class="option">

                <input
                    type="radio"
                    name="answer"
                    value="${index}"
                >

                <span>${option}</span>

            </label>
        `;
  });
}

function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    alert("Mời em chọn đáp án hihi ❤️");

    return;
  }

  const selectedOption = selected.closest(".option");

  const userAnswer = Number(selected.value);

  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    selectedOption.classList.add("correct");

    playConfetti();

    setTimeout(() => {
      correctAnswerEffect();
    }, 800);
  } else {
    wrongAnswerEffect();
  }
}
function correctAnswerEffect() {
  console.log("correct");
  fadeOutGameCard();

  setTimeout(() => {
    showMemory();
  }, 1000);
}
function wrongAnswerEffect() {
  showModal(
    "💔 Sai rồi!",
    "Mất 1 trái tim ❤️. Hãy nhớ lại thật kỹ nhé.",
    function () {
      lives--;

      updateHeart();

      if (lives <= 0) {
        gameOver();
      }
    },
  );
}
function updateHeart() {
  const heartContainer = document.getElementById("heart-container");

  heartContainer.classList.remove("heart-shake");

  void heartContainer.offsetWidth;

  heartContainer.classList.add("heart-shake");
  let html = "";

  for (let i = 0; i < lives; i++) {
    html += "❤️ ";
  }

  for (let i = lives; i < 3; i++) {
    html += "🤍 ";
  }

  document.getElementById("heart-container").innerHTML = html;
}
function gameOver() {
  document.getElementById("gameOverModal").classList.remove("hidden");

  document.getElementById("continueBtn").onclick = function () {
    document.getElementById("gameOverModal").classList.add("hidden");

    lives = 1;

    updateHeart();
  };
}
function finishGame() {
  switchToRecapMusic();
  showRecap();
}
function switchToRecapMusic() {

    musicPlayer.pause();

    musicPlayer.src = "music/recap.mp3";

    musicPlayer.load();

    musicPlayer.currentTime = 0;

    musicPlayer.loop = true;

    musicPlayer.volume = 0.4;

    musicPlayer.play().catch(console.error);

}
function stopMusic(){

    musicPlayer.pause();

    musicPlayer.currentTime = 0;

}

function showModal(title, message, callback) {
  document.getElementById("modalTitle").innerText = title;

  document.getElementById("modalMessage").innerText = message;

  document.getElementById("resultModal").classList.remove("hidden");

  document.getElementById("modalBtn").onclick = function () {
    document.getElementById("resultModal").classList.add("hidden");

    if (callback) {
      callback();
    }
  };
}
function showContinueButton() {
  document.getElementById("memoryBtn").classList.add("show");
}
function showMemory() {
  const memoryCard = document.querySelector(".memory-card");

  memoryCard.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const memory = questions[currentQuestion].memory;

  document.getElementById("memoryTitle").innerText = memory.title;

  const image = document.getElementById("memoryImage");

  if (memory.image) {
    image.src = memory.image;

    image.style.display = "block";
  } else {
    image.style.display = "none";
  }

  document.getElementById("memoryBtn").classList.remove("show");
  typeWriter(document.getElementById("memoryStory"), memory.story, 50, () =>
    showContinueButton(),
  );

  document.getElementById("memoryModal").classList.remove("hidden");
}

function playConfetti() {
  confetti({
    particleCount: 70,

    spread: 70,

    origin: {
      x: 0.2,
      y: 0.7,
    },

    colors: ["#ff5c99", "#ff85b5", "#ffd1e6", "#ffffff"],
  });

  confetti({
    particleCount: 70,

    spread: 70,

    origin: {
      x: 0.8,
      y: 0.7,
    },
  });
}

updateHeart();
document.getElementById("startJourneyBtn").onclick = function () {
  const modal = document.getElementById("welcomeModal");

  modal.classList.add("fade-out");

  setTimeout(() => {
    modal.classList.add("hidden");

    document.querySelector(".game-card").classList.remove("hidden");

    loadQuestion();

    startGame();
  }, 500);
};

document.getElementById("submitBtn").addEventListener("click", checkAnswer);
document.getElementById("memoryBtn").onclick = function () {
  document.getElementById("memoryModal").classList.add("hidden");

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    finishGame();

    return;
  }

  fadeInGameCard();

  loadQuestion();
};

// Recap part
const recapImages = [
  "memories_img/1.JPG",
  "memories_img/2.JPG",
  "memories_img/3.JPG",
  "memories_img/4.JPG",
  "memories_img/5.JPG",
  "memories_img/6.JPG",
  "memories_img/7.JPG",
  "memories_img/8.jpg",
  "memories_img/9.JPG",
  "memories_img/10.JPG",
  "memories_img/11.JPG",
  "memories_img/12.JPG",
  "memories_img/13.JPG",
  "memories_img/14.jpg",
  "memories_img/15.jpg",
  "memories_img/16.JPG",
  "memories_img/17.JPG",
  "memories_img/18.jpg",
  "memories_img/19.JPG",
  "memories_img/21.JPG",
  "memories_img/22.jpg",
  "memories_img/23.jpg",
  "memories_img/24.JPG",
  "memories_img/25.JPG",
  "memories_img/26.JPEG",
  "memories_img/27.JPG",
  "memories_img/28.JPG",
  "memories_img/29.JPG",
  "memories_img/30.JPG",
  "memories_img/31.jpg",
  "memories_img/32.JPG",
  "memories_img/33.JPG",
  "memories_img/34.JPG",
  "memories_img/35.JPG",
  "memories_img/36.JPG",
  "memories_img/37.JPG",
  "memories_img/38.JPG",
  "memories_img/39.JPG",
  "memories_img/40.JPG",
  "memories_img/41.JPG",
  "memories_img/42.JPG",
  "memories_img/43.jpg",
  "memories_img/44.JPG",
  "memories_img/45.JPG",
  "memories_img/46.jpg",
  "memories_img/47.jpg",
  "memories_img/48.jpg",
  "memories_img/49.jpg",
  "memories_img/50.jpg",
  "memories_img/51.jpg",
  "memories_img/53.JPG",
  "memories_img/54.JPEG",
  "memories_img/55.JPG",
  "memories_img/56.JPG",
  "memories_img/57.jpg",
  "memories_img/58.JPG",
  "memories_img/59.JPG",
  "memories_img/60.jpg",
  "memories_img/61.jpg",
  "memories_img/62.jpg",
  "memories_img/64.jpg",
  "memories_img/65.jpg",
  "memories_img/66.JPG",
  "memories_img/67.JPG",
  "memories_img/68.JPG",
  "memories_img/69.JPG",
  "memories_img/70.JPG",
  "memories_img/71.JPG",
  "memories_img/72.PNG",
  "memories_img/73.JPG",
  "memories_img/74.JPG",
  "memories_img/75.jpg",
  "memories_img/76.JPG",
  "memories_img/77.JPG",
  "memories_img/78.JPG",
  "memories_img/79.JPG",
  "memories_img/80.JPG",
  "memories_img/81.JPG",
  "memories_img/82.JPG",
  "memories_img/83.JPG",
  "memories_img/84.jpg",
  "memories_img/85.PNG",
  "memories_img/86.JPG",
  "memories_img/87.JPEG",
  "memories_img/88.JPG",
  "memories_img/89.jpg",
  "memories_img/90.JPG",
  "memories_img/91.JPG",
  "memories_img/92.JPG",
  "memories_img/93.JPG",
  "memories_img/94.JPG",
  "memories_img/95.JPG",
  "memories_img/96.JPG",
  "memories_img/97.jpg",
  "memories_img/98.JPG",
  "memories_img/99.JPG",
  "memories_img/100.jpg",
  "memories_img/101.JPG",
  "memories_img/102.jpg",
  "memories_img/103.JPG",
  "memories_img/104.JPG",
  "memories_img/105.JPG",
  "memories_img/106.jpg",
  "memories_img/107.JPG",
  "memories_img/108.PNG",
  "memories_img/109.JPG",
  "memories_img/110.JPG",
  "memories_img/111.JPG",
  "memories_img/112.JPG",
  "memories_img/113.JPG",
  "memories_img/114.JPEG",
  "memories_img/115.JPG",
  "memories_img/116.JPG",
  "memories_img/117.JPG",
  "memories_img/118.JPG",
  "memories_img/119.JPG",
  "memories_img/120.JPG",
  "memories_img/121.JPG",
  "memories_img/122.JPG",
  "memories_img/123.JPG",
  "memories_img/124.jpg",
  "memories_img/125.JPG",
  "memories_img/126.JPG",
  "memories_img/127.JPG",
  "memories_img/128.jpg",
  "memories_img/129.JPG",
  "memories_img/130.JPG",
  "memories_img/131.JPG",
  "memories_img/132.JPG",
  "memories_img/133.jpg",
  "memories_img/134.JPG",
  "memories_img/135.JPG",
  "memories_img/136.JPG",
  "memories_img/137.JPG",
  "memories_img/138.JPG",
  "memories_img/139.JPG",
  "memories_img/140.JPG",
  "memories_img/141.JPG",
  "memories_img/142.JPG",
  "memories_img/143.JPG",
  "memories_img/144.JPG",
  "memories_img/145.JPG",
  "memories_img/146.JPG",
  "memories_img/147.JPG",
  "memories_img/148.JPG",
  "memories_img/149.JPG",
  "memories_img/150.JPG",
  "memories_img/151.JPG",
  "memories_img/152.JPG",
  "memories_img/153.JPG",
  "memories_img/154.JPG",
  "memories_img/155.JPG",
  "memories_img/156.JPG",
  "memories_img/157.JPG",
  "memories_img/158.JPG",
  "memories_img/159.JPG",
  "memories_img/160.JPG",
  "memories_img/161.JPG",
  "memories_img/162.JPG",
  "memories_img/163.jpg",
  "memories_img/164.JPG",
  "memories_img/165.JPG",
  "memories_img/166.JPG",
  "memories_img/167.jpg",
  "memories_img/168.JPG",
];

let recapIndex = 0;
let recapInterval;
function changeRecapImage(){

    const image = document.getElementById("recapImage");

    const preload = new Image();

    preload.onload = function(){

        image.classList.add("fade");

        setTimeout(()=>{

            image.src = preload.src;

            image.classList.remove("fade");

        },200);

    };

    preload.src = recapImages[recapIndex];

}
function showRecap() {
  clearInterval(recapInterval);

  recapIndex = 0;

  document.getElementById("recapModal").classList.remove("hidden");

  changeRecapImage();

  recapInterval = setInterval(() => {
    recapIndex++;

    if (recapIndex >= recapImages.length) {
      clearInterval(recapInterval);

      setTimeout(() => {
        document.getElementById("recapModal").classList.add("hidden");

        showLetter();
      }, 3000);

      return;
    }

    changeRecapImage();
  }, 800);
}
const letter = `
Em à,
Thời gian trôi nhanh thật, 2 năm quen em và 1 năm yêu em,
Thời gian qua chúng ta trải qua nhiều chuyện, vui cũng có mà buồn cũng có, đặc biệt là cũng có nhiều lúc cãi vã giận dỗi.
Thế nhưng mà dù trải qua chuyện gì thì chúng mình cũng học cách hỏi han, tha thứ cho nhau để rồi thấu hiểu nhau hơn. 
Sau một năm, mình cũng trải qua được rất nhiều kỉ niệm, đây là một món quà nhỏ anh làm để chúng mình cùng nhìn lại những kỷ niệm ấy.
Từng câu hỏi, từng bức ảnh, từng kỉ niệm...
đều là những mảnh ghép của cuộc tình chúng mình trong một năm vừa qua
Có những chuyện em nhớ ngay,
Có những chuyện em phải suy nghĩ một lúc mới nhớ ra được,
Và có những thứ nhỏ nhặt em chưa để ý,
Nhưng mà điều đó chẳng quan trọng.

Quan trọng là ....
chúng mình đã trải qua chúng cùng nhau sau tất cả.

Một năm trước,
Anh không nghĩ sẽ có một ngày bình thường thành một ngày đặc biệt như vậy
Cảm ơn em vì đã xuất hiện,
Cảm ơn em vì đã luôn ở bên anh,
lắng nghe anh,
động viên anh,
và cùng anh trải qua những ngày vui ngày buồn và những lúc mệt mỏi.

Có những mình giận nhau,
những lúc mình hiểu lầm,
và cũng có lúc hai đứa cùng cứng đầu cái tôi cao.
Nhưng rồi...
mình vẫn chọn ở lại cùng nhau giải quyết vấn đề và làm hòa với nhau

Cảm ơn em đã cùng anh vẽ lên những kỉ niệm có đẹp và cũng có buồn suốt một năm qua
Mỗi bức ảnh vừa rồi
không chỉ là một tấm hình
mà còn là một ngày mình cùng ở bên nhau, cười nói rất nhiều cùng nhau, 
là một món quà,
là một cái nắm tay,
là một cái ôm,
là một cái thơm má,
thậm chí là một nụ hôn,
hay đơn giản chỉ là...
một khoảnh khắc có em ở bên cạnh

Anh không biết tương lai sẽ có những gì đang chờ phía trước 
Nhưng mà anh tin rằng...
Anh sẽ luôn đồng hành cùng em để vẽ nên thật nhiều kỷ niệm trong cuốn sách về cuộc tình chúng mình.
Để rồi một ngày nào đó,
website này không chỉ có hơn 160 ảnh recap
Mà sẽ là hàng vài trăm,
vài nghìn,
hay thậm chí là cả cuộc đời đầy kí ức đẹp.
(Mặc dù mới gần 200 ảnh mà anh đã hơi mỏi tay nha bé 🥰)

Nếu sau này em có vào lại website này
Anh hy vọng em sẽ mỉm cười 
và nhớ rằng ...

Đã có một chàng trai (Chòn em)
thức đêm và dành nhiều thời gian 
để viết từng dòng code,
chỉnh từng hiệu ứng,
chọn từng bài nhạc,
chỉ mong em có thể vui hơn, bất ngờ hơn một chút khi xem nó

Bởi vì...
Em là món quà tuyệt nhất
mà anh đã có được trong năm vừa rồi,
anh hứa sẽ giữ gìn và chăm sóc món quà này cẩn thận.

Happy One Year, em bé nhé ❤️
Cảm ơn em vì đã đến.
Cảm ơn em vì đã ở lại.
Và cảm ơn em vì đã cùng anh viết nên chương đầu tiên
của câu chuyện tình yêu giành riêng cho "chúng mình".

Anh yêu em rất nhiều.
Bã chã của anh :)))
❤️
`;

function showLetter() {
  document.getElementById("letterModal").classList.remove("hidden");

  typeWriter(document.getElementById("letterContent"), letter, 50, () => {
    document.getElementById("finishBtn").classList.add("show");
  });
}

document.getElementById("finishBtn").onclick = function () {
  confetti({
    particleCount: 250,

    spread: 120,
  });
  showEnding();
};
function showEnding() {
  document.getElementById("letterModal").classList.add("hidden");

  document.getElementById("endingScreen").classList.remove("hidden");
}
