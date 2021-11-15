const videos = document.querySelectorAll('.video')

let generateUrl = function (id) {
    let query = '&rel=0&showInfo=0&autoplay=1'

    return 'https://www.youtube.com/embed/' + id + query
}

let createIframe = function(id) {
    let iframe = document.createElement('iframe')
    iframe.setAttribute('aalowfullscreen', '')
    iframe.setAttribute('allow', 'autoplay', 'encrypted-media')
    iframe.setAttribute('src', generateUrl(id))

    return iframe
}

videos.forEach((el) => {
    let videoHref = el.dataset.video

    let deletedLength = 'https://youtu.be/'.length
    let videoID = videoHref.substring(deletedLength, videoHref.length)

    let ytImgSrc = 'https://i.ytimg.com/vi/' + videoID + '/maxresdefault.jpg'
    let ytImg = el.querySelector('.yt-img')
    ytImg.setAttribute('src', ytImgSrc)    

    el.addEventListener('click', function() {
        let iframe = createIframe(videoID)

        el.querySelector('.yt-img').remove()
        el.querySelector('.yt-btn').remove()

        el.appendChild(iframe)
    })

})