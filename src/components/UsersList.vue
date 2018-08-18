<template>
    <div v-if="users.length">
        <b-card
            v-for="user in users"
            :key="user.id"
            :title="user.name"
            :img-src="user.picture"
            img-top
            class="mb-2"
        >
            <p class="card-text">
                {{ user.about }}
            </p>
            <b-button href="#" variant="primary">
                Más información
            </b-button>
        </b-card>
    </div>

    <div v-else>
        <b-alert variant="danger" show>
            No hay usuarios para mostrar
        </b-alert>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    export default {
        mounted () {
            this.fetchUsers()
        },
        methods: {
            ...mapActions('usersModule', ['fetchUsers'])
        },
        computed: {
            ...mapState('usersModule', ['users'])
        }
    }
</script>
