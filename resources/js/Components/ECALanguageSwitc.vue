<script setup>
import { router } from '@inertiajs/core';
import { usePage } from '@inertiajs/vue3';
import { onMounted, onUpdated, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import Langs from "../sources/Langs/langs";
const { langs } = Langs();

const showLangMenu = ref(false);

const { locale } = useI18n();

const changeLang = (lang) => {
    locale.value = lang;
    showLangMenu.value = false;

    router.post(route('update-lang'), { "lang": lang });
}


//add them to the pages you use
// const updateLang = () => {
//    locale.value = locale.value = usePage().props.lang;
// }
// onMounted(() => {
//    updateLang();
// });

// onUpdated(() => {
//    updateLang();
// })


</script>
<template>

    <div class="p-3">
        {{ $t('helloWorld') }}
    </div>
    <div class="p-3">
        <button class="bg-red-300 rounded-lg p-2 text-slate-800" @click="showLangMenu = !showLangMenu">
            Aktif Diliniz şuanda
            {{ $t('langs.'+ locale) }}
            <b>Değiştirmek için tıklayın</b>
        </button>
        <div v-for="lang in langs" v-if="showLangMenu">
            <span v-if="locale != lang.id" v-text="$t('langs.' + lang.id)" @click="changeLang(lang.id)"></span>
        </div>

    </div>
</template>
