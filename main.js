$('document').ready(function(){
    console.log("Doc is ready")

    $('button.addclass').click(function() {
        console.log("addclass clicked");
        $('p.addclass').css('backgroundColor','red');
    });

});
