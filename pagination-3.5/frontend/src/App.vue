<template>
    <div>
        <h1>Items</h1>
        <item-list />
    </div>
</template>
  
<script>
import ItemList from './components/ItemList.vue'

export default {
    name: 'App',
    components: {
        ItemList
    }
}
</script>
  