const scrollFunction = () => {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

window.onscroll = () => {
    scrollFunction();
};

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if ( c > 0 ) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8 );
    }
}
