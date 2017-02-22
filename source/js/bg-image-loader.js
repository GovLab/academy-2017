$(function () {
    var threshold = 0.2; // wiggle room before switching to contain

    // check the aspect ratio of each image to see whether to use contain or cover for background-size
    $('[bg-url]').each(function() {
        var size = 'cover';
        var url = $(this).attr('bg-url');
        var img = new Image();
        img.src = url;

        var ar = img.width / img.height;
        if (ar > 1 + threshold) {
            size = 'contain';
        }
        $(this).css( 'background-image',  'url(' + url + ')' );
        $(this).css( 'background-size', size );
    });

});