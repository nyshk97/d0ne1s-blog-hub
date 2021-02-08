# d0ne1s' blog hub

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
