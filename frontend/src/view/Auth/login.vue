<template>
    <div>
        <div class="hidden lg:block min-h-screen">

            <!-- LOGIN -->
            <div id="fixed" class="container mx-auto  min-h-screen">
                <div class="w-10/12 min-h-screen mx-auto">
                    <div class="flex space-x-[1rem]  items-center min-h-screen">
                        <div class=" w-1/2">
                            <div class="text-6xl text-blue-600 font-bold">
                                Facebook
                            </div>
                            <div class="text-3xl mt-4">
                                {{ errorMsg}}
                                Facebook helps you connect and share with the people in your life.
                            </div>
                        </div>
                        <div class="w-6/12 xl:w-5/12">
                            <div class="flex justify-end">
                                <div class=" w-10/12">
                                    <div class="shadow-[1px_1px_11px_rgba(0,0,0,0.3)] p-3 rounded-[8px]">
                                        <form class="space-y-4" @submit.prevent="login">
                                            <input type="hidden">
                                            <div>
                                                <input type="email" name="email" v-model="user.email" class="w-full rounded-[6px] text-[16px] p-[14px_16px]  form-input focus:ring-0 placeholder:text-gray-300" placeholder="Email address or phone number">
                                            </div>
                                            <div>
                                                <input type="password" name="password" v-model="user.password" class="w-full rounded-[6px] text-[16px] p-[14px_16px] placeholder:text-gray-300 form-input focus:ring-0" placeholder="Password">
                                            </div>
                                            <div>
                                                <button class="w-full bg-blue-600 font-bold p-3 rounded-[8px] text-white">
                                                    log in
                                                </button>
                                            </div>
                                            <div class="text-center">
                                                <router-link to="#" class="text-blue-400 text-[12px]">
                                                    Forget password?
                                                </router-link>
                                            </div>
                                            <hr class="mb-4">
                                            <div class="mb-5">
                                                <div class="create flex items-center justify-center">
                                                    <div class="bg-green-600 text-center text-white py-3 text-[14px] rounded-[8px] w-1/2" @click="registrationModal">
                                                        Create account
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="mx-auto py-8">
                        <div class="languages">
                          <div class="text-[12px] text-gray-400 space-x-2 flex">
                            <span> English (uk) </span>
                            <span> Hausa </span>
                            <span> Français (France) </span>
                            <span> Português (Brasil) </span>
                            <span> Español </span>
                            <span> العربية </span>
                            <span> Bahasa Indonesia </span>
                            <span> Deutsch </span>
                            <span> chinko </span>
                            <span> italiano </span>
                            <span> idk </span>
                
                            <span class="border h-4 w-8 flex items-center justify-center">
                              <PlusIcon class="w-3 h-3" />
                            </span>
                          </div>
                          <hr class="my-4" />
                          <div class="mb-4">
                            <div class="text-[12px] text-gray-400 space-x-2 flex">
                              <span> English (uk) </span>
                              <span> Hausa </span>
                              <span> Français (France) </span>
                              <span> Português (Brasil) </span>
                              <span> Español </span>
                              <span> العربية </span>
                              <span> Bahasa Indonesia </span>
                              <span> Deutsch </span>
                              <span> chinko </span>
                              <span> italiano </span>
                              <span> idk </span>
                            </div>
                            <div class="text-[12px] text-gray-400 space-x-2 flex">
                              <span> English (uk) </span>
                              <span> Hausa </span>
                              <span> Français (France) </span>
                              <span> Português (Brasil) </span>
                              <span> Español </span>
                              <span> العربية </span>
                              <span> Bahasa Indonesia </span>
                              <span> Deutsch </span>
                              <span> chinko </span>
                              <span> italiano </span>
                              <span> idk </span>
                            </div>
                            <div class="text-[12px] text-gray-400 space-x-2 flex">
                              <span> English (uk) </span>
                              <span> Hausa </span>
                              <span> Français (France) </span>
                              <span> Português (Brasil) </span>
                              <span> Español </span>
                              <span> العربية </span>
                              <span> Bahasa Indonesia </span>
                              <span> Deutsch </span>
                              <span> chinko </span>
                              <span> italiano </span>
                              <span> idk </span>
                            </div>
                          </div>
                          <div class="company">
                            <div class="text-[12px] text-gray-500">Meta &#169; 2022</div>
                          </div>
                        </div>
                      </footer>
                </div>
            </div>
            <!-- REGISTRATION MODAL -->
            <div id="modal" class="fixed w-full top-0">  
                <div class="absolute top-0 bg-[#ffffffab]  w-full flex items-center justify-center mx-auto h-[150vh]">
                    <div class="flex items-center justify-center min-h-screen w-full">
                        <div class="shadow-[1px_1px_11px_rgba(0,0,0,0.3)] bg-white w-5/12 xl:w-4/12 p-3 rounded-[8px]">
                            <div class="w-full">
                                <div class="flex justify-between px-4">
                                  <div>
                                    <div id="title" class="text-[2.5rem] font-bold capitalize">
                                      sign up
                                    </div>
                                    <div class="text-gray-500 text-sm">It's quick and easy.</div>
                                  </div>
                                  <div class="close my-4">
                                    <XMarkIcon class="w-5 h-5 cursor-pointer" @click="closeModal" />
                                  </div>
                                </div>
                              </div>
                            <form class="space-y-4" @submit.prevent="register">
                                <input type="hidden">
                                <div class="space-x-6 flex">
                                    <div>
                                        <input type="text" v-model="user.firstname" name="firstname" class="w-full rounded-[6px] text-[16px] p-[11px] bg-[#f5f6f7] border-[#ccd0d5] form-input focus:ring-0 placeholder:text-gray-300" placeholder="First name">
                                    </div>
                                    <div>
                                        <input type="text" v-model="user.surname" name="surname" class="w-full rounded-[6px] text-[16px] p-[11px] bg-[#f5f6f7] border-[#ccd0d5] placeholder:text-gray-300 form-input focus:ring-0" placeholder="Surname">
                                    </div>
                                </div>
                                <div>
                                    <input type="email" name="email" v-model="user.email" class="w-full rounded-[6px] text-[16px] p-[11px] bg-[#f5f6f7] border-[#ccd0d5] placeholder:text-gray-300 form-input focus:ring-0" placeholder="Email address">
                                </div>
                                <div>
                                    <input type="password" name="password" v-model="user.password" class="w-full rounded-[6px] text-[16px] p-[11px] bg-[#f5f6f7] border-[#ccd0d5] placeholder:text-gray-300 form-input focus:ring-0" placeholder="Password">
                                </div>
                                <div>
                                    <input type="password" name="password_confirmation" v-model="user.password_confirmation" class="w-full rounded-[6px] text-[16px] p-[11px] bg-[#f5f6f7] border-[#ccd0d5] placeholder:text-gray-300 form-input focus:ring-0" placeholder="Password">
                                </div>
                                <div id="dob">
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
                                <div id="gender">
                                    <div class="flex items-center mb-1">
                                        <p class="text-[12px] capitalize text-gray-400">
                                            gender
                                        </p>
                                        <div class="h-3 w-3 rounded-full bg-black ml-1">
                                            <QuestionMarkCircleIcon class="text-white bg-black rounded-full" />
                                       
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-6">
                                        <div class="border p-2 flex items-center w-full space-x-4 justify-between">
                                            <label for="female">Female</label>
                                            <input type="radio" v-model="user.gender" name="gender" id="female" value="Female">
                                        </div>
                                        <div class="border p-2 flex items-center w-full  space-x-4 justify-between">
                                            <label for="male">Male</label>
                                            <input type="radio" name="gender" id="male" v-model="user.gender" value="Male">
                                        </div>
                                        <div class="border p-2 flex items-center w-full space-x-4 justify-between">
                                            <label for="other">Others</label>
                                            <input type="radio" name="gender" id="other" v-model="user.gender" value="Other">
                                        </div>
            
                                    </div>
                                </div>
                             <div class="">
                                <small class="text-gray-400 text-[12px]">
                                    People who use our service may have uploaded your contact information to Facebook. <a href="#" class="text-blue-400 decoration-1 hover:underline"> Learn more</a>.
                                   </small>
                             </div>
                             <div>
                                <small class="text-gray-400 text-[12px]">
                                    By clicking Sign Up, you agree to our <a href="#" class="text-blue-400 decoration-1 hover:underline">Terms</a>, <a href="#" class="text-blue-400 decoration-1 hover:underline">Privacy Policy</a> and <a href="#" class="text-blue-400 decoration-1 hover:underline">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                                   </small>
                             </div>
                                <div class="mb-5">
                                    <div class="create flex items-center justify-center">
                                        <button class="bg-green-500 text-center text-white py-3 text-[14px] rounded-[8px] w-1/2" >
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
        <div class="lg:hidden container mx-auto">
            <div class="title">
                <p class="font-semibold text-center my-5 text-3xl text-blue-500">
                facebook
                </p>
            </div>
            <div class="mx-5">
                <form class="space-y-4" @submit.prevent="login">
                    <div class="w-full">
                    <input type="email" name="email" v-model="user.email" class="p-[12px] w-full focus:ring-0 border-0 bg-[#eaf0f9] shadow-md">
                    </div>
                    <div class="w-full">
                    <input type="password" name="password" v-model="user.password" class="p-[12px] w-full focus:ring-0 border-0 bg-[#eaf0f9] shadow-md">
                    </div>
                    <div class="w-full">
                        <button class="w-full bg-[#1b78f0] rounded-[3px] h-[40px] text-white text-[17px]">
                            log in
                        </button>
                    </div>
                </form>
                        <div class="text-center my-4">
                        <router-link :to="{name:'Validate'}" class="text-[#1b78f0] text-[14px] text-center">
                            Forgotten password?
                        </router-link>
                        </div>

                        <div>
                            <div class="ruler items-center flex justify-center my-5 text-[12px]">
                                or
                            </div>
                        </div>

                        <div class="flex justify-center mb-[5rem]">
                            <router-link
                              :to="{ name: 'Register' }" 
                              class="bg-[#09a307] text-white leading-6 px-4 py-[5px] h-[36px] font-bold rounded-[4px] text-[14px]"
                            >
                              Create New Account
                            </router-link>
                          </div>
                          <Footer/>
            </div>
        </div>
    </div>
