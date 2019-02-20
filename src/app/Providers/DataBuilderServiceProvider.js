import { ServiceProvider } from '@railken/quartz-core'
import { container } from '@railken/quartz-core'

export class DataBuilderServiceProvider extends ServiceProvider {
  register() {

    this.addRoutes('app', require('./../../routes/data-builder.js'))

    this.addData({
      name: 'data-builder',
      icon: require('../../assets/data-builder-icon.svg'),
      tags: ['system'],
      route: { name: 'data-builders.index' },
    })

    this.addLang({
      'en': require('../../../lang/data-builder/en.json'),
      'it': require('../../../lang/data-builder/it.json')
    })
  }
}
