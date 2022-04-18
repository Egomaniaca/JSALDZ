const filter_el = {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
                <form action="#" class="search-form" @submit.prevent='$parent.$refs.products.filter(userSearch)'>
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`
}




// Vue.component('search', {
//     data() {
//         return {
//             userSearch: ''
//         }
//     },
//     template: `
//                 <form action="#" class="search-form" @submit.prevent='$parent.filter'>
//                     <input type="text" class="search-field" v-model="$parent.userSearch">
//                     <button class="btn-search" type="submit">
//                         <i class="fas fa-search"></i>
//                     </button>
//                 </form>`
// })   