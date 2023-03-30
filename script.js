$(document).ready(function() {
    getFact();
});

function showButtons(show) {
    if (show) {
        $('#likeButton').show();
        $('#dislikeButton').show();
        $('#newButton').show();
    }else{
        $('#likeButton').hide();
        $('#dislikeButton').hide();
        $('#newButton').hide();
    }
}

$('#likeButton').click(function() {
    $(this).hide(); 
    getFact(); 
});
$('#dislikeButton').click(function() {
    $(this).hide(); 
    getFact(); 
});
$('#newButton').click(function() {
    $(this).hide(); 
    getFact(); 
});


function getFact() {
    $.ajax({
        url: 'http://dog-api.kinduff.com/api/facts',
        method: 'GET',
        data: {
        },
        success: function(data, status) {
            console.log('Data received: ' + data + status); 
        },
        error: function(data) {
            console.log('Error: ' + data + status)
        }
    });
}

function createFact() {

}
