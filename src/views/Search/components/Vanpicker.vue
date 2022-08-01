<template>
  <van-picker
    show-toolbar
    :columns="title"
    toolbar-position="bottom"
    @confirm="getMsg"
    @cancel="calcel"
  />
</template>

<script>
export default {
  props: {
    title: {
      typeof: Array,
      require: true,
    },
    show: {},
  },
  methods: {
    getMsg(value) {
      console.log(value);
    },
    calcel() {
      this.$emit("changeShow");
    },
  },
};
</script>

<style></style>
