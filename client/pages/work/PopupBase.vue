<template>
  <div
    role="dialog"
    :aria-label="label"
    aria-modal="true"
    class="PopupWrap"
    :class="{ 'PopupWrap--centered': centered }"
  >
    <div class="PopupWrap__backdrop" @click="$emit('close')">
      <slot name="backdrop" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "PopupWrap",
  props: {
    centered: {
      default: true,
      type: Boolean,
    },
    focusElement: {
      default: null,
      type: Object,
    },
    label: {
      required: true,
      type: String,
    },
  },
  mounted() {
    const close = (e) => {
      const ESC = 27;
      if (e.keyCode !== ESC) return;
      this.$emit("close");
    };
    document.addEventListener("keyup", close);
    this.$on("hook:destroyed", () => {
      document.removeEventListener("keyup", close);
    });

    this.activate();
    this.$on("hook:destroyed", () => {
      this.deactivate();
    });
  },
  methods: {
    activate() {
      this.previousActiveElement = document.activeElement;

      this.disableScrolling();
      this.inert();
      this.focusFirstDescendant();
    },
    async deactivate() {
      this.enableScrolling();
      await this.inert(false);
      this.restoreFocus();
    },
    disableScrolling() {
      this.scrollPosition = window.pageYOffset;

      // Disable scrolling on all devices (including iOS).
      const $worksListFirst = document.querySelector("#works-list-first");
      $worksListFirst.classList.add("fixed");
      $worksListFirst.style.top = `-${this.scrollPosition}px`;
    },
    enableScrolling() {
      const $worksListFirst = document.querySelector("#works-list-first");
      $worksListFirst.classList.remove("fixed");
      $worksListFirst.style.removeProperty("top");
      window.scrollTo(0, this.scrollPosition);
    },
    async inert(status = true) {
      await this.$nextTick();
      [...this.$root.$el.children].forEach((child) => {
        if (child === this.$el || child.contains(this.$el)) return;
        child.inert = status;
      });
    },
    focusFirstDescendant(element) {
      const focusable = this.$el.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable[0] && focusable[0].focus) focusable[0].focus();
    },
    restoreFocus() {
      const element = this.focusElement || this.previousActiveElement;

      if (element && element.focus) element.focus();
    },
  },
};
</script>

<style>
.PopupWrap {
  position: absolute;
  z-index: 1000;
  width: 100%;
}

.PopupWrap--centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.PopupWrap__backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
