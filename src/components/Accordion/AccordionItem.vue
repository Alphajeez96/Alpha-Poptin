<template>
  <li class="accordion__item" :class="{item__border: visible}">
    <div
      class="accordion__trigger"
      :class="{accordion__trigger_active: visible}"
      @click="open"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>

      <div class="ml-auto">
        <div class="arrow" :class="{'rotate-90-cw': visible}"></div>
      </div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        class="accordion__content bg-white rounded-b-lg shadow-xl text-left"
        v-show="visible"
      >
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],

  data: () => ({
    index: null,
  }),

  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },

  created() {
    this.index = this.Accordion.count++;
  },

  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },

    start(el) {
      el.style.height = el.scrollHeight + "px";
    },

    end(el) {
      el.style.height = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow {
  border: solid aliceblue;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.accordion__item {
  @apply bg-[#7761df] cursor-pointer mb-5 relative;

  border-radius: 9px;

  &.item__border {
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
  }
}

.accordion__trigger {
  @apply flex p-3.5;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.rotate-90-cw {
  -webkit-animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes rotate-90-cw {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
@keyframes rotate-90-cw {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
