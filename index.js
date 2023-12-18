//Progress
let scrollValue = function() {
    let Progress = document.getElementById("progress")
    Progress.addEventListener("click", function() {
        document.documentElement.scrollTop = 0;
    })
}
window.onscroll = scrollValue
window.onload = scrollValue
//countdown
const d = document.getElementById("days")
const h = document.getElementById("hours")
const m = document.getElementById("minutes")
const s = document.getElementById("seconds")

function countdown() {
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`january 1 ${currentYear+1} 00:00:00`);
    const currentDate = new Date()
    const diff = newYear - currentDate

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    d.innerHTML = days < 10 ? "0" + days : days;
    h.innerHTML = hours < 10 ? "0" + hours : hours;
    m.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    s.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}
setInterval(countdown, 1000)
//stars
const star = document.querySelectorAll(".star")
const current = document.getElementById("current")
star.forEach(function(stars, index) {
    stars.addEventListener('click', function() {
        const rating = index + 1
        const currentrating = `(${rating}/5)`
        current.textContent = currentrating
        star.forEach(function(stars, i) {
            if (rating >= i + 1) {
                stars.innerHTML = "&#9733"
            } else {
                stars.innerHTML = "&#9734"
            }
        })
    })
})
//stars-2
const star2 = document.querySelectorAll(".star-2")
const current2 = document.getElementById("current-2")
star2.forEach(function(stars, index) {
    stars.addEventListener('click', function() {
        const rating = index + 1
        const currentrating = `(${rating}/5)`
        current2.textContent = currentrating
        star2.forEach(function(stars, i) {
            if (rating >= i + 1) {
                stars.innerHTML = "&#9733"
            } else {
                stars.innerHTML = "&#9734"
            }
        })
    })
})
//stars-3
const star3 = document.querySelectorAll(".star-3")
const current3 = document.getElementById("current-3")
star3.forEach(function(stars, index) {
    stars.addEventListener('click', function() {
        const rating = index + 1
        const currentrating = `(${rating}/5)`
        current3.textContent = currentrating
        star3.forEach(function(stars, i) {
            if (rating >= i + 1) {
                stars.innerHTML = "&#9733"
            } else {
                stars.innerHTML = "&#9734"
            }
        })
    })
})
//stars-4
const star4 = document.querySelectorAll(".star-4")
const current4 = document.getElementById("current-4")
star4.forEach(function(stars, index) {
    stars.addEventListener('click', function() {
        const rating = index + 1
        const currentrating = `(${rating}/5)`
        current4.textContent = currentrating
        star4.forEach(function(stars, i) {
            if (rating >= i + 1) {
                stars.innerHTML = "&#9733"
            } else {
                stars.innerHTML = "&#9734"
            }
        })
    })
})
//email
function email() {
    const email = document.getElementById("email")
    const show = document.getElementById("res")
    if (email.value === "") {
        return false
    } else {
        show.textContent = "Thank you for Subscribing us ❤"
    }
    email.value = ""
}
