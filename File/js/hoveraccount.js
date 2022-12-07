let wraper_1 = document.querySelectorAll('.wraper_1')
let modal_account = document.querySelectorAll('.modal_account')
let infor__story = document.querySelector('.infor__story')
let user__title = document.querySelector('.user__title')
let user__name = document.querySelector('.user__name')
let id__user = document.querySelector('.id__user')
let add = document.querySelector('.add')
let countt = document.querySelector('.count')
let despription__pro = document.querySelector('#despription__pro')
let img__profile = document.querySelectorAll('.img__profile')
let profile__video = document.querySelectorAll('.profile__video')
let seen = document.querySelector('.seen')
let liked = document.querySelector('.liked')
let light = document.querySelector('.light')
let close__model = document.querySelector('.close__model')
let modal = document.querySelector('.modal')
let name__user = document.querySelector('.name__user')
let change__profile = document.querySelector('.change__profile')
let cancel = document.querySelector('.cancel')
let share = document.querySelector('.fa-share')
let showmessage = document.querySelector('.showmessage')


//account L hover
for (let i = 0; i < wraper_1.length; i++) {
    wraper_1[i].addEventListener('mouseover', () => {
        modal_account[i].style.display = 'block'
    })
    wraper_1[i].addEventListener('mouseout', () => {
        modal_account[i].style.display = 'none'
    })
}
//avata show
if(img__profile[0]) {
    img__profile[0].onclick = () => {
        img__profile[0].classList.toggle('scale_img')
    }
    
//seen and liked
    seen.addEventListener('click', () => {
        light.style.transform = 'translateX(0px)'
    })
    seen.addEventListener('mouseenter', () => {
        light.style.transform = 'translateX(0px)'
    })
    liked.addEventListener('mouseenter', () => {
        light.style.transform = 'translateX(200px)'
    })
    liked.addEventListener('click', () => {
        light.style.transform = 'translateX(200px)'
    })
    
}

for (let i = 0; i < profile__video.length; i++) {
    profile__video[i].addEventListener('mouseover', function() {
        profile__video[i].play()
    })
    profile__video[i].addEventListener('mouseout', function() {
        profile__video[i].pause();
    })
}

//box
const showBox = () => {
    modal.style.display = 'none'
}
if(close__model){
    close__model.addEventListener('click', showBox)
    cancel.addEventListener('click', showBox)
    change__profile.addEventListener('click', () => {
        modal.style.display = 'block'
    })
}

//handle profile
const active = () => {
    add.style.backgroundColor = 'red'
    add.style.color = 'white'
}

if(name__user){
    id__user.addEventListener('click', active)
    name__user.addEventListener('click', active)
    despription__pro.addEventListener('click', active)
}

if(despription__pro){
    countt.innerText = despription__pro.value.length + " / 80"
    despription__pro.addEventListener('keydown', () => {
        countt.innerText = despription__pro.value.length + " / 80"
    })
}

const add_Infor = () => {
    if (id__user.value.length < 3 || id__user.value.length > 10 || name__user.value.length < 3) {
        alert("Fill your information")
        return false
    } else {
        alert("Confirm successed")
        user__title.innerText = id__user.value
        user__name.innerText = name__user.value
        infor__story.innerText = despription__pro.value
    }
    id__user.value = ''
    name__user.value = ''
    despription__pro.value = ''
    id__user.focus()
}
if(add){
    add.addEventListener('click', add_Infor)
}
if(showmessage){
    share.addEventListener('click', () => {
        let link = location.href
        var input = document.createElement("input");
        document.body.appendChild(input);
        input.value = link;
        input.select();
        input.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(input);
        showmessage.style.display = 'block'
        setTimeout(() => {
            showmessage.style.display = 'none'
        }, 1000)
    })
}