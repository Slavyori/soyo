<table align="center">
  <tr>
    <td align="center" height="108" width="108">
        <img     src="https://camo.githubusercontent.com/2993f7180d5cc3231060f66cfa1f0f65a1d09c0efd68d08d0190902ba9200d81/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3335333635352f646973636f72642d69636f6e2e737667"
        width="48"
        height="48"
        />
        <br /><strong>Discord.js</strong>
    </td>
    <td align="center" height="108">
      <p align="center">A simple vanilla javascript Discord bot for interacting with the new language model GPT-3.5-Turbo by OpenAI. This bot can serve a variety of different functions by changing three simple lines of it's internal prompt. No coding skills required.
      </p>
     </td>
   </tr>
 </table>
<table align="start">
  <tr>
    <td align="center">
    <p align="center">Give personality to a virtual friend in your gaming server
      </p>
        <img src="https://photos.smugmug.com/photos/i-m2ZrXcL/0/fd98caa8/M/i-m2ZrXcL-M.png"
        height="56"
        />
      </td>
   </tr>
 </table>
 <table align="start">
  <tr>
    <td align="center">
    <p align="center">Get answers to random trivia from your pc or phone (Discord Mobile)
      </p>
        <img src="https://photos.smugmug.com/photos/i-FzDPz2B/0/d1a6a56b/L/i-FzDPz2B-L.png"
        height="56"
        />
      </td>
   </tr>
 </table>
 <table align="start">
  <tr>
    <td align="center">
    <p align="center">Create your very own friendly peronal assistant
      </p>
        <img src="https://photos.smugmug.com/photos/i-bDkZn6x/0/47284382/S/i-bDkZn6x-S.png"
        height="56"
        />
      </td>
   </tr>
 </table>

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

