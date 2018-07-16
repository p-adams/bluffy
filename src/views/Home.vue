<template>
  <div class="home">
    <FakerDataForm/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FakerDataForm from '@/components/FakerDataForm.vue'; // @ is an alias to /src

@Component({
  components: {
    FakerDataForm,
  },
})
export default class Home extends Vue {}
</script>
