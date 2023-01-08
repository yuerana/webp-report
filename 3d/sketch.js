let mesh;    // メッシュを保存する変数
let tex_img; // テクスチャを保存する変数

// 事前に必要な読み込み処理
function preload() {
  // 3Dモデルデータの読み込み
  mesh = loadModel('head.obj', true);
  
  // テクスチャ画像の読み込み
  tex_img = loadImage('texture.png');
}

// 初期化関数
function setup() {
  createCanvas(700, 600, WEBGL);  //3D用キャンバス  
} 

function draw() {
  background(80, 80, 80);  // 背景色の指定
  // テクスチャ画像の表示
  push();
  noStroke();
  translate(-windowWidth*0.3, -windowHeight*0.2, 0);
  
  // テクスチャ付きの四角形の描画
  texture(tex_img);
  plane(200, 200);
  
  pop();
  
  push();
  // カメラの設定
  //     ex, ey, ez,cx,cy,cz,ux,uy,uz
  camera( 0,120,220, 30, 0, 0, 0,-1, 0);
  
  // 軸反転
  scale(-1, 1, 1);
  
  // メッシュのエッジの描画
  noStroke();
  //stroke(255, 100, 30);
  //strokeWeight(0.1);
  
  //noStroke();
  
  // モデルの回転
  //rotateY(radians(-30));
   rotateY(frameCount * radians(0.5)); // y軸周りの回転アニメーション
  
  // テクスチャ付きモデルの描画
  texture(tex_img);
  model(mesh);
  
  pop();
}
