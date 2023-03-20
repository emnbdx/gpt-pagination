<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.label }} ({{ item.quantity }})
            </li>
        </ul>
        <nav>
            <ul>
                <li v-if="pagination.prevPageUrl">
                    <router-link
                        :to="{ path: '/items', query: { page: pagination.currentPage - 1, perPage: pagination.perPage } }">Prev</router-link>
                </li>
                <li v-else>
                    Prev
                </li>
                <li v-if="pagination.nextPageUrl">
                    <router-link
                        :to="{ path: '/items', query: { page: pagination.currentPage + 1, perPage: pagination.perPage } }">Next</router-link>
                </li>
                <li v-else>
                    Next
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'ItemList',
    data() {
        return {
            items: [],
            pagination: {}
        }
    },
    mounted() {
        this.loadItems()
    },
    methods: {
        loadItems() {
            const query = this.$route.query
            const page = query.page || 1
            const perPage = query.perPage || 10

            fetch(`/api/items?page=${page}&perPage=${perPage}`)
                .then(response => response.json())
                .then(data => {
                    this.items = data.data
                    this.pagination = data.meta.pagination
                })
                .catch(error => console.error(error))
        }
    },
    watch: {
        '$route.query': function () {
            this.loadItems()
        }
    }
}
</script>
