# CRUD활용 react기반 고용자명단
react + JSON-server 고용자들의 정보 확인,추가,삭제를 할 수 있다.

## 💻 Repo 소개
db.json에 있는 고용자들의 명단을 추가,삭제 등 상태 표시를 할 수 있는 사이트입니다.

## 🖋️ 주요 기능
<ul>
<li> 첫화면 listing에서 Add New 버튼을 눌러 Name, Email, Phone의 정보를 입력하고 save버튼을 누르면 입력정보들이 db.json으로 넘어가 서버에 저장된다.</li>
<li> 위의 내용으로 서버에 저장된 값들은 list에 자동으로 업로드된다
<li> 리스트 Action 중에 Edit은 저장된 입력정보들을 수정할 수 있다.
<li> Remove는 클릭시 window.confirm 으로 진짜 삭제를 할 것인지 한번 더 물어보게된다.
<li> Details는 empdata에 들어있는 id가 같은 한사람의 name,email,phone정보를 다른 창으로 디테일하게 보여주게된다.
</ul>

## ❌ 에러내용 및 해결
1. 에러내용 : Json-server 설치 오류</br> 터미널에 ```npm install -g json-server```를 하였을 때</br> code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules/json-server
npm ERR! errno -13 의 에러가 발생.</br></br>해결방법 : ```sudo npm install -g json-server```를 입력해줌으로써 관리자버전으로 실행을 시켜주어야했다.</br></br></br>
2. 에러내용 : json-server 사용중 에러 </br> 1번내용의 에러때문에 전역으로 설치가 되지않아 ```zsh: command not found: json-server```의 에러가 발생. </br></br>해결방법 : -g를 붙여서 json-server를 전역으로 설치를 해준다. 그다음 ```npx json-server --watch db.json```를 실행시켜 에디터에 db.json을 받아 올 수 있었다.</br></br></br>
3. 에러내용 : ```TypeError: Cannot read properties of undefined (reading 'pathname')```
EmpDetail.js 작성하고 난 뒤 실행을 시켜봤는데 위 내용의 에러가 발생하였다. 이 에러는 Link컴포넌트에 to라는 필수 속성을 작성하지 않아 발생한 오류라고 했다.</br></br>해결방법 : Link를 사용해 페이지를 이동할 때는 to속성을 이용하여 경로를 지정해주었다. to속성으로 경로를 지정해주니 오류가 발생하지 않았다.</br></br></br>4. 에러내용 : ```net::ERR_CONNECTION_REFUSED```</br>VScode를 한번 종료하고 난뒤 다시 코딩을 시작하려는데 npm start로 리액트를 실행시키고 시작하려는데 위같은 오류가 발생하였다. 위의 에러는 같은 터미널에서 npm실행과 같이 하여서 난 에러라고 하였다.</br></br>해결방법 : ```한 터미널에서 npm start를 먼저 실행하고``` ```터미널을 한개 더 추가해 json-server --watch db.json --port 8000의 명령어를 실행```시켜 에러를 해결하였다.</br></br></br></br>

## ⚙️ Prerequisites
<ul>
<li>npm >= 6.0.0
<li>react >= 18.2.0
<li>bootstrap >= 5.2.3
<li>json-server >= 0.17.1
<li>react-router-dom >= 6.8.0

### Install
```npx create-react-app .```</br>
```npm install react-router-dom --save```</br>
```npm install react-bootstrap bootstrap```</br>
```npm install json-server```</br>
```json-server --watch db.json --port 8000```</br>


## 🖥️ 실행화면
리스트 화면</br></br>
<img width="785" alt="list" src="https://user-images.githubusercontent.com/120915990/216291401-825449be-2e4b-4e28-898f-476d1325005c.png"></br></br>create화면</br></br>
<img width="784" alt="create" src="https://user-images.githubusercontent.com/120915990/216291578-3a65f6e7-4378-4dfa-b505-67d232f1b452.png">
</br></br>edit화면</br></br><img width="785" alt="edit" src="https://user-images.githubusercontent.com/120915990/216292442-a19a6174-3d1c-4f37-9dbe-b9ed02c72d4f.png"></br></br>details화면</br></br>
<img width="786" alt="details" src="https://user-images.githubusercontent.com/120915990/216292127-9e9c7eea-acc0-48a5-9bda-2536f154d276.png">
