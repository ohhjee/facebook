<template>
<div>
<PageComponent title="Home">
<div class="w-full md:w-10/12 lg:w-8/12 rounded-md mx-auto bg-gray-600/10 shadow-md p-5 mb-5">
<div>
<div class="flex w-full space-x-4 items-center">
<div><img src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" class="w-12 h-12 object-cover object-top rounded-full" alt=""/></div>
<!-- <input type="text" name="" id=""> -->

<div class="flex font-extrabold">
{{stores.firstname}}

{{stores.surname}}

</div>
</div>
</div>
</div>
<!-- {{user}} -->
<!-- {{dashboards.data}} -->
<div v-for="dashboard in dashboards" :key="dashboard.id">
    <div class="w-full md:w-10/12 lg:w-8/12 rounded-md mx-auto bg-gray-600/10 shadow-md p-5 mb-5">
        <div class="flex font-extrabold">

<!-- <div v-for="post in posts" :key="post.id"> -->
<a :href="`/postView/${dashboard.body}`">
{{stores.firstname}}
{{stores.surname}}
</a>
<!-- </div> -->
<!-- {{posts.id}} -->

</div>
{{dashboard.body}}
<hr class="border-gray-500 my-3">

<div id="actionsection" class="flex justify-between">
<!-- <div class="">
<HandThumbUpIcon class="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-300 ease-out delay-100"/>
</div> -->
<!-- <div>
<ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6"/>
</div> -->
<div>
<ShareIcon class="w-6 h-6" />
</div>
</div>
</div>


</div>
</PageComponent>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { HandThumbUpIcon,TrashIcon,ChatBubbleOvalLeftEllipsisIcon,ShareIcon } from '@heroicons/vue/24/outline';

import PageComponent from '../components/PageComponent.vue';
import store from '../store';
import { useRouter } from 'vue-router';
// import {  } from 'vue';
const stores = computed(()=>store.state.user.data)
const dashboards = computed(() => store.state.dashboard.data)
const user = computed(()=>store.state.dashboard.user)

const route = useRouter()



store.dispatch("getUser");
store.dispatch("dashboard");

</script>

<style scoped>

</style>
