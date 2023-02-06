<script setup>
import { Link } from '@inertiajs/vue3';
import { computed } from '@vue/reactivity';
const props = defineProps({
    data: [Array, Object],
    headers: [Array, Object],
});

const tableData = computed(() => {
    if (props.data.hasOwnProperty('data')) {
        return props.data.data
    } else {
        return props.data
    }
});
</script>


<template>
    <!--Table-->
    <table class="w-full">
        <!--Header-->
        <thead>
            <!--Columns-->
            <template v-for="i in headers">
                <th class="bg-slate-200 dark:bg-slate-500 first:rounded-tl-lg last:rounded-tr-lg">
                    {{ i.label }}
                </th>
            </template>
        </thead>


        <tbody>
            <!-- Record -->
            <template v-for="row in tableData">
                <tr class="odd:bg-slate-300 dark:odd:bg-slate-800 group">
                    <!-- Columns -->
                    <template v-for="column in headers">
                        <td class="p-2 group-last:first:rounded-bl-lg group-last:last:rounded-br-lg">
                            {{ row[column.id] }}
                        </td>
                    </template>
                </tr>
            </template>
        </tbody>

    </table>

    <!--Paginete-->
    <div v-if="data.hasOwnProperty('data')" class="flex space-x-1 justify-center items-center ">
        <template v-for="i in data.links">
            <Link :class="i.active ? 'bg-blue-500 text-white border-transparent' : ''" :href="i.url"
                class="hover:bg-blue-500/25 hover:text-blue-500 hover:border-blue-500 duration-300 border min-w-[1.5rem] justify-center rounded-md h-6 mt-5 flex items-center p-2">
            <span v-html="i.label"></span>
            </Link>
        </template>
    </div>
</template>
