
<template>
    <div class="container">
        <header class="jumbotron">
            <h3> {{ content }}</h3>
        </header>
    </div>
</template>

<script>
import userService from '../services/user.service';
export default {
    name: "User",

    data() {
        return {
            content: "",

        };
    },

    mounted() {
        userService.getUserBoard()
        .then( res=> {
            this.content = res.data;
        })
        .catch(err => {
             this.content = (err.response && err.response.data && err.res.data.message) || err.message || err.toString()
        })
    }
}
</script>