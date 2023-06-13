const { createApp } = Vue

createApp({
    data() {
        return {
            mailList:[ ]
        }
    },

    methods: {

        getRandomMail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
                const result = response.data.response
                // console.log(result);

                this.mailList.push(result)
            })
        }
    },

    created(){
        for(let i=0; i<10; i++){
        this.getRandomMail()
    }
    },

}).mount("#app")