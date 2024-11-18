# webpro_06

## ファイル一覧
ファイル名 | 説明
-|-
app5.js | プログラム本体
public/roll-dice.html | ダイスが振れる
public/color.html | 名前に沿ったイメージカラーが決定される
public/roll-dice.ejs | ダイス結果
public/color.ejs | イメージカラー表示


##　1.ダイスを振ろう
```　ゲームでよく使うダイスを同じサイトで振れるようにした．ユーザーが選択したサイコロのサイズ（3, 4, 6, 8, 10, 12, 20, 100面）に応じて結果を表示する． ```

```mermaid
flowchart TD;
start["開始"];
end1["終了"]
sikaku["ユーザーが
ダイスサイズを指定"]
if{"ダイスサイズは
有効か？"}
win["ランダムな数値を生成"]
loose["エラー表示"]

start --> sikaku
sikaku--> if
if -->|yes| win
win --> end1
if -->|no| loose
loose --> end1

```

### 実装手順
1. app5.js を起動する
1. Webブラウザでlocalhost:8080/public/roll-dice.htmlにアクセスする
1. 振りたいダイスを選ぶ

##　2.イメージカラーを決めよう
```作ったキャラクターのイメージカラーがざっくりランダムで決められるようにした.名前を入力すると、その人にランダムなイメージカラーを表示する。```

```mermaid
flowchart TD;
start["開始"];
end1["終了"]
sikaku["ユーザーが
名前を入力"]
if{"名前が存在
するか"}
win["ランダムな色を選択"]
loose["「名前を入力
してください」
と返す"]

start --> sikaku
sikaku--> if
if -->|yes| win
win --> end1
if -->|no| loose
loose --> end1

```
### 実装手順
1. app5.js を起動する
1. Webブラウザでlocalhost:8080/public/color.htmlにアクセスする
1. イメージカラーを決めたい名前を入力する．