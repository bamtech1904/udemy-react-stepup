# [Reactに入門した人のためのもっとReactが楽しくなるステップアップコース完全版](https://www.udemy.com/course/react_stepup/)

# セクション3: 再レンダリングの仕組みを知りレンダリングを最適化する

React v19ではReact Compilerを使えばメモカが不要になる

# セクション4: 様々なCSSのあてかたに触れる

## 14.CSS Modules
`node-sass`と`sass-embedded`をインストールする

```bash
$ pnpm add node-sass sass-embedded
```

## 15. Styled JSX
`styled-jsx`をインストールする

```bash
$ pnpm add styled-jsx
```

## 16. styled components
`styled-components`をインストール

```bash
$ pnpm add styled-components
```

## 17. Emotion
`@emotion/react`と`@emotion/styled`をインストール

```bash
$ pnpm add @emotion/react @emotion/styled
```

# セクション8: JSONPlaceholderでのデータ取得解説
[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

# セクション12: 実践アプリ作成(Chakra UI)
[Chakra UI](https://chakra-ui.com/)

## Chakra UIの紹介
最新のv3を導入する場合は動画の内容は基本参考にならない。
公式ドキュメント読んで実装する
[Using Chakra in Vite](https://chakra-ui.com/)

```bash
pnpm i @chakra-ui/react @emotion/react
pnpx @chakra-ui/cli snippet add
```

あとは手順4以降のセットアップを読んでいい感じにやる

## 75.ログイン機能の実装

React 19ではReact Compilerの登場でuseMemoやuseCallbackによるメモ化が基本不要となった。
[React Compiler](https://ja.react.dev/learn/react-compiler)
[パフォーマンス向上！useMemo と useCallback の正しい使い方](https://qiita.com/yun_bow/items/2327d5a6c68cb23f5a66)
