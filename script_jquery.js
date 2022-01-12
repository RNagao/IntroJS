$(function(){
    $('#texto_h1').click(function(){
        $('#unico').css("color", "red");
    });

    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('#mensagem')
            .text("Cor alterada para azul")
            .css('color', 'blue')
            .css('border', '1px solid blue')
            .delay(2000)
            .fadeOut(5000);
        $('p')
            .fadeOut(3000)
            .delay(1000)
            .fadeIn('fast');
    });

    $('#vermelho').click(function(){
        $('p')
            .css("color", "red")
            .fadeOut('slow')
            .delay(1000)
            .fadeIn(5000);
        $('#mensagem')
            .text("Cor alterada para vermelho")
            .css({color:'red', border:'1px solid red'})
            .delay(2000)
            .fadeOut(5000)
            .addClass('green');
        $('button').removeClass('red');
    });

    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
});