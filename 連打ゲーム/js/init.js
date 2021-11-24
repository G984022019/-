// APIキーの設定
const APPLICATION_KEY = "2d2d24d521df37ba071baad0db8eca2c6548fc880cbf420430750b526a6a0de0";
const CLIENT_KEY = "64dc563ffa7cb56df10156efd678f6f5fde3d80a39ecc7ff2fb669d03ea6a216";

// タイマー設定
let countTimer = 13;
// タップ回数カウンター
let counter = 0;
// タイマーエレメント
const countDown = document.getElementById('countDown');
// タップ可否設定（フラグ）
let tapFlag = false;
// スコア表示エレメント
const score = document.getElementById("score");
// メイン画面エレメント
const main = document.getElementById("main");
const startButton = document.getElementById("startButton");
// ランキング表示関連エレメント
const rankButton = document.getElementById("rankButton");
const ranking = document.getElementById("ranking");
