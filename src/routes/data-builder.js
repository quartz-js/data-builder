const routes = [{
  path: 'data-builders',
  component: () => import('./../components/data-builder/app'),
  children: [
    {
      path: '',
      name: 'data-builders.index',
      component: () => import('./../components/data-builder/Page/index')
    },
    {
      path: ':id',
      name: 'data-builders.show',
      component: () => import('./../components/data-builder/Page/show')
    }
  ]
}]
module.exports = routes;
