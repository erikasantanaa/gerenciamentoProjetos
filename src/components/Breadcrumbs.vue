<template>
  <div class="container p-1 mt-3">
    <b-breadcrumb :items="routePaths"></b-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "BreadCrumbs",
  props: {
    routePaths: {
      type: Array,
      required: true,
    },
  },
};
</script>
