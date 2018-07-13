<template>
    <div>
        <label :for="label">{{ label }}</label>
        <textarea
            v-bind:value="value"
            @change="e => $emit('input', e.target.value)"
        ></textarea>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        label: {
            type: String
        },
        value: {
            type: [String, Number]
        }
    }
})
</script>
<style lang="scss" scoped>
label {
  font-weight: bolder;
}
</style>


