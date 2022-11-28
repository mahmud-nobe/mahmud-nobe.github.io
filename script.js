//var w = window.innerWidth;
//var h = window.innerHeight;
//console.log(w, h);


window.addEventListener('resize', function() {
    //console.log(window.innerWidth);
    carousel = d3.select('.carousel');
    if (window.innerWidth < 575) {
        carousel.attr("data-mdb-interval", 10000)
    }
    else {
        carousel.attr("data-mdb-interval", 5000)
    }
    //console.log(carousel.attr('data-mdb-interval'));
})


var sections = document.querySelectorAll("section");
var navlinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
    sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop-100) {
            current = section.getAttribute("id"); 
            //console.log(current);
        }
    });

    navlinks.forEach( (nav) => {
        console.log(nav);
        nav.classList.remove('active');
        if (nav.href.includes(current)) {
            nav.classList.add('active');
        }
    } )
}
