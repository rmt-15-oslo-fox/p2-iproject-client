<template>
      <tr>
        <td>{{dataProvince.name}}</td>
        <td>{{dataProvince.address}}</td>
        <td>{{dataProvince.phone}}</td>
        <td>{{dataProvince.region}}</td>
      </tr>
</template>

<script>
export default {
    name : 'card',
    props: ['dataProvince']
};
</script>

<style>
</style>