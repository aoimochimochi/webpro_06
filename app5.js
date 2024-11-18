const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});

  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';

  let judgement = '';
  if ((hand === 'グー' && cpu === 'チョキ') ||
      (hand === 'チョキ' && cpu === 'パー') ||
      (hand === 'パー' && cpu === 'グー')) {
    judgement = '勝ち';
    win += 1;
  } else if (hand === cpu) {
    judgement = '引き分け';
  } else {
    judgement = '負け';
  }
  
  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };
  res.render( 'janken', display );
});

app.get("/roll-dice", (req, res) => {
  const dice = Number(req.query.dice);
  const allowedDice = [3, 4, 6, 8, 10, 12, 20, 100];

  if (!allowedDice.includes(dice)) {
    return res.status(400).send("Invalid dice size. Allowed values are 3, 4, 6, 8, 10, 12, 20, 100.");
  }

  const result = Math.floor(Math.random() * dice) + 1;

  res.render('roll-dice', { dice: dice, result: result });
});

app.get("/image-color", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).send("名前を入力してください！");
  }

  const colors = [
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  res.render('color', { name: name, color: randomColor });
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
