// Card interface
class Card {
    constructor(node, position) {
        this.node = node;
        this.position = position;
    }

    nextPosition() {
        let nextPosition = 1;

        if (this.position != 4) {
            nextPosition = this.position + 1;
        }

        return nextPosition;
    }

    prevPosition() {
        let prevPosition = 4;

        if (this.position != 1) {
            prevPosition = this.position - 1;
        }

        return prevPosition;
    }

    moveNext() {
        this.node.classList.replace(
            `position${this.position}`,
            `position${this.nextPosition()}`
        );

        this.position = this.nextPosition();
    }

    movePrev() {
        this.node.classList.replace(
            `position${this.position}`,
            `position${this.prevPosition()}`
        );

        this.position = this.prevPosition();
    }
}

// Initializations
const [prev, next] = document.querySelectorAll(".i");
const gallery = document.querySelector(".gallery");
const cards = [];
let start;

// Instantiate cards and populate cards array
document.querySelectorAll(".card").forEach((e, pos = 0) => {
    pos += 1;
    cards.push(new Card(e, pos));
});

// Handle click events
next.addEventListener("click", () => {
    cards.forEach((c) => {
        c.moveNext();
    });
});

prev.addEventListener("click", () => {
    cards.forEach((c) => {
        c.movePrev();
    });
});

// Handle slide events
gallery.addEventListener("touchstart", (s) => {
    start = s.targetTouches[0].screenX;
});

gallery.addEventListener("touchend", (e) => {
    let end = e.changedTouches[0].screenX;
    const range = Math.abs(start - end);

    if (range > 30) {
        if (start < end) {
            cards.forEach((c) => {
                c.moveNext();
            });
        }

        if (start > end) {
            cards.forEach((c) => {
                c.movePrev();
            });
        }
    }
});

//floating
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, // -1 무한반복
        yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끊김)
        ease: Power1.easeInOut, // 타이밍함수
        delay: random(0, delay) // 지연시간
    })
}
floatingObject('.intro_star1', 1, 15)
floatingObject('.intro_star2', .5, 15)
floatingObject('.intro_star3', 1.5, 20)

//reveal section
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target); //no more observing after postions read
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
    rootMargin: '200px',
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

//ani_left

const allLeft = document.querySelectorAll('.ani_left');

const revealSection1 = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('ani--hidden');
    observer.unobserve(entry.target); //no more observing after postions read
};

const sectionObserver1 = new IntersectionObserver(revealSection1, {
    root: null,
    threshold: 0.15,
    rootMargin: '200px',
});

allLeft.forEach(function (left) {
    sectionObserver1.observe(left);
    left.classList.add('ani--hidden');
});

// ani_right
const allRight = document.querySelectorAll('.ani-right');

const revealSection2 = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('anir--hidden');
    observer.unobserve(entry.target); //no more observing after postions read
};

const sectionObserver2 = new IntersectionObserver(revealSection2, {
    root: null,
    threshold: 0.15,
    rootMargin: '200px',
});

allRight.forEach(function (right) {
    sectionObserver2.observe(right);
    right.classList.add('anir--hidden');
});

