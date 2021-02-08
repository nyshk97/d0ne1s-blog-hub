export const config = {
  siteMeta: {
    title: "d0ne1s' blog hub",
    teamName: "d0ne1s",
    description: "各Blogサービスの記事を集約",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Profile",
      href: "https://d0ne1s.anotion.so/",
    },
    // {
    //   title: "Job carrier",
    //   href: "https://zenn.dev/catnose99/articles/cb72a73368a547756862",
    // },
    // {
    //   title: "GitHub",
    //   href: "https://github.com/catnose99/team-blog-hub",
    // },
  ],
};
