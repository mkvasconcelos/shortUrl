var longUrl = ""
var shortenUrl = ""
var img

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
}

async function qrCode(url) {
    console.log(url)
    var baseUrl = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl="
    var img = baseUrl + url
    console.log(img)
    $('#qrCode').attr("src", img)
    $('#qrCodeDownload').attr("href", img)
    $('#btnCopy,#btnDownload,#myOutput').css("visibility", "visible")
    $('#btnCopy,#btnDownload,#myOutput').css("visibility", "visible")
}

async function copy() {
    /* Get the text field */
    var copyText = $("#myOutput").val();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText)
}
