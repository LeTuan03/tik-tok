var fetchAPI = [{
        indext: 1,
        srcImg: './File/image/avata.jpeg',
        author_find: 'Tuanmc',
        more: 'tuan.me',
        inforContent: 'Nghe loi may ban review',
        hagTag: '#theanh28 #nncteam #reviewanngon',
        srcVideo: "./File/video/download.mp4",
        heartTime: 200.3,
        comment: 1000,
        share: 1914,
    },
    {
        indext: 2,
        srcImg: './File/image/avata.jpeg',
        author_find: 'Nhoc Toan',
        more: 'tuan.me',
        inforContent: 'Nghe loi may ban review',
        hagTag: '#theanh28 #nncteam #reviewanngon',
        srcVideo: "./File/video/download.mp4",
        heartTime: 200.3,
        comment: 1000,
        share: 1914,
    },
    {
        indext: 3,
        srcImg: './File/image/avata.jpeg',
        author_find: 'Tuanmc',
        more: 'tuan.me',
        inforContent: 'Nghe loi may ban review',
        hagTag: '#theanh28 #nncteam #reviewanngon',
        srcVideo: "./File/video/download.mp4",
        heartTime: 200.3,
        comment: 1000,
        share: 1914,
    },
    {
        indext: 4,
        srcImg: './File/image/avata.jpeg',
        author_find: 'Tuanmc',
        more: 'tuan.me',
        inforContent: 'Nghe loi may ban review',
        hagTag: '#theanh28 #nncteam #reviewanngon',
        srcVideo: "./File/video/download.mp4",
        heartTime: 200.3,
        comment: 1000,
        share: 1914,
    },
    {
        indext: 5,
        srcImg: './File/image/avata.jpeg',
        author_find: 'Tuanmc',
        more: 'tuan.me',
        inforContent: 'Nghe loi may ban review',
        hagTag: '#theanh28 #nncteam #reviewanngon',
        srcVideo: "./File/video/download.mp4",
        heartTime: 200.3,
        comment: 1000,
        share: 1914,
    },
    {
        indext: 6,
        srcImg: './File/image/avata.jpeg',
        author_find: 'Tuanmc',
        more: 'tuan.me',
        inforContent: 'Nghe loi may ban review',
        hagTag: '#theanh28 #nncteam #reviewanngon',
        srcVideo: "./File/video/download.mp4",
        heartTime: 200.3,
        comment: 1000,
        share: 1914,
    },

]
if(document.getElementsByClassName('R_wrap_content')[0]){
    fetchAPI.map(e => {
        var R_wrap_content = document.getElementsByClassName('R_wrap_content')[0]
        var newDocument = document.createElement('div')
        var html = `<div class="R_wrap_content_center">
                    <div class="wraper">
                        <div class="R_content_avata">
                            <img class="R_avata" src=${e.srcImg} alt="">
                        </div>
                        <div class="R_content">
                            <div class="R_main">
                                <div class="body_R_title">
                                    <div class="vid_main">
                                        <div class="infor_content">
                                            <div class="infor_content_author"><b><a href="#" class="author_find">${e.author_find}</a></b> 
                                                <span><i class="fa-regular fa-circle-check"></i><small>${e.more}</small></span>
                                            </div>
                                            <div class="infor_content_desp">${e.inforContent}</div>
                                            <span class="hagtag">${e.hagTag}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="body_R_video">
                                <div class="R_audio">
                                    <video class="video"src=${e.srcVideo} loop controls></video>
                                    <div class="R_react">
                                        <li>
                                            <div class="icon_au"><i class=" fa-solid icon_check fa-heart"></i></div>
                                            <p>${e.heartTime}k</p>
                                        </li>
                                        <li>
                                            <a  href="./File/showvideo.html"><div class="icon_au"><i class=" fa-solid icon_check fa-comment-dots"></i></div></a>
                                            <p>${e.comment}</p>
                                        </li>
                                        <li>
                                            <div class="icon_au"><i class=" fa-solid icon_check fa-share"></i></div>
                                            <p>${e.share}</p>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="R_folow">
                        <button onclick=follow(this) class="btn_follow">Follow</button>
                    </div>
            </div> `
        newDocument.innerHTML = html
        R_wrap_content.appendChild(newDocument)
    });
    // share copi 
   
    let shareCopi = document.getElementsByClassName('fa-share')
    for(let i=0;i<shareCopi.length;i++){
        shareCopi[i].addEventListener('click', function getLink() {
            let link = location.href
            var input = document.createElement("input");
            document.body.appendChild(input);
            input.value = link;
            input.select();
            input.setSelectionRange(0, 99999);
            document.execCommand("copy");
            document.body.removeChild(input);    
        })
    }
}
//switch body_left
var body_L_main = document.getElementsByClassName('text')
var body_L_icon = document.getElementsByClassName('svg')
var L_main = document.getElementsByClassName('L_main')
for(let i=0;i<L_main.length;i++){
    L_main[i].addEventListener('click',()=>{
        body_L_main[i].classList.add('active')
        body_L_icon[i].attributes.fill.textContent = 'rgba(254, 44, 85, 1)'
        if( body_L_main[i-1]){
            body_L_main[i-1].classList.remove('active')
            body_L_icon[i-1].attributes.fill.textContent = 'white'
        }
        if( body_L_main[i+1]){
            body_L_main[i+1].classList.remove('active')
            body_L_icon[i+1].attributes.fill.textContent = 'white'
        }
        if( body_L_main[i-2]){
            body_L_main[i-2].classList.remove('active')
            body_L_icon[i-2].attributes.fill.textContent = 'white'
        }
    })  
}





