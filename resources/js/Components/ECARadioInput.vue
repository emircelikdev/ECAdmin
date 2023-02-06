<script setup>
defineProps({
    id: {
        type: String,
        default: () => {
            let i = new Date().getTime();

            return i.toString();
        }
    },
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
                <input type="radio" class="input-radio" :id="i[valueKey]"
                    :checked="modelValue === i[valueKey] ? 'selected' : null" @change="$emit('update:modelValue', $event.target.id)"
                    :name="id">
                <!--Label-->
                <label :for="i[valueKey]">{{ i[labelKey]}}</label>

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
