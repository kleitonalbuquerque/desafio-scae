new Vue({
    el: '#app',
    data() {
        return {
            infos: [],
            loading: true,
            errored: false
        }
    },
    mounted() {
        axios
            .get('https://5ff75c21e7164b0017e1a82d.mockapi.io/api/v1/empreendimentos')
            .then(response => {
                this.infos = response.data
        })
        .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)  
    },
})