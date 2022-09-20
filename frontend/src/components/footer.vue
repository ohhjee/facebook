<template>
    <div>
        <div class="flex justify-between text-center">
            <div class="w-full">
              <div>
                <span class="text-[#90949c] text-[12px]">English (UK)</span>
              </div>
              <div>
                <span class="text-[#90949c] text-[12px]">Français (France)</span>
              </div>
              <div>
                <span class="text-[#90949c] text-[12px]">Español</span>
              </div>
              <div>
                <span class="text-[#90949c] text-[12px]">Deutsch</span>
              </div>
            </div>
            <div class="w-full">
              <div>
                <span class="text-[#90949c] text-[12px]">Hausa</span>
              </div>
              <div>
                <span class="text-[#90949c] text-[12px]">Português (Brasil)</span>
              </div>
              <div>
                <span class="text-[#90949c] text-[12px]">العربية</span>
              </div>
              <div class="flex justify-center">
                <span class="text-[#90949c]"
                  ><PlusIcon class="w-[20px] h-[20px] border"
                /></span>
              </div>
            </div>
          </div>
          <footer class="text-center mt-[2rem]">
            <div class="about">
              <div class="flex justify-center items-center space-x-2">
                <router-link to="#" class="text-[#90949c] text-[12px]"
                  >About</router-link
                >
                <div class="border h-[1px] w-[1px] border-[black]"></div>
                <router-link to="#" class="text-[#90949c] text-[12px]"
                  >Help</router-link
                >
                <div class="border h-[1px] w-[1px] border-[black]"></div>
                <router-link to="#" class="text-[#90949c] text-[12px]"
                  >More</router-link
                >
              </div>
            </div>
            <div class="company_name mt-[.5rem]">
              <div class="text-center">
                <div to="#" class="text-[#90949c] text-[12px]">
                  Meta &#169; 2022
                </div>
              </div>
            </div>
          </footer>
    </div>
</template>

<script setup lang="ts">
 import {
        QuestionMarkCircleIcon,
        XMarkIcon,
        PlusIcon
    } from '@heroicons/vue/20/solid';
</script>

<style scoped>

</style>