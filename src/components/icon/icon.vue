<template>
  <i :class="[ sizeClass, theme,
       {
         corner: !!corner,
         disabled: !!disabled,
         bordered: !!bordered,
         circular: !!circular,
         fitted: !!fitted,
         loading: !!loading,
         link: !!link,
         flipped: !!flipped,
         rotated: !!rotated,
       },
       withIcon, { 'icon': true }]" @click="handleClick">
  </i>
</template>

<script>
  //TODO: inverted
  import {getSize} from '../../utils/util'

  export default {
    name: 'SvIcon',
    componentName: 'SvIcon',
    props: {
      size: String,
      withIcon: String,
      disabled: Boolean,
      loading: Boolean,
      fitted: Boolean,
      link: Boolean,
      flipped: Boolean,
      rotated: Boolean,
      circular: Boolean,
      bordered: Boolean,
      inverted: Boolean,
      corner: Boolean, // only makes sense in icon group
      theme: String
    },
    computed: {
      sizeClass() {
        return getSize(this.size)
      }
    },
    methods: {
      handleClick(ev) {
        this.$emit('click', ev)
      }
    }
  }
</script>

<style lang="" scoped></style>
