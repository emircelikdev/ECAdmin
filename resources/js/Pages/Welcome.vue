<script setup>
import VisitorLayout from "../Layouts/VisitorLayout.vue";
import ECAButton from "../Components/ECAButton.vue";
</script>
<template>
    <VisitorLayout header="Buton Komponenti">
        <ECAButton :link="route('dashboard')" color="rose" label="emir" icon="moon" />
    </VisitorLayout>
</template>
