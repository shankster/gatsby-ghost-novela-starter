module.exports = {
  siteUrl: "https://mostlyatechnicalblog.com",
  postsPerPage: 12,
  siteTitleMeta: "Mostly a Technical Blog",
  siteDescriptionMeta:
    "Ideas, thoughts and more",
  shareImageWidth: 1000,
  shareImageHeight: 523,
  shortTitle: "MATB",
  siteIcon: "favicon.png",
  backgroundColor: "#e9e9e9",
  themeColor: "#15171A",
  apiUrl: "https://ghost-3-blog.herokuapp.com",
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://mostlyatechnicalblog.com/",
      },
      {
        label: "Contact",
        url: "https://mostlyatechnicalblog.com/contact",
      },
    ],
  },
  footer: {
    copyright: "Mostly a Technical Blog",
    navigation: [
      {
        label: "Home",
        url: "https://mostlyatechnicalblog.com/",
      },
      {
        label: "Sitemap",
        url: "https://mostlyatechnicalblog.com/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://mostlyatechnicalblog.com/rss.xml",
      },
      {
        label: "Contact",
        url: "https://mostlyatechnicalblog.com/contact",
      },
      {
        label: "External Link",
        url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      },
    ],
  },
  subscribeWidget: {
    visible: true,
    title: "Subscribe to MATB",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Mostly a Technical Blog",
  },
  socialLinks: {
    twitter: "https://twitter.com/init5n",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/nilotpalrc",
    linkedin: "https://linkedin.com/in/nilotpal-roychowdhury",
    github: "https://github.com/shankster",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact Me",
    successMessage: "I’ll get in touch with you soon.",
  },
  metadata: {
    title: "Mostly a Technical Blog",
    description:
      "Ideas, thoughts and more",
  },
  twitterCard: {
    title: "Mostly a Technical Blog",
    description:
      "Ideas, thoughts and more",
    imageUrl: "twitterImage.png",
    username: "@init5n",
  },
  facebookCard: {
    title: "Mostly a Technical Blog",
    description:
      "Ideas, thoughts and more",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },
  siteTitle: "Mostly a Technical Blog",
  siteDescription:
    "Ideas, thoughts and more",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl:
    "https://ghost.theasdfghjkl.com/content/images/2020/05/draftbox-colored-icon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "alternateLogo.svg",
  themeConfig: {
    variables: [
      { varName: "--accent-color", value: "#6166DC" },
      { varName: "--accent-color-dark", value: "#E9DAAC" },
      { varName: "--success-color", value: "#46B17B" },
      { varName: "--success-color-dark", value: "#46B17B" },
      {
        varName: "--merriweather-font",
        value: `Merriweather`,
      },
      {
        varName: "--merriweather-font-bold",
        value: `700`,
      },
      {
        varName: "--system-font",
        value: `system-ui`,
      },
      {
        varName: "--system-font-normal",
        value: `400`,
      },
      {
        varName: "--system-font-semibold",
        value: `600`,
      },
      {
        varName: "--system-font-bold",
        value: `700`,
      },
      {
        varName: "--monospace-font",
        value: `Source Code Pro`,
      },
      {
        varName: "--monospace-font-normal",
        value: `400`,
      },
    ],
    fonts: [
      {
        family: "Merriweather",
        variants: ["700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Source Code Pro",
        variants: ["400"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
