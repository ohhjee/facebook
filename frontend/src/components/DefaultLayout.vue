<template>
     <div class="min-h-full">
        <Disclosure as="nav" class="bg-[#242526]" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex space-x-6">
                            <div class="w-10 h-10" id="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" class="rounded-full" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                    </div>
                     <div class="search relative flex items-center hidden xl:flex">
                        <label for="search" class="absolute  left-[4px]">
                             <MagnifyingGlassIcon class="w-4 h-4  text-[#606770]" />
                        </label>
                        <input type="text" class="rounded-[55px] focus:ring-0 p-1 bg-[#3a3b3c] pl-[1.4rem] text-white focus:border-[0] placeholder:text-[#606770] border-0" name="" placeholder="Search Facebook" id="search">
                    </div>
                    <div class=" xl:hidden">
                        <div class="h-10 w-10 flex items-center justify-center bg-[#18191a] rounded-full">
                             <MagnifyingGlassIcon class="w-4 h-4  text-[#606770]" />

                        </div>
                    </div>
                        </div>
                    </div>
                    <div class="hidden md:flex">
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <router-link v-for="item in navigation" :key="item.name" :to="item.to" active-class="bg-gray-900 text-white" :class="[this.$route.name === item.to.name ? '' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']">{{ item.name }}</router-link>
                            </div>
                        </div>
                        <div class="ml-4 flex items-center md:ml-6">
                            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span class="sr-only">View notifications</span>
                          <!-- <BellIcon class="h-6 w-6" aria-hidden="true" /> -->
                        </button>
     <div class="flex space-x-5">
                    <div id="logo1">
                        <div class="rounded-full bg-[rgba(0,0,0,.5)] items-center justify-center flex h-10 w-10">
                            <div class="grids">
                                <img src="../assets/images/grid.png" class="text-white" alt="">
                            </div>
                        </div>
                    </div>

                    <div id="logo1">
                        <div class="rounded-full bg-[rgba(0,0,0,.5)] items-center justify-center flex h-10 w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>
                        </div>
                    </div>
                    <div id="logo1">
                        <div class="rounded-full bg-[rgba(0,0,0,.5)] items-center justify-center flex h-10 w-10">

                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"/></svg>
                        </div>
                    </div>

                    
                </div>
                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative ml-3">
                                <div>
                                    <MenuButton class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span class="sr-only">Open user menu</span>
                                       <div id="logo1">
                        <img src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" class="rounded-full object-cover object-center bg-[rgba(0,0,0,.5)] items-center justify-center flex h-10 w-10"/>
                        
                        <!-- </div> -->
                    </div>
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem v-slot="{ active }">
                                        <a @click="logout" :class="['block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Sign out</a>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                         <div class="flex space-x-5">
                    <div id="logo1">
                        <div class="rounded-full bg-[rgba(0,0,0,.5)] items-center justify-center flex h-10 w-10">
                            <div class="grids">
                                <img src="../assets/images/grid.png" class="text-white" alt="">
                            </div>
                        </div>
                    </div>

                    <div id="logo1">
                        <div class="rounded-full bg-[rgba(0,0,0,.5)] items-center justify-center flex h-10 w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>
                        </div>
                    </div>
                    <div id="logo1">
                        <div class="rounded-full bg-[rgba(0,0,0,.5)] mr-3 items-center justify-center flex h-10 w-10">

                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"/></svg>
                        </div>
                    </div>
                </div>
                        <!-- Mobile menu button -->
                        <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>
    
            <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <router-link v-for="item in navigation" :key="item.name" as="a" :to="item.to" active-class="bg-gray-900 text-white" :class="[ this.$route.name === item.to.name ? '' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']">{{ item.name }}</router-link>
                </div>
                <div class="border-t border-gray-700 pt-4 pb-3">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                           <div id="logo1">
                        <img src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" class="rounded-full object-cover object-center bg-[rgba(0,0,0,.5)] items-center justify-center flex h-10 w-10"/>
                        
                     
                    </div>
                        </div>
                        <div class="ml-3">
                            <!-- <pre>{{user}}</pre> -->
                            <div class="text-base font-medium leading-none text-white mb-[5px]">{{ stores.firstname }}</div>
                            <div class="text-sm font-medium leading-none text-gray-400">{{ stores.email }}</div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span class="sr-only">View notifications</span>
                        <!-- <BellIcon class="h-6 w-6" aria-hidden="true" /> -->
                      </button>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                        <DisclosureButton as="a" @click="logout" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer">Sign out</DisclosureButton>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    
        <router-view></router-view>
        <!-- <Notification/> -->
    </div>
</template>

<script setup lang="ts">
import { PlayCircleIcon , HomeIcon, PuzzlePieceIcon, TvIcon, BuildingStorefrontIcon, UserCircleIcon,Bars3Icon, XMarkIcon, MagnifyingGlassIcon} from '@heroicons/vue/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

import { computed } from 'vue';
import store from '../store';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';




const router = useRouter()


function logout() {
    store.dispatch('logout').then(()=>{

        router.push({
            name: "Login"
        })
    })
}
const user =useStore()
   store.dispatch("getUser");
//    store.dispatch('getUser')
const navigation = [
    { name: 'Dashboard', to: { name: 'Dashboard' } },
    { name: 'Post', to: { name: 'Post' } },
]
const stores = computed(()=> user.state.user.data)
// const stores =  user.state.user

</script>

<style lang="scss" scoped>

    #logo1{
    svg{
        fill: white;
    }
}
#logo{
    svg{
        fill: #385898;
        background: white;
    }
}
</style>


  
<!-- <script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon,UserCircleIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Notification from './Notification.vue';


const store = useStore()
const router = useRouter()
const user = computed(() => store.state.user)

function logout() {
    store.dispatch('logout').then(()=>{

        router.push({
            name: "Login"
        })
    })
}
// const user = computed(()=>store.state.user)

store.dispatch('getUser')
const navigation = [
    { name: 'Dashboard', to: { name: 'Dashboard' } },
    { name: 'surveys', to: { name: 'Surveys' } },
]
</script> -->