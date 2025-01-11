let config = {
    type: 'slide',
    perPage: 2,
    perMove: 1,
    arrows: false,
    pasination: true,
    gap: 30,
    easeing: 'ease',
    breakpoints: {
        992: {
            perPage: 1,
        },
    }
};

new Splide('._features03_podcast_slider', config).mount();

let config2 = {
    type: 'slide',
    perPage: 1,
    arrows: false,
    pasination: true,
    easeing: 'ease',
};

new Splide('._features03_podcast_slider01', config2).mount();

let config1 = {
    type: 'slide',
    perPage: 1,
    arrows: false,
    pasination: true,
    easeing: 'ease',
};

new Splide('._testimonial_podcast_slider', config1).mount();

// login button
let login_btn = document.querySelector("._header_podcast_navbar_r8_signup");
let login_signup_box = document.querySelector("#login_signup_box");
let signuplink = document.querySelector("._signUp_link_tag");
let loginlink = document.querySelector("._login_link_tag");
let closeBtn = document.querySelector("._close_btn");

login_btn.addEventListener("click", displayLoginSignupBox);
signuplink.addEventListener("click", displaySignup);
loginlink.addEventListener("click", displayLogin);
closeBtn.addEventListener("click", removeBox)

function displayLoginSignupBox() {
    login_signup_box.classList.add("displayLoginSignup");
}
function displaySignup() {
    login_signup_box.classList.add("active");
}
function displayLogin() {
    login_signup_box.classList.remove("active");
}
function removeBox() {
    login_signup_box.classList.remove("displayLoginSignup")
}

// blog page 
// author name sorting

let authorName = document.querySelector("#author");