</template>
    
    <script setup lang="ts">
    import {
        QuestionMarkCircleIcon,
        XMarkIcon,
        PlusIcon
    } from '@heroicons/vue/20/solid';
import { ref } from 'vue';
    import { useRouter } from 'vue-router';
import store from '../../store';
import Footer from '../../components/footer.vue';

const route = useRouter()

const errorMsg = ref<string>('')
const user = {
    firstname:'',
    surname:'',
    email:'',
    password:'',
    password_confirmation:'',
    gender:''
}

function register(){
    store.dispatch('register', user).then(()=>{
        route.push({
            name:'Dashboard'
        })
    })
}


store.dispatch("getUSerlogin")

function login(){
    store.dispatch('login', user).then(()=>{
        route.push({
            name:"Dashboard"
        }).catch((err) => {
             if(err.response.status === 422){
        errorMsg.value = err.response.data.error 
        console.log("hey");

        
    }
        })

    })
}
    
    function registrationModal(){
        document.getElementById("modal").classList.add("regs");
        document.getElementById("fixed").classList.add("fixed")
    }
    function closeModal(){
        document.getElementById("modal").classList.remove("regs");
        document.getElementById("fixed").classList.remove("fixed")
    }
    </script>
    
    <style lang="scss" scoped>
        .ruler {
            &::before {
              content: "";
              margin-right: 1rem;
              height: 1px;
              width: 100%;
              background: #ccd0d5;
            }
            &::after {
              content: "";
              margin-left: 1rem;
              height: 1px;
              width: 100%;
              background: #ccd0d5;
            }
          }
        .over{
            overflow: hidden;
        }
        .fixed{
            position: fixed;
        }
        #modal {
            transition: all 0.4s ease-out;
            z-index: -4;
            opacity: 0;
            pointer-events: none;
            &.regs {
                scroll-behavior: smooth;
            opacity: 1 !important;
                position: absolute;
              z-index: 4;
              pointer-events: all;
              transition: all 0.5s ease-out;
            }
          }
    
    </style>
    