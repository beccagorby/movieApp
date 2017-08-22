$(document).ready(function(){
    init();
    menuClick();
});

function init() {
    movieData.init();
}

function menuClick() {
    var v = 1;
    $(".menuBar").click(function(){
        v += 1;
        console.log(v);
        if(v%2 == 0){
            $(".menu").transition({x:"40vw"}, 400, 'linear')
        }else {
            $(".menu").transition({x:"-40vw"}, 600, 'linear')
        }
    });
}