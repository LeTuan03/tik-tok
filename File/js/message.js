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
var model = document.getElementsByClassName('model')[0]
var save = document.getElementsByClassName('save')[0]
var after = document.getElementsByClassName('after')
var chat_input_text = document.getElementsByClassName('chat_input_text')
var room_chat = document.getElementsByClassName('room_chat')[0]
    // modal box 
var getTrue = null
after[0].addEventListener('click', () => {
    after[0].style.backgroundColor = 'red'
    after[1].style.backgroundColor = 'transparent'
    save.classList.add('active_btn')
    getTrue += 1
    getTrue % 1 == 0 ? save.onclick = () => {
            localStorage.setItem("user", "Friends")
            alert('Confirms successed')
            model.classList.toggle('show')
        } :
        ''
})
after[1].addEventListener('click', () => {
    after[1].style.backgroundColor = 'red'
    after[0].style.backgroundColor = 'transparent'
    save.classList.add('active_btn')
    getTrue += 1
    getTrue % 1 == 0 ? save.onclick = () => {
            localStorage.setItem("user", "Nobody")
            alert('Confirms successed')
            model.classList.toggle('show')
        } :
        ''
})
const toggleModle = () => {
    model.classList.toggle('show')
}

function showNotification() {
    modal_box[0].classList.toggle('show_box')
}
// bg color 
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

//chat
const handleChat = () => {
    const date = new Date()
    var inputValue = chat_input_text[0].value
    if (inputValue != "") {
        var newLi = document.createElement('div')
        newLi.setAttribute('class', 'list_chated')
        newLi.innerHTML = `
        <div class="message">${inputValue}</div>
        <div class="times">${date.toLocaleTimeString()}</div>
        `
        room_chat.appendChild(newLi)
        room_chat.clientHeight = room_chat.clientHeight + newLi.clientHeight
        room_chat.scrollBy(0, room_chat.clientHeight + newLi.clientHeight * 2)
        chat_input_text[0].value = ''
        chat_input_text[0].focus()
    } else {
        return false
    }
}