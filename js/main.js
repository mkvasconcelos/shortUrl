var longUrl = ""
var shortenUrl = ""

async function shortUrl() {
    longUrl = $('#myInput').val()
    let headers = {
        "Authorization": "f84843bbbb740bf6f9b1c1c683a515abb00ad6d0",
        "Content-Type": "application/json"
    }
    let response = await fetch('https://api-ssl.bitly.com/v4/bitlinks', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ "long_url": "https://" + longUrl, "domain": "bit.ly" })
    })
    let data = await response.json()
    shortenUrl = data['id']
    $('#myOutput').val(shortenUrl)
    qrCode(shortenUrl)
    // $('#myOutput').html(data['link'])
}

function qrCode(url) {
    let response = fetch('https://api-ssl.bitly.com/v4/bitlinks/' + url + '/qr', {
        method: 'GET',
        headers: { "Authorization": "f84843bbbb740bf6f9b1c1c683a515abb00ad6d0" }
    })
    let pic = response

    console.log(pic)
}

async function copy() {
    /* Get the text field */
    var copyText = $("#myOutput").val();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText)
}

