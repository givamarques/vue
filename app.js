const app = Vue.createApp({
    data() {
        return {
            firstName: 'GiVa',
            lastName: 'Marques',
            email: 'giva.design@gmail.com',
            gender: 'male',
            picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQHnNB5ffAIarw/profile-displayphoto-shrink_800_800/0/1594928406085?e=1635984000&v=beta&t=FwG7StTF98t50q9EzXqQMMgD0JOOPPlCJC3jN0iuyY0',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://radomuser.me/api')
            const { results } = await res.json()

            //console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
 
        },
    },
})

app.mount('#app')