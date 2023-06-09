//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let m = document.querySelector("h2#ex42");
let n = document.createElement("p");
n.textContent = "写真表と都市の緯度経度のページです";
n.style.textEmphasis = "sesame green";
m.insertAdjacentElement("afterend", n);

// 練習4-3 写真表作成プログラム
let photoTable = document.querySelector("div#phototable");

let img1 = document.createElement("img");
img1.src = "taro.png";

let p1 = document.createElement("p");
p1.appendChild(img1);

photoTable.appendChild(p1);

let img2 = document.createElement("img");
img2.src = "jiro.png";

let p2 = document.createElement("p");
p2.appendChild(img2);

photoTable.appendChild(p2);

let img3 = document.createElement("img");
img3.src = "hanako.png";

let p3 = document.createElement("p");
p3.appendChild(img3);

photoTable.appendChild(p3);

// 練習4-4 箇条書き削除プログラム
let l = document.querySelector("ul#location");

for (let L of l.querySelectorAll("li")) {
	L.remove();
}

// 練習4-5 箇条書き追加プログラム
for (let c of data) {
	let li = document.createElement("li");
	li.textContent = `${c.name} ... 緯度: ${c.lat}, 経度: ${c.lng}`;
	l.appendChild(li);
	l.appendChild(li);
}
