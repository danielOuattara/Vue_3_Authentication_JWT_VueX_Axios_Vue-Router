
import AuthService from "./../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? {status: { loggedIn : true} , user: user } :  {status: { loggedIn : false} , user: null }


export const auth = {

    namespace : true,

    state: initialState,

    actions: {

        loginAction( {commit}, user) {
            return AuthService.login(user)
            .then(user => {
                commit('loginSuccessMutation', user);
                return Promise.resolve(user);
            })
            .catch(err => {
                commit('loginErrMutation');
                return Promise.reject(err);
            })
        },

        logoutAction( {commit}){
            AuthService.logout();
            commit('logoutMutation');
        },

        registerAction( {commit }, user) {
            return AuthService.register(user)
            .then( res => {
                commit('registerSuccessMutation');
                return Promise.resolve(res.data);
            })
            .catch( err => {
                commit('registerErrMutation');
                return Promise.reject(err)
            })
        },
    },

    mutations: {

        loginSuccessMutation( state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },

        loginErrMutation(state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        logoutMutation(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
       
        // logoutErrMutation(state) {},

        registerSuccessMutation( state) {
            state.status.loggedIn = false;
        },

        registerErrMutation(state) {
            state.status.loggedIn = false;
        }
    }
};