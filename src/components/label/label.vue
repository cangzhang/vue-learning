<template>
  <a v-if="!!asLink" :class="[
        {
          floating: !!floating,
          ui: true,
          horizontal: !!horizontal,
        },
        sizeClass,
        attachedClass,
        !!corner ? corner + ' corner' : '',
        pointingTo,
        theme,
        type,
        !!ribbon ? ribbon + ' ribbon' : '',
        {
          image: !!withImg,
          circular: !!circular,
          tag: !!tag,
          label: true
        }]"
       @click="handleClick">
    <!--<img :src="withImg" v-if="!!withImg">-->
    <slot></slot>
    <div class="detail" v-if="!!withDetail">{{ withDetail }}</div>
  </a>

  <div v-else :class="[
        {
          floating: !!floating,
          ui: true,
          horizontal: !!horizontal,
        },
        sizeClass,
        positionClass,
        attachedClass,
        !!corner ? corner + ' corner' : '',
        pointingTo,
        theme,
        type,
        !!ribbon ? ribbon + ' ribbon' : '',
        {
          image: !!withImg,
          circular: !!circular,
          tag: !!tag,
          label: true
        }]"
       @click="handleClick">
    <!--<img :src="withImg" v-if="!!withImg">-->
    <slot></slot>
    <div class="detail" v-if="!!withDetail">{{ withDetail }}</div>
  </div>
</template>

<script>
  import {getPointingTo, getSize} from '../../utils/util'

  const DIRT = ['', 'top', 'bottom', 'left', 'right']

  export default {
    name: 'SvLabel',
    componentName: 'SvLabel',
    props: {
      pointTo: [String, Boolean],
      type: String,
      theme: String,
      corner: String,
      attached: String,
      position: String,
      withDetail: String,
      tag: Boolean,
      ribbon: Boolean,
      horizontal: Boolean,
      floating: Boolean,
      detail: Boolean,
      circular: Boolean,
      size: String,
      asLink: Boolean,
      withImg: Boolean // if there were images
    },
    computed: {
      pointingTo() {
        return getPointingTo(this.pointTo)
      },
      positionClass() {
        let index = DIRT.indexOf(this.position)
        if (index <= 1 && index >= 0)
          return this.position
      },
      attachedClass() {
        if (this.attached)
          return this.attached + ' attached'
      },
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
