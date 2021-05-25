
    window.onscroll = function(){
        if(document.body.scrollTop >= 124.063 || document.documentElement.scrollTop >= 124.063){
            // console.log("Hii");
            nav.classList.add("scroll");
        } else {
            nav.classList.remove("scroll");
        }
    };
