<template>
  <q-resource-show v-bind="$attrs">
    <template slot="show" slot-scope="scope">
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('name')" />
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('description')" />
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('input')" />
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('mock_data')" />
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('class_name')" />
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('class_arguments')" />
      <q-show-text :resource="scope.resource" :attribute="scope.config.getAttribute('filter')" />
    </template>
    <template slot='actions' slot-scope="scope">
      <edit :resource="scope.resource" v-bind="$attrs"/>
    </template>
  </q-resource-show>
</template>

<script>

import Edit from './edit'

export default {
  components: {
    Edit
  }
}
</script>
