<template>
  <div class="home">
    <AppFormInput msg="AppForm prop"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppFormInput from '@/components/AppFormInput.vue'; // @ is an alias to /src

@Component({
  components: {
    AppFormInput,
  },
})
export default class Home extends Vue {}
</script>
