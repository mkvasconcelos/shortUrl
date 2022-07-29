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
