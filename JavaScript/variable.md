---

prev:
  text: 'JavaScriptとは'
  link: '/JavaScript'
next: 
  text: '2: データ型について'
  link: '/JavaScript/'
---

# 1: JavaScriptの変数について

## JavaScript の変数について説明したいと思います。

<br>JavaScriptの変数の使い方：<br>JavaScriptの変数は大きく分けて2つあります。

`const` と `let` です。

この二つの使い方と注意点についてお話ししたいと思います。

まず `const` と `let` はどちらも変数という点は同じですが、変数を変えられるか変えられないかの違いがあります。

まず、``const`` は一度宣言したら中身の値を変えられないという点です。

```JavaScript
const x = 10

function a(){
    x = 30
}

a()
console.log(x)
```

例えばこれは **const x = 10** で宣言してるのに **function a()** で値を変えようとしていますよね。<br>
だから、 **x = 30** でエラーが起きます。<br><br>

一方、`let` は一度宣言しても、後から値を変えられるという点です。

```JavaScript
let x = 10

function a(){
    x = 30
}

a()
console.log(x)
```

さっきの **const x = 10** の時は、**function a()** で値は変えられませんでした。<br>ですが`let`の場合は、値を後からでも変えられるので、**function a()** で x の値を30に変更できます！

::: info まとめ
- **const**：一度決めたら変えられない「定数」。基本的にはこれを使う！
- **let**：後から書き換えたい「変数」に使う。
:::

::: tip エンジニアの習慣
最近のJavaScript開発では、**「まずは全部 `const` で書いてみて、どうしても書き換える必要がある時だけ `let` に変える」**という書き方が推奨されています。
:::