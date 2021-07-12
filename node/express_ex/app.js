const express = require('express');

const app = express();  // express Application 객체 생성

// 커스텀 미들웨어 등록
app.use((req, res, next) => {
  const url = req.url;
  console.log(url);
  next();  // 여길 주석 처리하면 next() 함수가 호출되지 않아 다음 미들웨어로 넘어가지 않아 응답이 오지 않음
});

// 루트 경로(/)로 GET 요청이 왔을 경우 응답
app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>');
});

// /another 경로로 GET 요청이 왔을 경우 응답
app.get('/another', (req, res) => {
  res.send('<h1>Another page!</h1>');
});

app.listen(3000, () => console.log('Server running on 3000!'));
