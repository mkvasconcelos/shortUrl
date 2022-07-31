import requests
import json

linkRequest = {
    "destination": "www.globo.com",
    "domain": {"fullName": "rebrand.ly"}
}
requestHeaders = {
    "Content-type": "application/json",
    "apikey": "e3bf871840034a089c82c65b40b2d291",
}
r = requests.post("https://api.rebrandly.com/v1/links",
                  data=json.dumps(linkRequest),
                  headers=requestHeaders)
if (r.status_code == requests.codes.ok):
    link = r.json()
    print("Long URL was %s, short URL is %s" %
          (link["destination"], link["shortUrl"]))


headers = {
    'Authorization': "f84843bbbb740bf6f9b1c1c683a515abb00ad6d0",
    'Content-Type': 'application/json',
}

data = '{ "long_url": "https://dev.bitly.com", "domain": "bit.ly"}'

response = requests.post(
    'https://api-ssl.bitly.com/v4/shorten', headers=headers, data=data)

print(response.json())
