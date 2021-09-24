<template>
  <p>{{GStore.organizer.name}}</p>
 
  <img v-for="url in GStore.organizer.imageUrls" :key="url" :src="url" />
 
 <!-- <router-view :organizer= "GStore.organizer" /> -->
</template>

<script>
export default {
  inject: ['GStore']
}
</script>
<style scoped>
img {
  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px; /* Rounded border */
  padding: 5px; /* Some padding */
  margin: 5px; /* Some margin */
  width: 150px; /* Set a small width */
}
/* Add a hover effect (blue shadow) */
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>
