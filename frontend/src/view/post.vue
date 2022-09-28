<template>
<div>
<PageComponent title="Post">
<div class="w-full md:w-10/12 lg:w-8/12 rounded-md mx-auto bg-gray-600/10 shadow-md p-5 mb-5">
<div>
<div class="flex w-full space-x-4">
<div><img src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" class="w-12 h-12 object-cover object-top rounded-full" alt=""/></div>
<!-- <input type="text" name="" id=""> -->
<form class="w-full" @submit.prevent="PostMind">
<div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
<div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
    <label for="comment" class="sr-only">Your comment</label>
<textarea id="comment" rows="1" v-model="fill.body"  class="px-0 w-full text-sm text-gray-900 scroll-mx-0 resize-none border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="What's on your mind"></textarea>
</div>
<div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
<button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
Post Mind
</button>
<div class="flex pl-0 space-x-1 sm:pl-2">
<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
<span class="sr-only">Attach file</span>
</button>
<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
<span class="sr-only">Set location</span>
</button>
<button type="button" class="inline-flex relative justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
<svg aria-hidden="true" class="w-5 h-5 relative" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
<input type="file" class="top-0 left-0 right-0 bottom-0 opacity-0 absolute" name="" id="">
<span class="sr-only">Upload image</span>
</button>
<!-- <input type="text" v-model="fill.name"> -->
</div>
</div>
</div>
</form>
</div>
</div>
<div class="text-center text-red-500 my-2">
    {{errorMsg}}

</div>
</div>
<div v-if="errorMsg" class="text-center text-red-500">
   The body field is required
</div>
<div v-else>
    <div v-if="loading" class="flex items-center justify-center">
<button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
</svg>
Loading...
</button>
</div>
<div v-else>
<div v-if="posts.length">
<div v-for="post in posts" :key="post.id">
<div class="w-full md:w-10/12 lg:w-8/12 rounded-md mx-auto bg-gray-600/10 shadow-md p-5 mb-5">
<div class="flex font-semibold items-center basis-1 text-[1.2rem]">
<a :href="`/postView/${post.body}`" class="flex">
<div class="mr-1">
{{stores.firstname}}
</div>
    <!-- {{post.id}} -->
<div class="">
    {{stores.surname}}
</div>
</a>
<small class="text-xs ml-1">{{post.created_at}}</small>
</div>
<div class="text-sm">
{{post.body}}
</div>
<hr class="border-gray-500 my-3">
<div id="actionsection" class="flex justify-between">
<!-- <div>
<HandThumbUpIcon class="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-300 ease-out delay-100" @click="like(post.id)"/>
{{likes}}
</div> -->
<!-- <div>
<ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6"/>
</div> -->
<div>
<ShareIcon class="w-6 h-6" />
</div>
<div v-if="stores">

    <div class="cursor-pointer">
    <TrashIcon @click="deletePost(post.id)" v-if="stores" class="w-6 h-6" />
    </div>
</div>
</div>
</div>
</div>
</div>
<div v-else class="text-center font-bold">
No Post
</div>

</div>
</div>
<!-- {{posts.body}} -->
</PageComponent>
</div>
</template>

<script setup lang="ts">
import { HandThumbUpIcon,TrashIcon,ChatBubbleOvalLeftEllipsisIcon,ShareIcon } from '@heroicons/vue/24/outline';
import { computed,ref } from 'vue';
import PageComponent from '../components/PageComponent.vue';
import store from '../store';
import { useRouter } from 'vue-router';
// import {  } from 'vue';
const stores = computed(()=>store.state.user.data)
const posts = computed(()=>store.state.post.data)

const loading = computed(() => store.state.post.loading) as any

const likes=computed(()=>store.state.like.data)

store.dispatch("getUser");


const errorMsg=ref<string>('')
    const route = useRouter()
    let fill = ref({
        body: ''
    })




function PostMind() {

        store.dispatch('postmind', fill.value).then((data) => {
store.dispatch("getPost");
route.push({
name: 'postView',
params: {id: data.data.id}
})
    })
        .catch((err) => {
 if(err.response.status === 422){
        errorMsg.value = err.response.data.errors.body
        loading.value=false
      }
console.log(errorMsg.value);

})
}
store.dispatch("getPost");

function deletePost(post) {
store.dispatch('deletePost', post).then((res) => {
store.dispatch("getPost")
})
}


// function like(post) {

//     store.dispatch('likePost', post).then((res) => {
//     store.dispatch("getPost")
//     // console.log(post);
// route.push({
// name: 'Post',
// params: {id: res.data.id}
// })
// })
// }
</script>

<style scoped>

</style>
