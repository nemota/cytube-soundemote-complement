# cytube-soundemote-complement
音声エモートをTabキーで補完する拡張

### 使い方
①[このファイル](https://raw.githubusercontent.com/nemota/cytube-soundemote-complement/master/main.js)の全文をコンソールに貼り付けてEnter

②適当なことをチャットの入力欄に入れる

③Tabキーを押すと、音声エモート名がいい感じに補完される

### 注意事項
・Synchtube Premiumの効果音リストから補完対象一覧を引っ張ってくるのでSynchtube Premiumに依存します

・ページのロードが終わる前にスクリプトをあてると「SoundFiltersArray is not defined」みたいなエラーが出ます(コンソールに表示されます)　ページのロードを待ってからあててください　エラーが出たらリロードしてやり直してください

・タイピングゲームの難易度を大きく下げます

・これを使うと語録の暗記が遅くなります

### 具体例
上が入力欄の元の文字列、下がTabを押したあとの文字列　CTV☆の場合

```
"ありがとう　"

↓Tabを押す

"ありがとう　ありがとう"
```
```
"ありがとうは"

↓Tabを押す

"ありがとうは何度言ってもいい言葉なのよ"
```
```
"kioku082marius これで私"

↓Tabを押す

"kioku082marius これで私は無敵だ！"
```
```
"面白く"

↓Tabを押す

"面白く"
```
「面白く」で始まる効果音が複数あるので補完されません。共通部分まで補完とか気が向いたら実装するかも
```
"成敗成敗成敗成敗成敗成敗成敗成敗"

↓Tabを押す

"成敗成敗成敗成敗成敗成敗成敗成敗"
```
音声エモートの始まりの部分に合うもののうち、できるだけ長く合うものを見つけて補完します。
この場合は1文字目からの16文字を始まりとみなして補完することになりますが、もともと終わりまで入力されているので追加される文字はありません。
