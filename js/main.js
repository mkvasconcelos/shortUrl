function shortUrl() {
    var url = $('#myInput').val()
    console.log(url)
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }
    let headers = {
        "Content-Type": "application/json",
        "apikey": "e3bf871840034a089c82c65b40b2d291"
    }

    $.ajax({
        url: "https://api.rebrandly.com/v1/links",
        type: "POST",
        data: JSON.stringify(linkRequest),
        headers: headers,
        dataType: "json",
        success: (link) => {
            $('#myOutput').html(link.shortUrl)
            //alert(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
        }
    });
}

function copy() {
    console.log($("#myOutput").val())
    let inputUrl = $("#myOutput").val();
    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputUrl.value);
    alert(`URL copiada: ${inputUrl.value}`);
}
