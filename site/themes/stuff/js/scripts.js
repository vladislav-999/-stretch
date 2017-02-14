/**
 * Created by Vladislav_PC on 10.02.2017.
 */
$(document).ready(function(){

    $('a.action-btn.cart').click(function(){
        console.log($('form.add2cart input[type=submit]').click());
    });


    $('.switch a').click(function(){
        var view = $(this).attr('href');
        console.log(view);
        $.cookie('view_page', view, { expires: 32, path: '/'});
    });

});