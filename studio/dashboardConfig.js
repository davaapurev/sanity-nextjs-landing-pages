export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f841d47da70929405605b5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w39rwaxx',
                  apiId: '7e9b3fc8-1257-493e-847f-3baa5720f2d2'
                },
                {
                  buildHookId: '60f841d429d5cf23f23cea5b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pqbt4fck',
                  apiId: 'a7ca9d83-6ebc-4324-9aeb-d4283f6e7db7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davaapurev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pqbt4fck.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
