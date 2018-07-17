<template>
  <div class="create">
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
export default class Create extends Vue {}
</script>
