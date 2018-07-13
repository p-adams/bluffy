<template>
    <div>
        <label :for="label">{{ label }}</label>
        <input
            :type="type"
            v-bind="$attrs"
            v-bind:value="value"
            v-on="appInputListeners"
            width="500px"
        />
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
            type: [Number, String]
        },
        type: {
            type: String,
            default: "text"
        }
    },
    computed: {
        appInputListeners: function() {
            const self = this
            return Object.assign({},
                this.$listeners, {
                    input: function(event: {target: HTMLInputElement}) {
                        self.$emit('input', event.target.value)
                    },
                    blur: function(event: {target: HTMLInputElement}) {
                        self.$emit('blur', event.target.value)
                    }
                })
        }
    }
    
})
</script>
<style lang="scss" scoped>
label {
  font-weight: bolder;
}
</style>

