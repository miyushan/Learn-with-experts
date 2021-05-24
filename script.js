
    window.onscroll = function(){
        if(document.body.scrollTop >= 118.226 || document.documentElement.scrollTop >= 118.226){
            // console.log("Hii");
            nav.classList.add("scroll");
        } else {
            nav.classList.remove("scroll");
        }
    };
