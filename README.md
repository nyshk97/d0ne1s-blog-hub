# d0ne1s' blog hub
<img width="1440" alt=" 2021-02-08 16 49 30" src="https://user-images.githubusercontent.com/38527299/107190261-f0259700-6a2d-11eb-9820-a04fcc2b9f76.png">

note、Qiita、Zenn の投稿を集約。
毎朝 11 時にデータを自動更新(GithubActions)

## URL

https://d0ne1s-blog-hub.vercel.app/

## Development

```bash
$ yarn install
$ yarn build
$ yarn dev
```

- サイトの基本設定は`site.config.ts`
- 記事ソースの編集は`members.ts`
- 配色の変更は`src/styles/variables.scss`
- ロゴなどの画像の変更は`public`内のファイルを置き換え

## Ref

- https://github.com/catnose99/team-blog-hub
- https://zenn.dev/nikaera/articles/vercel-github-actions
