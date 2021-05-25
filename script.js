
    window.onscroll = function(){
        if(document.body.scrollTop >= 170.063 || document.documentElement.scrollTop >= 170.063){
            // console.log("Hii");
            outter.classList.add("scroll");
        } else {
            outter.classList.remove("scroll");
        }
    };
