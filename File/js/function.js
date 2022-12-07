var heart = document.getElementsByClassName('fa-heart')
var body_content_R = document.querySelector('.body_content_R')
var btn = document.getElementsByClassName('btn_follow')
var seemore = document.getElementsByClassName('seemore')
var thugon = document.getElementsByClassName('thugon')
var seemore_content = document.getElementsByClassName('seemore_content')
var wraper = document.getElementsByClassName('wraper')
var video = document.getElementsByClassName('video')
var R_wrap_content_center = document.getElementsByClassName('R_wrap_content_center')
var mode = document.getElementById('mode')
var hi = document.getElementById('hi')
var header = document.getElementsByClassName('header')
var changebgi = document.getElementsByTagName('input')
var upload = document.getElementsByClassName('upload')
var icon_check = document.getElementsByClassName('icon_check')
var modal_box = document.getElementsByClassName('modal_box')

//search item
function search() {
    var input__vid = document.getElementsByClassName('input__vid')[0]
    var author_find = document.getElementsByClassName('author_find')
    var R_wrap_content_center = document.getElementsByClassName('R_wrap_content_center')

    var valIp = input__vid.value
    var len = author_find.length
    for (let i = 0; i < len; i++) {
        if (author_find[i].textContent.includes(valIp)) {
            R_wrap_content_center[i].style.visibility = 'visible'
            R_wrap_content_center[i].style.borderBottom = '1px solid rgb(42, 42, 42)';
            R_wrap_content_center[i].style.height = '100%';
        } else {
            R_wrap_content_center[i].style.visibility = 'hidden'
            R_wrap_content_center[i].style.height = '0px';
            R_wrap_content_center[i].style.border = 'none';
        }
    }
}
// button
var count = 1

function follow(e) {
    count = count + 1
    if (count % 2 == 0) {
        e.innerText = 'Following'
        e.style.border = '1px solid snow'
        e.style.color = 'snow'
    } else {
        e.innerText = 'Follow'
        e.style.border = '1px solid red'
        e.style.color = 'red'
    }
}
//more author
for (let i = 0; i < seemore.length; i++) {

    seemore[i].onclick = () => {
        seemore_content[i].style.display = 'block'
        seemore[i].style.display = 'none'
    }
    thugon[i].onclick = () => {
        seemore_content[i].style.display = 'none'
        seemore[i].style.display = 'block'
    }
}
//auto run/pause video
for (let i = 0; i < R_wrap_content_center.length; i++) {
    R_wrap_content_center[i].addEventListener('mouseover', function() {
        video[i].play()
    })
    R_wrap_content_center[i].addEventListener('mouseout', function() {
        video[i].pause()
    })
}
//drak mode
mode.addEventListener('click', function() {
        hi.classList.toggle('change')
        document.body.classList.toggle('bg_color')
        header[0].classList.toggle('bg_color')
        changebgi[0].classList.toggle('baoerabg')
        upload[0].classList.toggle('baoerabg')
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.toggle('folo')
        }
        for (let i = 0; i < icon_check.length; i++) {
            icon_check[i].classList.toggle('cloudy')
        }
    })
    //throw heart
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('dblclick', function() {
        heart[i].classList.add('color_heart')
    })
    heart[i].addEventListener('click', function() {
        heart[i].classList.remove('color_heart')
    })
}
//show nofications
function showNotification() {
    modal_box[0].classList.toggle('show_box')
}