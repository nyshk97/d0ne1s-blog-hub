import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "note",
    avatarSrc: "/avatars/note.png",
    sources: ["https://note.com/d0ne1s/rss"],
    websiteUrl: "https://note.com/d0ne1s",
  },
  // {
  //   name: "Qiita",
  //   avatarSrc: "/avatars/qiita.png",
  //   sources: ["https://qiita.com/d0ne1s/feed.atom"],
  //   websiteUrl: "https://qiita.com/d0ne1s",
  // },
  {
    name: "zenn",
    avatarSrc: "/avatars/zenn.jpg",
    sources: ["https://zenn.dev/d0ne1s/feed"],
    websiteUrl: "https://zenn.dev/d0ne1s",
  }
];
