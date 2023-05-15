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

