<script setup>
const props = defineProps({
    label: String,
    errors: [Array, Object],
    modelValue: [String, Number, Date, Object, Array],
    icon: String,
    clearable: Boolean,
    options: [Array, Object],
    valueKey: {
        type: String,
        default: 'id',
    },

    labelKey: {
        type: String,
        default: 'label',
    }
});

const emit = ([
    'update:modelValue'
]);

const addValue = (value) => {
    let i = props.modelValue;
    if (!i.includes(value)) {
        i.push(value);
    } else {
        i.splice(
            i.findIndex(item => item === value), 1
        )
    }
    emit('update:modelValue', i)
}
</script>
<template>

    <div class="input-wrapper">
        <!--Label-->
        <!--Input-->
        <div class="relative flex space-x-2 items-center min-h[2.5rem]">
            <!--İcon-->
            <font-awesome-icon v-if="icon" class="absolute left-3 top-3" :icon="icon" />

            <!--İnput-->
            <div v-for="i in options">
                <input type="checkbox" class="input-checkbox" :value="modelValue" :checked="modelValue.includes(i[valueKey])" :class="icon ? 'pl-10' : ''"
                    @input="$change(addValue(i[valueKey]))" :name="i[valueKey]">
                <!--Label-->
                <label>{{ i[labelKey]}}</label>

            </div>
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
