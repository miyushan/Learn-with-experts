
    window.onscroll = function(){
        if(document.body.scrollTop >= 130 || document.documentElement.scrollTop >= 130){
            // console.log("Hii");
            outter.classList.add("scroll");
        } else {
            outter.classList.remove("scroll");
        }
    };
