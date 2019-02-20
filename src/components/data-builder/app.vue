<template>
  <div>
    <router-view :config="config"></router-view>
  </div>
</template>
<script>

import DataBuilderManager from '../../app/Managers/DataBuilderManager'

export default {
  data () {
    return {
      config: DataBuilderManager
    }
  }
}
</script>
