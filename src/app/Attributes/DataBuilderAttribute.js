import { Attributes } from '@railken/quartz-core'
import { DataBuilderApi } from './../Api/DataBuilderApi'

export class DataBuilderAttribute extends Attributes.BelongsTo {
  constructor (name, options) {
    super(name, new DataBuilderApi())

    this.resourceConfig = () => { return require('./../Managers/DataBuilderManager').default };

    this.createComponent = {
      component: () => import('../../components/data-builder/Resource/create')
    }

    this.updateComponent = {
      component: () => import('../../components/data-builder/Resource/edit')
    }
  }
};
