export const config = {
  siteMeta: {
    title: "d0ne1s",
    teamName: "d0ne1s",
    description: "各Blogサービスの記事を集約",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://d0ne1s-blog-hub.vercel.app/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Profile",
      href: "https://d0ne1s.anotion.so/",
    },
    {
      title: "JobCareer",
      href: "https://d0ne1s.anotion.so/career",
    },
    {
      title: "Blog",
      href: "/",
    }
  ],
};
