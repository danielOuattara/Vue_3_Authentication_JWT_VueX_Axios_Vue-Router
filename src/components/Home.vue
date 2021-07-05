
<template>
    <div class="container">
        <header class="jumbotron">
            <h3> {{ content }}</h3>
        </header>
    </div>

</template>

<script>
import UserService from "./../services/user.service.js";
export default {
    name: "Home",
    data() {
        return {
            content: "",
        };
    },

    mounted() {
        UserService.getPublicContent()
        .then(res => {
            this.content = res.data;
        })
        .catch(err => {
            this.content = (err.response && err.response.data && err.res.data.message) || err.message || err.toString()
        })
    },
    
};
</script>