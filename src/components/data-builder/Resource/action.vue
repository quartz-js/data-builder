<template>
  <div class="c" v-if="executor && executor.data_builder">
    <v-dialog v-model="showDialog" width="500">
      <v-btn color="primary" flat icon slot="activator" class='ma-0 mx-1'><v-icon>adjust</v-icon></v-btn>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>{{ $t('$quartz.core.execute.title')}}</v-card-title>
        <data-builder-form class='content' :dataBuilder="executor.data_builder" :form="report.form" :errors="report.errors" />

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn primary @click="generate(executor, report.form)">{{ $t('$quartz.core.execute.action') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>
<script>

import { DataBuilderApi } from '../../../app/Api/DataBuilderApi'
import DataBuilderForm from '../form'

export default {
  props: ['id', 'form', 'api', 'handler'],
  components: {
    DataBuilderForm
  },
  data () {
    return {
      showDialog: false,
      report: {
        errors: [],
        form: {}
      },
      executor: null
    }
  },
  mounted () {
    if (this.form) {
      this.report.form = this.form
    }

    this.load()
  },
  methods: {

    load () {

      var dba = new DataBuilderApi()

      this.api.show(this.id, {'include': 'data_builder'}).then(response => {
        this.executor = response.body.data
        this.executor.data_builder = response.body.included[0].attributes
        this.executor.data_builder.id = response.body.included[0].id
      }).catch(response => {

      })
    },
    generate (executor, data) {
      this.report.errors = []

      this.handler(executor.id, { data: data })
        .then(response => {
          this.$notify({
            'group': 'system',
            'type': 'info',
            'text': 'Your request has been sent',
            'title': 'Information',
            'duration': 2000
          })

          this.showDialog = false
        })
        .catch(response => {
          if (response.status === 400) {
            this.report.errors = response.body.errors
            return
          }

          this.$notify({
            'group': 'system',
            'type': 'error',
            'text': response.body.errors[0].message,
            'title': 'An error has occurred',
            'duration': 10000
          })
        })
    }

  }
}
</script>
<style scoped>
  .c {
    display: inline-block;
  }
</style>