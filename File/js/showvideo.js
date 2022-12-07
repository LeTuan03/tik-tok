var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const heightWin = window.innerHeight

$('.video video').style.height = heightWin - 7 + 'px'
$('.get_link').value = location.href

function getLink() {
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.value = $('.get_link').value;
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(input);

}
// button
var count = 1

function follow(e) {
    count = count + 1
    if (count % 2 == 0) {
        e.innerText = 'Following'
        e.style.padding = '10px 20px'
    } else {
        e.innerText = 'Follow'
        e.style.padding = '10px 30px'
    }
}
var currentHeart = $$('.like p').length
var lengthH = $$('.fa-heart').length
var check = true


//handle input
const hearth = (e) => {
    e.classList.toggle('heart')
    if (check) {
        e.nextElementSibling.innerText = JSON.parse(e.nextElementSibling.innerText) + 1
        console.log("Hoe", check)
        check = false
    } else {
        e.nextElementSibling.innerText = JSON.parse(e.nextElementSibling.innerText) - 1
        console.log("Hoe4", check)
        check = true
    }
}
var lengthH = $$('.more_des').length
var lengthShow = $$('.start_show').length
const handleShow = (e) => {
    e.nextElementSibling.style.display = 'block'
    e.style.display = 'none'
}
var checkr = document.getElementsByClassName('countthis')
for (let i = 0; i < checkr.length; i++) {
    checkr[i].innerText = checkr[i].parentElement.nextElementSibling.children.length
}
var scroll = 300
const getVl = () => {
    let parentEl = $('.detail__dialog')
    let inputVl = $('.commentting').value
    let newEl = document.createElement('div')
    let date = new Date()
    newEl.innerHTML = `
        <div class="dialog_comment">
        <div class="user_comment" style="padding-left: 3px;">
            <div class="avata">
                <img style="width: 48px; height: 48px; border-radius: 50%; margin-right: 15px;" src="./image/avata.jpeg" alt="">
            </div>
            <div class="desp" style="margin-top: 7px;">
                <div class="user">Tuanmc</div>
                <div class="comment">${inputVl}</div>
                <div class="time">
                    <div class="up_time">${date.toLocaleTimeString()}</div>
                    <div onclick=focu() class="reply">Reply</div>
                </div>
            </div>
        </div>
        <div class="like" style="padding-right: 30px;"><i onclick=hearth(this) class=" fa-solid icon_check fa-heart"></i>
            <p class="heart_times">23</p>
        </div>
    </div>
    `
    parentEl.appendChild(newEl)
    scroll += 100
    parentEl.scrollTo(0, scroll)
    $('.commentting').value = ''
    $('.commentting').focus()
}
const focu = () => {
    $('.commentting').focus()
}
var el = document.getElementsByClassName('commentting')[0]
el.addEventListener('focus', () => {
    $('.push').style.color = 'red'
})
el.addEventListener('blur', () => {
        $('.push').style.color = ' rgb(202, 200, 200)'
    })
    // coppy 
$('.btn_copy').addEventListener('click', () => {
    $('.copied').style.display = 'block'
    setTimeout(() => {
        $('.copied').style.display = 'none'
    }, 1000)
})