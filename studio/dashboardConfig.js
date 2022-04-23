export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6263439edf1bec2fda71dea3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-svwb5t2z',
                  apiId: '5980aeb2-b39f-483d-9423-b90621ff8bc0'
                },
                {
                  buildHookId: '6263439e60fece3064e524e2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eqaj37er',
                  apiId: '36915380-b7d1-42e7-92c1-09551ea9fa91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adnanmalkani/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eqaj37er.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
