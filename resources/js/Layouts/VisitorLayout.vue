<script setup>
import { Head, Link } from '@inertiajs/vue3';
import ECADarkModeSwitch from '../Components/ECADarkModeSwitch.vue'
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    header: String,
});
</script>

<template>

    <Head title="Welcome" />

    <!--Container-->
    <div class="flex w-screen h-screen bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-100 duration-100">
        <!--Sidebar-->
        <div class="bg-slate-800 w-[15rem] border-r border-slate-600">
            <span class="font-bold justify-center h-16 items-center w-full flex text-2xl text-slate-200 ">ECAdmin</span>
        </div>
        <!--Content Wrapper-->
        <div class="flex flex-col w-full">
            <!--Topbar-->
            <div
                class="bg-slate-200 dark:bg-slate-800 border-b shadow border-slate-500 w-full flex h-16 items-center p-4 justify-between">
                <div class="leftside">
                    <input type="text" class="rounded-lg dark:bg-slate-500">
                </div>
                <div class="rightside">
                    <div>
                        <ECADarkModeSwitch />
                    </div>
                </div>
            </div>
            <!--Header-->
            <div class="w-full flex  dark:bg-white/10 bg-white/90 p-4 h-16 items-center
            ">
                <slot v-if="$slots.hasOwnProperty('header')" name="header" />
                <span v-else v-text="header"></span>

            </div>
            <div class="p-4  dark:bg-slate-600">
                <slot />
            </div>
        </div>
    </div>


</template>
