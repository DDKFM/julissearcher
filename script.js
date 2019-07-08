var response = $.get('https://logogenerator.julis.de/output', function(data) {
    var links = $('a', data)
    var linkList = new Object()
    links.each(function() {
        linkList[$(this).html()] = "https://logogenerator.julis.de/output/" + $(this).attr("href")
    })
    console.log(linkList)
    $(document).ready(function(){
        $('input.autocomplete').autocomplete({ 
            data : linkList,
            limit : 100,
            onAutocomplete : function(e) {
                console.log(e)
                $('#logoImg').attr('src', 'https://logogenerator.julis.de/output/' + e + "web/" + e.replace('/', '') + '-web.png')
            }
        });
    });

})