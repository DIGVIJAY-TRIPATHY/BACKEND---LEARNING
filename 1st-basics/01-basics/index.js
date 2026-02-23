require('dotenv').config()
const express = require('express')


const app = express()
const port = 3000

const GitData={
  "login": "DIGVIJAY-TRIPATHY",
  "id": 178590597,
  "node_id": "U_kgDOCqUThQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/178590597?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DIGVIJAY-TRIPATHY",
  "html_url": "https://github.com/DIGVIJAY-TRIPATHY",
  "followers_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/followers",
  "following_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/following{/other_user}",
  "gists_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/subscriptions",
  "organizations_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/orgs",
  "repos_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/repos",
  "events_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DIGVIJAY-TRIPATHY/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "DIGVIJAY TRIPATHY",
  "company": null,
  "blog": "",
  "location": "BHUBANESWAR , ODISHA",
  "email": null,
  "hireable": null,
  "bio": "👋 Hey there, I’m Digvijay Tripathy\r\n💻 3rd-year B.Tech student @ NIT Bhubaneswar\r\n⚙️ Passionate about turning ideas into clean, functional code",
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 3,
  "following": 6,
  "created_at": "2024-08-16T15:47:42Z",
  "updated_at": "2025-12-03T14:01:09Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('This is Twitter')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login to continue</h1>')
})

app.get('/youtube',(req, res)=>{
    res.send('<h1>Chai aur code</h1>')
})

app.get('/github',(req,res)=>{
    res.json(GitData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
