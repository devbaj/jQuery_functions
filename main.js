$('document').ready(function(){
    console.log("Doc is ready")

    $('button.addclass').click(function() {
        console.log("addclass clicked");
        $('p.addclass').addClass('red');
    });

    $('button.slide').click(function() {
        console.log("slide clicked");
        $('img.slide').slideToggle('default');
        $('img.slide').css('display','inline-block');
    })

    $('button.append').click(function(){
        console.log("append clicked");
        var add = $('p.addition').text();
        $('p.original').append(add);
    })

});
