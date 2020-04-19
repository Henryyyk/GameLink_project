window.onload = function(){
    // Script da pagina dos termos e condições 
    let progress = document.getElementById('progressbar')
    let totalHeight = document.body.scrollHeight - window.innerHeight
    window.onscroll = function(){
        let progressHeight = (window.pageYOffset / totalHeight) * 100
        progress.style.height = progressHeight + "%"
    }
}
