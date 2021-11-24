function toRanking() {
  // ランキング表示ボタンを非表示
  let rakingbutton = document.getElementById("rankButton");
  rakingbutton.style.display = "none";
  // ゲーム画面を非表示
  main.style.display = "none";
  // ランキングを表示
  let button1 = document.getElementById("ranking");
  button1.style.display = "block";

  // データ取得
  checkRanking();
}

// 保存したデータの取得
function checkRanking() {
  // **********ランキングを表示しよう！**********
  let highScore = ncmb.DataStore("GameScore");
  // scoreの降順でデータ5件を取得するように設定する
  highScore.limit(5)
  .order("score", true )
  .fetchAll()
  .then(function(results){
    // 検索に成功した場合の処理
    console.log("検索に成功しました。");
    // テーブルにデータをセット
    setData(results);
  })
  .catch(function(error){
    // 検索に失敗した場合の処理
    console.log("検索に失敗しました。エラー:" +error);
  });
  // ******************************************************
}

// テーブルにデータを設定
function setData(scoreData) {
  let table = document.getElementById("rankingTable");
  // 名前の設定
  // スコアの設定
  for ( let i = 0;i < scoreData.length; i++){
    let name = table.rows[i].cells[1];
    name.innerHTML = scoreData[i].name;
    let score = table.rows[i].cells[2];
    score.innerHTML = scoreData[i].score;
  }
}

function toMain() {
  // ランキング表示ボタンを表示
  let rakingbutton = document.getElementById("rankButton");
  rakingbutton.style.display = "block";

  // ゲーム画面を表示
  main.style.display = "block";

  // ランキングを非表示
  let button1 = document.getElementById("ranking");
  button1.style.display = "none";

}
