
# GPT-3.5-Turbo bot installation and deloyment Instructions

### 建立機器人
```sh
https://discord.com/developers/applications
```
### 建立你的OpenAI帳戶（本來就有帳號也可以直接用）
```sh
https://platform.openai.com/signup
```
### 下載 node.js
```sh
https://nodejs.org/en/
```

```
### .env內容

TOKEN=放入機器人金鑰
OPENAI_API_KEY=放入OpenAI金鑰

### 運行code
```sh
node soyo.js
```
### 雲段執行pm2伺服器下載（才不用一直開著code軟體）
```sh
npm install pm2 -g
```
### pm2運行
```sh
pm2 start soyo.js
```

