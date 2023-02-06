<script setup>
defineProps({
    label: String,
    errors: [Array, Object],
    modelValue: [String, Number, Date],
    icon: String,
    clearable: Boolean
});
</script>
<template>

    <div class="input-wrapper">
        <!--Label-->
        <label class="input-label" for="">{{ label }}</label>
        <!--Input-->
        <div class="relative">
            <!--İcon-->
            <font-awesome-icon v-if="icon" class="absolute left-3 top-3" :icon="icon" />

            <!--İnput-->
            <input type="text" class="input" :value="modelValue" :class="icon ? 'pl-10' : ''"
                @input="$emit('update:modelValue', $event.target.value)">

            <!--Clearable Button-->
            <div v-if="clearable">
                <div v-if="modelValue" @click="$emit('update:modelValue', '')"
                    class="absolute duration-300 right-3 top-1 rounded-full cursor-pointer text-white bg-rose-500 dark:bg-red-500 px-2 py-1 ">
                    x
                </div>
            </div>
        </div>
        <!--Error-->
        <div v-if="errors">
            <template v-for="i in errors">
                <span class="input-error">{{ i }}</span>
            </template>
        </div>
    </div>
</template>
