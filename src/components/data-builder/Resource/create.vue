<template>
  <q-resource-create v-bind="$attrs">
    <template slot='create' slot-scope="scope">
      <q-text v-model="scope.resource" :attribute="scope.config.getAttribute('name')" :errors="scope.errors" />
      <q-textarea v-model="scope.resource" :attribute="scope.config.getAttribute('description')" :errors="scope.errors" />
      <q-select v-model="scope.resource" :attribute="scope.config.getAttribute('class_name')" :errors="scope.errors" />
      <q-yaml v-model="scope.resource" :attribute="scope.config.getAttribute('class_arguments')" :errors="scope.errors" />
      <q-text v-model="scope.resource" :attribute="scope.config.getAttribute('filter')" :errors="scope.errors" />
      <q-yaml v-model="scope.resource" :attribute="scope.config.getAttribute('input')" :errors="scope.errors" />
      <q-yaml v-model="scope.resource" :attribute="scope.config.getAttribute('mock_data')" :errors="scope.errors" />
    </template>
  </q-resource-create>
</template>