$(document).ready(function(){
    $.get('https://logogenerator.julis.de/output', function(data) {
        var links = $('a', data)
        var linkList = new Object()
        links.each(function() {
            linkList[$(this).html()] = null
        })
        data = linkList

        a = $('input.autocomplete').autocomplete({ 
            data : linkList,
            minLength : 0,
            onAutocomplete : function(e) {
                console.log(e)
                $('#logoImg').attr('src', 'https://logogenerator.julis.de/output/' + e + "web/" + e.replace('/', '') + '-web.png')
            }
        });
    })
});

function sendRequest() {
    $('#loading').css('visibility', 'visible')
    var text = $('#text').val()
    $.post( "https://logogenerator.julis.de/generate.php", 'text=' + text)
        .done(function( data ) {
            $('#logoImg').attr('src', 'https://logogenerator.julis.de/output/' + text + "/web/" + text.replace('/', '') + '-web.png')
            $('#loading').css('visibility', 'hidden')
    });
}