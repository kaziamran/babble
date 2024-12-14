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
let login_section = document.querySelector("#login_div");
login_btn.addEventListener("click", displayLoginBtn);

function displayLoginBtn(){
    login_section.classList.add("displayLogin");
}







