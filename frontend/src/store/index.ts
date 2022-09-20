import { createStore } from "vuex"
import axiosClient from '../axios'
const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN") as any
        }
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user).then(({ data }) => {
                commit('setUser', data)
                return data;
            })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user).then(({ data }) => {
                commit('setUser', data)
                return data;
            })
        },
        mobileReg({ commit }, user) {
            return axiosClient.post('/mobile-reg-name', user).then(({ data }) => {
                commit('setUserMobile', data)
                return data
            })
        },
        mobileRegEmail({ commit }, user) {
            return axiosClient.post('/mobile-reg-email', user).then(({ data }) => {
                commit('setUserMobile', data)
                return data
            })
        },
        mobileReggender({ commit }, user) {
            return axiosClient.post('/mobile-reg-gender', user).then(({ data }) => {
                commit('setUserMobile', data)
                return data
            })
        },
        mobileRegPassword({ commit }, user) {
            return axiosClient.post('/mobile-reg-password', user).then(({ data }) => {
                commit('setUserMobile', data)
                return data
            })
        }
    },
    mutations: {
        setUser: (state, user) => {
            state.user.token = user.token
            state.user.data = user.user
            sessionStorage.setItem("TOKEN", user.token)
        },
        setUserMobile: (state, user) => {
            state.user.data = user.user
        }
    },
    modules: {}
})
export default store