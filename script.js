$(document).ready(function(){
    $('.image').show();

    $('.filter-button').click(function(){
        var filter = $(this).data('filter');

        if (filter === 'all') {
            $('.image').show();
        } else {
            $('.image').hide();
            $('.' + filter).show();
        }
    });
});
