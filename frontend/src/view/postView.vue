<template>
   <div>
    <PageComponent title="Home">
<div class="w-full md:w-10/12 lg:w-8/12 rounded-md mx-auto bg-gray-600/10 shadow-md p-5 mb-5">
    <div>
        <div class="flex font-extrabold text-[5rem]">
           {{stores.firstname}}
           {{stores.surname}}

        </div>
        <div class=" w-full space-x-4 items-center">
        <div><img src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" class="w-full h-[100vh] object-cover object-top rounded-md" alt=""/></div>
        <!-- <input type="text" name="" id=""> -->

    </div>
        {{router.params.body}}

    </div>
</div>
    </PageComponent>
   </div>
</template>

<script setup lang="ts">
import { computed,onMounted } from 'vue';
import PageComponent from '../components/PageComponent.vue';
import store from '../store';
import { useRouter,useRoute } from 'vue-router';
// import {  } from 'vue';
const stores = computed(()=>store.state.user.data)
const posts = computed(()=>store.state.post.data)

// onMounted(())

const router = useRoute()

store.dispatch("getUser");
if (router.params.id) {
    store.dispatch("getPosts", router.params.body)

}

</script>

<style scoped>

</style>
