import { createStore } from "vuex"
import axiosClient from '../axios'

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN") as any
        },
        post: {
            data: {},
            loading: false
        },
        currentPost: {
            data: {}
        },
        dashboard: {
            data: {},
            user: {}
        }
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user).then(({ data }) => {
                commit('setUser', data.user)
                commit('setToken', data.token)
                return data;
            })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user).then(({ data }) => {
                commit('setUser', data.user)
                commit('setToken', data.token)
                return data;
            })
        },
        dashboard({ commit }) {
            console.log(store.state.dashboard.user);
            return axiosClient.get('/dashboard').then((res) => {
                commit('setDashboard', res.data)

                commit('setDashboardUser', res.data)

                return res
            })
        },
        getUser({ commit }) {
            return axiosClient.get('/user')
                .then(res => {
                    commit('setUser', res.data)
                })
        },
        postmind({ commit }, fill) {
            let response
            if (fill.id) {
                response = axiosClient.put(`/post/${fill.id}`, fill).then((res) => {
                    commit('setPost', res.data)
                    return res
                })
            } else {
                commit("setLoader", true)
                response = axiosClient.post("/post", fill).then((res) => {
                    commit("setLoader", false)
                    commit("setPost", res.data)
                    return res
                })
            }
            return response
        }, getPost({ commit }) {
            commit("setLoader", true)
            return axiosClient.get('/post')
                .then(res => {
                    commit("setLoader", false)
                    commit('setPost', res.data)
                    return res
                })
        },
        // getPosts({ commit }, id) {
        //     console.log(id);
        //     return axiosClient.get(`/post-by-id'/${id}`)
        //         .then(res => {
        //             commit('setPost', res.data)
        //         })
        // },
        deletePost({ }, id) {
            console.log(id);

            return axiosClient.delete(`/post/${id}`)
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response
                })
        }
    },
    mutations: {
        setLoader: (state, loader) => {
            state.post.loading = loader
        },
        setUser: (state, user) => {
            state.user.data = user
        },
        setDashboard: (state, dashboard) => {
            state.dashboard.data = dashboard.data
        },
        setDashboardUser: (state, user) => {
            state.dashboard.user = user.user

        },
        setToken: (state, token) => {
            state.user.token = token
            sessionStorage.setItem("TOKEN", token)
        },
        setPost: (state, fill) => {
            state.post.data = fill.data
        },
        // setPosts: (state, post) => {
        //     state.post.data = post.data
        // },
        logout: state => {
            state.user.token = null;
            state.user.data = {} as any;
            sessionStorage.removeItem('TOKEN')
        },
    },
    modules: {}
})
export default store
