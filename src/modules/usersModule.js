export default {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        setUsers (state, users) {
            state.users = users;
        }
    },
    actions: {
        async fetchUsers ({commit}) {
            const response = await fetch('users.json')
            const data = await response.json();
            commit('setUsers', data)
        }
    }
}
