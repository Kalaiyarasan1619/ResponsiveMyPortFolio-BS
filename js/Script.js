import Typed from "./typed.js-main/src/typed";

window.on("scroll",function(){
    var scrollTop=window.scrollTop();
    if(scrollTop>=100){
        ('body').addClass('fixed-header');
    }else{
       ('body').removeClass('fixed-header');
    }
});
