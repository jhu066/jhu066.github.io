module.exports = {
  title: "Jie Hu's Homepage",
  description: "Homepage of Jie Hu",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Publication", link: "/pub/"},
      { text: "Teaching", link: "/teaching/" },
      { text: "Services", link: "/service/" }
      //{ text: "Schedule", link: "https://calendar.google.com/calendar/embed?src=c_fjdo7o3jtv4s0gqndfq9epf00o%40group.calendar.google.com&ctz=America%2FLos_Angeles" } 
      //{ text: "Teaching", link: "/about/" },
      // { text: "Projects", link: "/projects/" },
      // { text: "Guide", link: "/guide/" },
      // { text: "GitHub", link: "https://github.com/jhu066/notes" }
    ]
    //,
    // sidebar: {
    //   //'/guide/': genSidebarConfig('Guide')
    //   // '/': genSidebarConfig('Home')
    // }//,
    // lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        // '',
        // 'getting-started',
        // 'customize',
        // 'advanced',
        // '',
        // 'About me',
        // 'News'
      ]
    }
  ]
}

