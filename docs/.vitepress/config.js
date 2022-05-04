// ./docs/.vitepress/config.js

module.exports = {
    base: '/vue-el/',
    title: '@obewds/vue-el',
    description: 'A documentation site for the VueEl component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vue-el" },
            { text: "GitHub", link: "https://github.com/obewds/vue-el" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
