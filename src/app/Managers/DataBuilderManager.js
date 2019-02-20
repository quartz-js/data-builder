import { DataBuilderApi } from '../Api/DataBuilderApi'
import { container, Attributes, Manager } from '@railken/quartz-core'

export default new Manager({
  name: 'data-builder',
  route: 'data-builders',
  manager: new DataBuilderApi(),
  icon: require('../../assets/data-builder-icon.svg'),
  attributes: [
    new Attributes.Id(),
    new Attributes.Base('name'),
    new Attributes.Base('description'),
    new Attributes.Base('filter'),
    new Attributes.Select('class_name').setOptions(container.get('api.index').data_builders.map(val => {
      return {value: val, label: val}
    })),
    new Attributes.Base('class_arguments'),
    new Attributes.Base('input'),
    new Attributes.Base('mock_data'),
    new Attributes.DateTime('created_at'),
    new Attributes.DateTime('updated_at')
  ]
})
