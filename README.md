# Clash of Clans Api Consumer

[![Netlify Status](https://api.netlify.com/api/v1/badges/89cb3b8c-32cb-421e-b09b-c8d1b0e6a899/deploy-status)](https://app.netlify.com/sites/coc-api-consumer/deploys)



````sh
npm run serve
curl http://localhost:9000/api/my-clan
````



[index.html](index.html) simply loads html from the Express.js app using
`<object>`, and the app is hosted at `/.netlify/functions/server`. Examples of
how to access the Express.js endpoints:

```sh
curl https://netlify-express.netlify.com/.netlify/functions/server
curl https://netlify-express.netlify.com/.netlify/functions/server/another
curl --header "Content-Type: application/json" --request POST --data '{"json":"POST"}' https://netlify-express.netlify.com/.netlify/functions/server
```

