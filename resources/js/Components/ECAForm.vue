<script setup>
import ECAButton from "../Components/ECAButton.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps({
    title: {
        type: String,
        default: 'Default Title',

    },
    subTitle: {
        type: String,
        default: 'Defaultt '
    },
});
</script>
<template>
    <form @submit.prevent="$emit('submitted')">
        <!--Header-->
        <div class="leading-3 mb-4">
            <!--Title-->
            <h3 class="text-lg font-semibold">{{ title }}</h3>


            <!--Sub Title-->
            <span class="text-xs text-slate-500">{{ subTitle }}</span>
        </div>
        <!--Content-->
        <div class="grid grid-cols-6 gap-4">
            <slot />
        </div>

        <!--Action Buttons Area-->

        <div class="mt-4">

            <slot v-if="$slots.hasOwnProperty('footer')" name="footer" />
            <div class="flex justify-end space-x-2">
                <!--Reset-->
                <ECAButton color="rose" :label="t('command.reset')" @click.prevent="$emit('reset')" />

                <!--Save-->
                <ECAButton color="green" :label="t('command.submit')" />

            </div>
        </div>
    </form>


</template>
