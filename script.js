// 必要なライブラリのインポート
const fetch = require("node-fetch");

// APIキーと検索エンジンIDの設定
const apiKey = "AIzaSyAnBeGmbTbFu6YZmxD1s3MHvqZBwQXBBm8";
const cx = "1234";

// 検索クエリを受け取って結果を取得する関数
async function search(query) {
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items; // 検索結果の配列を返す
}

// 検索クエリを入力して検索結果を取得する例
const query = "検索キーワード";
search(query)
  .then(results => {
    console.log("検索結果:");
    results.forEach((result, index) => {
      console.log(`${index + 1}. ${result.title}: ${result.link}`);
    });
  })
  .catch(error => console.error("検索エラー:", error));
