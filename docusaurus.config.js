module.exports = {
  title: 'Development Documentation',
  tagline: 'There is never a lack of good documentation',
  url: 'https://devdoc.com',
  baseUrl: '/',
  plugins: ['my-loaders'], // custom loader
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
        { href: 'https://github.com/facebook/docusaurus', position: 'right', className: 'header-link header-github-link', 'aria-label': 'GitHub repository'},
        { href: 'https://github.com/facebook/docusaurus', position: 'right', className: 'header-link header-grafana-link', 'aria-label': 'Grafana Dashboard'},
        { href: 'https://github.com/facebook/docusaurus', position: 'right', className: 'header-link header-rabbitmq-link', 'aria-label': 'RabbitMQ Console'},
        { href: 'https://github.com/facebook/docusaurus', position: 'right', className: 'header-link header-s3-link', 'aria-label': 'S3 File Storage'},
        { href: 'https://github.com/facebook/docusaurus', position: 'right', className: 'header-link header-kubernetes-link', 'aria-label': 'Kubernetes Platform'},
        { href: 'https://github.com/facebook/docusaurus', position: 'right', className: 'header-link header-jfrog-link', 'aria-label': 'Artifactory'},
        { href: 'https://github.com/facebook/docusaurus', position: 'right', className: 'header-link header-confluence-link', 'aria-label': 'Wiki Workspace'},
        { href: 'https://github.com/facebook/docusaurus', position: 'right', className: 'header-link header-jira-link', 'aria-label': 'Sprint Planning Dashboard'},
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.css'),
        },
      },
    ],
  ],
};
