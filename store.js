import { createStore } from 'vuex';

export default createStore({
    state: {
        parent: {},
        children: {},
    },
    getters: {
        parent(state) {
            return state.parent
        },
        children(state) {
            return state.children;
        }
    },
    mutations: {
        saveChildren(state, children) {
            state.children = children;
        },
        saveParent(state, parent){
            state.parent = parent;
        }
    }
})
