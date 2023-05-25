function setupSlider(section) {
    const wrapper = section.querySelector('.section-wrapper');
    const slider = wrapper.querySelector('.slider');
    const slides = slider.querySelector('.slides');
    const prevBtn = wrapper.querySelector('.prev');
    const nextBtn = wrapper.querySelector('.next');
    const dots = slider.querySelector('.dots');
    const dotArray = dots.querySelectorAll('.dot');
    const isTouchDevice = 'ontouchstart' in document.documentElement;
    let slideIndex = 0;

    function showSlide(n) {
        slideIndex = (n + slides.children.length) % slides.children.length;
        slides.style.transform = `translateX(${-100 * slideIndex}%)`;
        setActiveDot();
    }

    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    function setActiveDot() {
        dotArray.forEach((dot, i) => {
            dot.classList.toggle('active', i === slideIndex);
        });
    }

    function dotClickHandler(e) {
        const dotIndex = Array.from(dotArray).indexOf(e.target);
        showSlide(dotIndex);
    }

    dotArray.forEach((dot) => {
        dot.addEventListener('click', dotClickHandler);
    });

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    if (isTouchDevice) {
        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', (event) => {
            touchStartX = event.changedTouches[0].clientX;
        });

        slider.addEventListener('touchend', (event) => {
            touchEndX = event.changedTouches[0].clientX;
            if (touchEndX < touchStartX) {
                nextSlide();
            } else if (touchEndX > touchStartX) {
                prevSlide();
            }
        });
    }

    setActiveDot();
}

function onSubmitButtonClicked() {
    const emailInput = document.querySelector('#email-input');
    const email = emailInput.value;

    const xhr = new XMLHttpRequest();
    xhr.open(
        'POST',
        'https://script.google.com/macros/s/AKfycbwF9-_-zexntaZwTAFil1PRYOo-PQ3Wdo7jUDo8PbzYRGhelONJsE7r2ZiDkQx55mUEAA/exec',
        true
    );
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // pass;
        }
    };
    xhr.send(`email=${encodeURIComponent(email)}`);

    const emailInputWrap = document.getElementsByClassName('text-box email')[0];
    emailInputWrap.innerHTML = `
      <div id="inner-html-thanks">
        Thank You
      </div>
    `;
    emailInputWrap.style.display = 'flex';
    emailInputWrap.style.justifyContent = 'center';
    emailInputWrap.style.alignItems = 'center';
    emailInputWrap.style.position = 'relative';
    emailInputWrap.style.top = '6%';


    const innerHtmlThanks = document.getElementById('inner-html-thanks');
    innerHtmlThanks.style.fontFamily = 'MyFont';
    innerHtmlThanks.style.fontSize = '4vw';

    setTimeout(() => {
        const innerHtmlThanks = document.getElementById('inner-html-thanks');
        innerHtmlThanks.classList.remove('fade-in');
    }, 100);
}



window.addEventListener('load', () => {
    const sectionTwo = document.querySelector('.section-two');
    setupSlider(sectionTwo);

    const sectionThree = document.querySelector('.section-three');
    setupSlider(sectionThree);

    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', onSubmitButtonClicked);

    const button = document.getElementsByClassName("button-one")[0];
    const section = document.getElementsByClassName("section-five")[0];

    button.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth" });
    });
});

