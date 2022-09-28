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
        },
        like: {
            data: {}
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
        dashboard({ commit }, posts) {

            console.log(posts);

            let response
            if (posts) {
                response = axiosClient.get(`/dashboard/${posts}`, posts).then((res) => {
                    commit('setPost', res.data)
                    return res
                })
            } else {
                response = axiosClient.get('/dashboard').then((res) => {
                    commit('setDashboard', res.data)
                    commit("setPost", res.data)
                    return res
                })
            }
            return response
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
        }, getPost({ commit }, post) {
            commit("setLoader", true)
            let response;
            if (post) {
                response = axiosClient.get(`/post/${post}`, post).then((res) => {
                    commit('setPosts', res.data)
                    return res
                })
            } else {

                return axiosClient.get('/post')
                    .then(res => {
                        commit("setLoader", false)
                        commit('setPost', res.data)

                        return res
                    })
            }
            return response
        },
        getPosts({ commit }, id) {
            // console.log(id);
            return axiosClient.get(`/post-by-id'/${id}`)
                .then(res => {
                    commit('setPosts', res.data)
                })
        },
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
        },
        // likePost({ commit }, id) {
        //     console.log(id);
        //     return axiosClient.get(`/likes/${id}/${id}`, id).then((res) => {
        //         commit('likes', res.data)
        //     })

        // }
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
        setToken: (state, token) => {
            state.user.token = token
            sessionStorage.setItem("TOKEN", token)
        },
        setPost: (state, fill) => {
            state.post.data = fill.data
        },
        likes: (state, likes) => {
            state.like.data = likes.data
        },
        // setDashboardUser: (state, dashboard) => {
        //     state.dashboard.user = dashboard.user
        // },
        setPosts: (state, post) => {
            state.currentPost.data = post.data
        },
        logout: state => {
            state.user.token = null;
            state.user.data = {} as any;
            sessionStorage.removeItem('TOKEN')
        },
    },
    modules: {}
})
export default store
