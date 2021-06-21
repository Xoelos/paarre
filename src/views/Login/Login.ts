import User from '@/models/User';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Login',
    methods: {
        login() {
            this.$store.dispatch('login').then((user: User) => {
                if (user) this.$router.push('/');
            })
        },
    },
});