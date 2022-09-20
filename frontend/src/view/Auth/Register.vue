<template>
    <div class="lg:hidden">
        <div class="container mx-auto">
            <div class="header">
                <div class="text-center bg-[#3b5a99] flex items-center h-[50px] mb-4 justify-center">
                    <p class="text-white font-bold text-[14px] ">
                        Join facebook
                    </p>
                </div>
            </div>
            <div class="mx-5">
                <div v-if="step ===1 " id="user_info" class="text-center mb-6">
                    <div class="font-extrabold text-[20px]">
                        What's your name?
                    </div>
    
                    <small class="text-[#6d777d]">Enter the name you use in real life.</small>
                </div>
                  <div v-if="step ===2 " id="user_info" class="text-center mb-6">
                    <div class="font-extrabold text-[20px]">
                        What's your date of birth?
                    </div>
    
                    <small class="text-[#6d777d]">Choose your date of birth. You can always make this private later.</small>
                </div>
                    <div v-if="step ===3 " id="user_info" class="text-center mb-6">
                    <div class="font-extrabold text-[20px]">
                      Enter your email address
                    </div>
    
                    <small class="text-[#6d777d]">Enter the email address at which you can be contacted. You can hide this from your profile later.</small>
                </div>
                 <div v-if="step ===4 " id="user_info" class="text-center mb-6">
                    <div class="font-extrabold text-[20px]">
                      Select your gender
                    </div>
    
                    <small class="text-[#6d777d]">Enter your real life gender.</small>
                </div>
                 <div v-if="step === totalStep" id="user_info" class="text-center mb-6">
                    <div class="font-extrabold text-[20px]">
                      Choose a password
                    </div>
    
                    <small class="text-[#6d777d]">Create a password with at least 6 characters. It should be something that others couldn't guess.</small>
                </div>
                <form>
                    <input type="hidden">
                    <div v-if="step === 1">
                        <Alert v-if="Object.keys(errorMsg).length">
                            <div v-for="(field, i) of Object.keys(errorMsg)" :key="i">
                                <div v-for="(error,ind) of errorMsg[field] || []" :key="ind" class="text-sm md:text-sm">
                                    *{{error}}
                                </div>
                            </div>
                        </Alert>
                        <form class="" @submit.prevent="validate">
    
                            <div class="flex space-x-4 items-center justify-center">
                                <div class="md:w-full">
                                    <label for="">First name</label>
                                    <input type="text" v-model="user.firstname" name="firstname" class="w-full  rounded-[6px] text-[16px] p-[14px_16px] ring-[#6d777d] form-input focus:ring-0 placeholder:text-gray-300" placeholder="firsname">
                                </div>
                                <div class="md:w-full ">
                                    <label for="">Surname</label>
    
                                    <input type="text" v-model="user.surname" name="surname" class="w-full rounded-[6px] text-[16px] p-[14px_16px] placeholder:text-gray-300 form-input focus:ring-0" placeholder="surname">
                                </div>
                            </div>
                            <div class="w-10/12 md:w-6/12 mx-auto mt-4 ">
                                <button class="w-full bg-[#1679fb] rounded-[6px] py-3 " v-if="step !== totalStep">
                                    <span class="text-[15px] font-black text-white">Next</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-if="step === 2">
                         <Alert v-if="Object.keys(errorMsg).length">
                            <div v-for="(field, i) of Object.keys(errorMsg)" :key="i">
                                <div v-for="(error,ind) of errorMsg[field] || []" :key="ind" class="text-sm md:text-sm">
                                    *{{error}}
                                </div>
                            </div>
                        </Alert>
                        <form class="" @submit.prevent="validate2">
                            <div class="flex space-x-4 items-center justify-center w-full">
                                  <div id="dob" class="w-full">
                                    <div class="flex items-center mb-1">
                                        <p class="text-[12px] capitalize text-gray-400">
                                            date of birth
                                        </p>
                                        <div class="h-3 w-3 rounded-full bg-black ml-1">
                                            <QuestionMarkCircleIcon class="text-white" />
                                      
                                        </div>
                                    </div>
                                    <div class="flex space-x-6">
                                        <select name="day" id="" class="w-full"></select>
                                        <select name="month" id="" class="w-full"></select>
                                        <select name="year" id="" class="w-full"></select>
            
                                    </div>
                                </div>
                                <!-- <div class="md:w-full">
                                    <label for="">Email</label>
                                    <input type="email" v-model="user.email" class="w-full  rounded-[6px] text-[16px] p-[14px_16px] ring-[#6d777d] form-input focus:ring-0 placeholder:text-gray-300" placeholder="email">
                                </div> -->
                                <!-- <div class="md:w-full ">
                                    <label for="">Surname</label>
    
                                    <input type="text" v-model="user.surname" class="w-full rounded-[6px] text-[16px] p-[14px_16px] placeholder:text-gray-300 form-input focus:ring-0" placeholder="surname">
                                </div> -->
                            </div>
                            <div class="w-10/12 md:w-6/12 mx-auto mt-4 ">
                                <button class="w-full bg-[#1679fb] rounded-[6px] py-3 " v-if="step !== totalStep">
                                    <span class="text-[15px] font-black text-white">Next</span>
                                </button>
                            </div>
                        </form>
                    </div>
                     <div v-if="step === 3">
                         <Alert v-if="Object.keys(errorMsg).length">
                            <div v-for="(field, i) of Object.keys(errorMsg)" :key="i">
                                <div v-for="(error,ind) of errorMsg[field] || []" :key="ind" class="text-sm md:text-sm">
                                    *{{error}}
                                </div>
                            </div>
                        </Alert>
                        <form class="" @submit.prevent="validate3">
                            <div class="flex space-x-4 items-center justify-center w-full">
                                  
                                <div class="md:w-full">
                                    <label for="">Email address</label>
                                    <input type="email" name="email" v-model="user.email" class="w-full  rounded-[6px] text-[16px] p-[14px_16px] ring-[#6d777d] form-input focus:ring-0 placeholder:text-gray-300" placeholder="email">
                                </div>
                            </div>
                            <div class="w-10/12 md:w-6/12 mx-auto mt-4 ">
                                <button class="w-full bg-[#1679fb] rounded-[6px] py-3 " v-if="step !== totalStep">
                                    <span class="text-[15px] font-black text-white">Next</span>
                                </button>
                            </div>
                        </form>
                    </div>
                      <div v-if="step === 4">
                         <Alert v-if="Object.keys(errorMsg).length">
                            <div v-for="(field, i) of Object.keys(errorMsg)" :key="i">
                                <div v-for="(error,ind) of errorMsg[field] || []" :key="ind" class="text-sm md:text-sm">
                                    *{{error}}
                                </div>
                            </div>
                        </Alert>
                        <form class="" @submit.prevent="validate4">
                            <div class="w-full">
                                  
                                  <div id="gender">
                                    <div class="flex items-center mb-1">
                                        <p class="text-[12px] capitalize text-gray-400">
                                            gender
                                        </p>
                                        <div class="h-3 w-3 rounded-full bg-black ml-1">
                                            <QuestionMarkCircleIcon class="text-white bg-black rounded-full" />
                                       
                                        </div>
                                    </div>
                                    <div class="space-y-6">
                                        <div class=" p-2 flex items-center w-full space-x-4 justify-between">
                                            <label for="female">Female</label>
                                            <input type="radio" v-model="user.gender" name="gender" id="female" value="Female">
                                        </div>
                                        <div class=" p-2 flex items-center w-full  space-x-4 justify-between">
                                            <label for="male">Male</label>
                                            <input type="radio" name="gender" id="male" v-model="user.gender" value="Male">
                                        </div>
                                        <div class=" p-2 flex items-center w-full space-x-4 justify-between">
                                            <label for="other">Others</label>
                                            <input type="radio" name="gender" id="other" v-model="user.gender" value="Other">
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                            <div class="w-10/12 md:w-6/12 mx-auto mt-4 ">
                                <button class="w-full bg-[#1679fb] rounded-[6px] py-3 " v-if="step !== totalStep">
                                    <span class="text-[15px] font-black text-white">Next</span>
                                </button>
                            </div>
                        </form>
                    </div>
                       <div v-if="step === totalStep">
                         <Alert v-if="Object.keys(errorMsg).length">
                            <div v-for="(field, i) of Object.keys(errorMsg)" :key="i">
                                <div v-for="(error,ind) of errorMsg[field] || []" :key="ind" class="text-sm md:text-sm">
                                    *{{error}}
                                </div>
                            </div>
                        </Alert>
                        <form class="" @submit.prevent="validate5">
                            <div class="flex space-x-4 items-center justify-center">
                                <div class="md:w-full">
                                    <label for="">Password</label>
                                    <input type="password" v-model="user.password" name="password" class="w-full  rounded-[6px] text-[16px] p-[14px_16px] ring-[#6d777d] form-input focus:ring-0 placeholder:text-gray-300" placeholder="password">
                                </div>
                                <div class="md:w-full ">
                                    <label for="">Confirm Password</label>
    
                                    <input type="password" v-model="user.password_confirmation" name="password_confirmation" class="w-full rounded-[6px] text-[16px] p-[14px_16px] placeholder:text-gray-300 form-input focus:ring-0" placeholder="surname">
                                </div>
                            <!-- </div> -->
                            </div>
                            <div class="w-10/12 md:w-6/12 mx-auto mt-4 ">
                                <button class="w-full bg-[#1679fb] rounded-[6px] py-3 " v-if="totalStep">
                                    <span class="text-[15px] font-black text-white">Sign Up</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </form>
                <div class="my-4">
                    <router-link class="text-[#436aaf] text-[12px]" :to="{name:'Login'}">Already have an Account?</router-link>
                </div>
            </div>
        </div>
    
        <!-- FOOTER -->
        <Footer class="mt-4" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
    QuestionMarkCircleIcon,
    XMarkIcon,
    PlusIcon
} from '@heroicons/vue/20/solid';
import Footer from '../../components/footer.vue';
import Alert from "../../components/Alert.vue"
import store from '../../store';
const step = ref<number> (1)
const totalStep = ref<number> (5);

