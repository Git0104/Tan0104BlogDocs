

# 2:データ型について

## データ型について説明したいと思います。 
まずデータ型の基本的には4つの型があります。<br>

---

#### 1つ目が `数値型(Number)` です。<br>
数値型は、`const x = 10` の中の10の様に数値の形です。
<br>
```JavaScript
const x = 10

console.log(x)

実行結果: 10
```

---

#### 2つ目が `文字列型(String)` です。 <br>
文字列型は `"Hello"` や `"JavaScript"` などの文字で出来てる型です。
<br>
```JavaScript
const x = "JavaScript"

console.log(x)

実行結果: JavaScriot
```
---
#### 3つ目が `真偽値型(Boolean)` です。 <br>
真偽値型は `let x = true` や `let y = false` などです。<br>
ちなみに **true** and **false** は `true` が *on* で `false` が *off* みたいな考え方で覚えてもらうと覚えやすいかなと思います。
```JavaScript
let x = true

if (x = true) {
    console.log("x is true")
} else {
    console.log("x is false")
}

実行結果: x is true
```

---

#### 4つ目が `null , undefined` です。<br>
まずは `null` からです。`null` はその名の通り、何も **無し** です。
<br> この `null` は意図的に
<br> 例
