const { createApp } = Vue

createApp({
    data() {
        return {
            newMail: ""
        }
    },

    methods: {

        getRandomMail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
                const result = response.data.response
                //console.log(result);

                this.newMail = result
            })
        }
    },

    created(){
        this.getRandomMail()
    },

}).mount("#app")