var movieData = (function(){
    var _movies = {};

    var _initData = function(){
        $.getJSON("data/movies.json", function(data){
            _movies = data.movies;

            $.each(_movies, function(idx, item){
                var goHere = '<div class="movieImg"><img src="' + item.imgURL+ '" id="' + item.id + '"><p>' + item.title+ '</p></div>';

                if(item.year == "2015"){
                    $(".newMovies").prepend(goHere);
                } else if(item.genre == "Action"){
                    $(".actionMovies").prepend(goHere);
                }else if(item.genre == "Comedy"){
                    $(".comedyMovies").prepend(goHere);
                }else if(item.genre == "Kids"){
                    $(".kidsMovies").prepend(goHere);
                }else if(item.genre == "Horror"){
                    $(".horrorMovies").prepend(goHere);
                }else if (item.genre == "Documentary"){
                    $(".docMovies").prepend(goHere);
                }

            });

            _movieClick();
        });
    };


    var _movieClick = function(){
        $("img").click(function(e){
            $(".showAll").transition({x:"100vw"}, 400, 'linear');
            var currentMovieID = $(this).attr('id');
            console.log($(this).attr('title'));

            $.each(_movies, function(idx, mov){
                if(currentMovieID == mov.id){
                    var det = '<h2>' + mov.title + '</h2><br><p>(' + mov.year + ')</p><img src="' + mov.imgURL + '"><p class="desc">' + mov.desc + '</p><p>Runtime: ' + mov.time + '</p>';
                    $(".showAll").append(det);
                }
            })

            $(".backBtn").click(function(){
                $(".showAll").transition({x:"-100vw"}, 400, 'linear');
                $(".showAll").html("<div class='backBtn'><i class='fa fa-chevron-left'></i>Back</div>");
            })
        });
    };


    return {
        init: _initData
    };



})();