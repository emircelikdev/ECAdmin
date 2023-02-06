<script setup>
defineProps({
    label: String,
    errors: [Array, Object],
    modelValue: [String, Number, Date, Boolean],
    icon: String,
    clearable: Boolean,
    labelKey: {
        type: String,
        default: 'label'
    },
    valueKey: {
        type: String,
        default: 'id'
    },
    options: [Array, Object],
    placeHolder: {
        type: String,
        default: "Seçiniz",
    },
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
            <select class="input" @change="$emit('update:modelValue', $event.target.value)">
                <option value="" class="text-slate-400">{{ placeHolder }}</option>
                <template v-for="i in options">
                    <option :selected="modelValue === i[valueKey] ? 'selected' : null" :value="i[valueKey]">{{
                    i[labelKey] }}</option>
                </template>
            </select>

            <!--Clearable Button-->
            <div v-if="clearable">
                <div v-if="modelValue" @click="$emit('update:modelValue', '')"
                    class="absolute duration-300 right-8 top-1 rounded-full cursor-pointer text-white bg-rose-500 dark:bg-red-500 px-2 py-1 ">
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