const errorMsg = ref<string> ('')

const user = {
    firstname: '',
    surname: '',
    email:'',
    password:'',
    password_confirmation:'',
    gender:''
} as any


function validate() {
    if (step.value === 1) {
        // console.log(user.firstname);
        store.dispatch('mobileReg', user).then(() => {
            step.value++
        }).catch((err) => {
            errorMsg.value = err.response.data.errors
            
        })
        
    }
   
}
function validate3() {
    if (step.value === 3) {
        // console.log(user.firstname);
        store.dispatch('mobileRegEmail', user).then(() => {
            step.value++
        }).catch((err) => {
            errorMsg.value = err.response.data.errors
            
        })
        
    }
   
}
function validate4() {
    if (step.value === 4) {
        // console.log(user.firstname);
        store.dispatch('mobileReggender', user).then(() => {
            step.value++
        }).catch((err) => {
            errorMsg.value = err.response.data.errors
            
        })   
    }
}
function validate5() {
    if (step.value === 5) {
        // console.log(user.firstname);
        store.dispatch('mobileRegPassword', user).then(() => {
            step.value++
        }).catch((err) => {
            errorMsg.value = err.response.data.errors
            
        })   
    }
}
function validate2() {
    if (step.value === 2) {
        // console.log(user.firstname);
        // store.dispatch('mobileReg', user).then(() => {
            step.value++
        // }).catch((err) => {
            // errorMsg.value = err.response.data.errors
            
        // })
        
    }
   
}
</script>

<style scoped>

</style>