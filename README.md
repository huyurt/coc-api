# Clash of Clans Api Consumer

[![Netlify Status](https://api.netlify.com/api/v1/badges/89cb3b8c-32cb-421e-b09b-c8d1b0e6a899/deploy-status)](https://app.netlify.com/sites/coc-api-consumer/deploys)



````sh
npm run serve
curl http://localhost:9000/api/clans
curl http://localhost:9000/api/my-clan
curl http://localhost:9000/api/my-clan/save-members
curl http://localhost:9000/api/my-clan/save-current-war
curl http://localhost:9000/api/my-clan/save-league-wars
````



[index.html](index.html) simply loads html from the Express.js app using
`<object>`, and the app is hosted at `/.netlify/functions/server`. Examples of
how to access the Express.js endpoints:

```sh
curl https://netlify-express.netlify.com/.netlify/functions/server
curl https://netlify-express.netlify.com/.netlify/functions/server/another
curl --header "Content-Type: application/json" --request POST --data '{"json":"POST"}' https://netlify-express.netlify.com/.netlify/functions/server
```



## Clash of Clans Api Reference

| Endpoint                                | Description                                                  |
| --------------------------------------- | ------------------------------------------------------------ |
| /clans                                  | Search clans                                                 |
| /clans/{clanTag}                        | Get clan information                                         |
| /clans/{clanTag}/warlog                 | Retrieve clan's clan war log                                 |
| /clans/{clanTag}/currentwar             | Retrieve information about clan's current clan war           |
| /clans/{clanTag}/currentwar/leaguegroup | Retrieve information about clan's current clan war league group |
| /clanwarleagues/wars/{warTag}           | Retrieve information about individual clan war league war    |
| /clans/{clanTag}/members                | List clan members.                                           |
| /clans/{clanTag}/capitalraidseasons     | Retrieve clan's capital raid seasons                         |
| /players/{playerTag}                    | Get player information                                       |
| /leagues                                | List leagues                                                 |
| /warleagues                             | List war leagues                                             |
| /capitalleagues                         | List capital leagues                                         |
| /locations                              | List locations                                               |

