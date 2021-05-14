const appConfig = require("./web-config.json");

module.exports = {
  title: 'Development Documentation',
  tagline: 'Documentation to kick start developers with the team\'s project' ,
  url: 'https://devdoc.com',
  baseUrl: '/',
  plugins: ['my-loaders', require.resolve('docusaurus-lunr-search')],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'devdoc', // Usually your GitHub org/user name.
  projectName: 'devdoc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DevDoc',
      logo: { alt: 'Project Logo', src: 'img/logo.svg' },
      items: [
        { type: 'doc', docId: 'introduction/getting-started', label: 'Docs', position: 'left' },
        { to: '/api-reference', label: 'API', position: 'left' },
        { href: appConfig.links.github, position: 'right', className: 'header-link header-github-link', 'aria-label': 'GitHub repository'},
        { href: appConfig.links.storybook, position: 'right', className: 'header-link header-storybook-link', 'aria-label': 'Component Library'},
        { href: appConfig.links.grafana, position: 'right', className: 'header-link header-grafana-link', 'aria-label': 'Grafana Dashboard'},
        { href: appConfig.links.rabbitmq, position: 'right', className: 'header-link header-rabbitmq-link', 'aria-label': 'RabbitMQ Console'},
        { href: appConfig.links.s3filestorage, position: 'right', className: 'header-link header-s3-link', 'aria-label': 'S3 File Storage'},
        { href: appConfig.links.kubernetes, position: 'right', className: 'header-link header-kubernetes-link', 'aria-label': 'Kubernetes Platform'},
        { href: appConfig.links.artifactory, position: 'right', className: 'header-link header-jfrog-link', 'aria-label': 'Artifactory'},
        { href: appConfig.links.confluence, position: 'right', className: 'header-link header-confluence-link', 'aria-label': 'Wiki Workspace'},
        { href: appConfig.links.jira, position: 'right', className: 'header-link header-jira-link', 'aria-label': 'Sprint Planning Dashboard'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: "API Reference", to: '/api-reference' }
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', href: 'https://devdocs.com/privacy-policy' },
            { label: 'Terms and Condition', href: 'https://devdocs.com/terms-and-conditions' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevDocs. Built with Docusaurus and Swagger UI`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/awarenessxz/docsaurus-boilerplate/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.css'),
        },
      },
    ],
  ],
};
