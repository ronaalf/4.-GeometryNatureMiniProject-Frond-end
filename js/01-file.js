'use strict'
//TOP-BUTTON////////////////////////////////
var mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";  
    }else{
        mybutton.style.display = "none";
    }
}
function topFunction() {
    window.scrollTo(0,0);            
}

//REGISTER-FORM////////////////////////////////
$(".message a").click(function(){
    $("form").animate({height: "toggle", opacity: "toggle"}, "slow");
});

function alreadyloged1() {
    var getback = document.getElementById("login");
    getback.scrollIntoView(false);
    getback.scrollIntoView({behavior: "smooth"});
}


//NAVEGATION-BAR//////////////////////////////
$(document).ready(function(){
    $('ul.bar li a:first').addClass('active');
    $('.sections section').hide();
    $('.sections section:first').show();
    
    $('ul.bar li a').click(function(){
        $('ul.bar li a').removeClass('active');
        $(this).addClass('active');
        $('.sections section').hide();
    
        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});
//ATTITUDE////////////////////////////////////
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } 
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display ="block";
    setTimeout(showSlides, 4000);   
}

function appearfunction() {
    document.getElementById("login").style.display = "block";
    if (alreadyloged1()) {
        alert("fdgf");
    }
}
//ALREADYLOGED////////////////////////////////////

    function alreadyloged(){
        document.getElementById("2ndbar").style.display = "block";
        document.getElementById("barr").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("leftt").style.display = "none";
    }
