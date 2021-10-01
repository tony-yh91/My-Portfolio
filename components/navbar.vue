<template>
  <header
    class="
      sticky
      z-30
      top-0
      p-2
      sm:p-3
      mb-5
      backdrop-filter backdrop-blur-lg
      border-b
      bg-opacity-10
      border-borderPrimary
      transition
    "
  >
    <nav class="mx-auto flex items-center w-11/12 max-w-5xl">
      <h2 class="hidden sm:block font-black text-2xl">
        <NuxtLink href="#" to="/">Ye Htet Aung</NuxtLink>
      </h2>
      <div class="flex justify-between items-center w-full sm:w-max sm:ml-auto">
        <div class="mr-2">
          <button
            v-if="darkMode"
            class="p-2 bg-iconPrimary rounded-md"
            aria-label="Dark Mode"
            @click="toggleTheme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current text-textSecondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>

          <button
            v-if="!darkMode"
            class="p-2 bg-iconPrimary rounded-md"
            aria-label="Light Mode"
            @click="toggleTheme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current text-textPrimary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
        <div>
          <NuxtLink
            href="#"
            to="/"
            exact-active-class="text-textNavPrimary"
            class="hover:text-textNavPrimary px-1 sm:px-3 py-2 rounded-md font-light text-base"
            >Home</NuxtLink
          >
          <NuxtLink
            href="#"
            to="/"
            exact-active-class="text-textNavPrimary"
            class="hover:text-textNavPrimary px-1 sm:px-3 py-2 rounded-md font-light text-base"
            >Projects</NuxtLink
          >
          <NuxtLink
            href="#"
            to="/blog"
            active-class="text-textNavPrimary"
            class="hover:text-textNavPrimary px-1 sm:px-3 py-2 rounded-md font-light text-base"
            >Blog</NuxtLink
          >
          <NuxtLink
            href="#"
            to="/about"
            exact-active-class="text-textNavPrimary"
            class="hover:text-textNavPrimary px-1 sm:px-3 py-2 rounded-md font-light text-base"
            >About</NuxtLink
          >
        </div>
      </div>
      <!-- <NuxtLink
            href="#"
            to="contact"
            class="
              bg-transparent
              dark:text-white
              font-semibold
              py-2
              px-4
              border-2 border-green-500
              duration-300
              rounded-lg
              hover:border-transparent hover:bg-green-600 hover:text-white
              text-sm
              sm:text-base
            "
            exact-active-class="bg-transparent border-transparent rounded-lg bg-green-600 text-white"
            >Contact me</NuxtLink
          > -->
      <!-- </div> -->
    </nav>
    <!-- </div> -->
    <!-- Mobile menu, show/hide based on menu state. -->
    <!-- <nav
      class="
        sm:hidden
        menu-link
        top-0
        absolute
        w-full
        bg-whit
        backdrop-filter backdrop-blur-md
        bg-opacity-50
        firefox:bg-opacity-400
      "
      :class="[isMenuOn ? 'show' : 'hide']"
    >
      <div class="px-5 pt-24 py-5 space-y-3 text-left font-bold text-2xl h-screen">
        <div
          class="menu-link dark:text-white"
          :class="[isMenuOn ? 'show' : 'hide']"
          style="transition: transform 0.5s"
        >
          <NuxtLink
            to="/"
            exact-active-class="text-green-400"
            class="block px-3 py-2 rounded-md"
            @click.native="isMenuOn = false"
            >Home</NuxtLink
          >
        </div>
        <div
          class="menu-link dark:text-white"
          :class="[isMenuOn ? 'show' : 'hide']"
          style="transition: transform 0.8s"
        >
          <NuxtLink
            href="#"
            to="about"
            exact-active-class="text-green-400"
            class="block px-3 py-2 rounded-md"
            @click.native="isMenuOn = false"
            >About</NuxtLink
          >
        </div>
      </div>
    </nav> -->
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMenuOn: false,
      showNavbar: true,
      currentScroll: 0,
      darkMode: false,
    }
  },
  mounted() {
    if (document.documentElement.className === 'dark-mode') {
      this.darkMode = true
    }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      this.$colorMode.preference = this.darkMode ? 'dark' : 'light'
    },
  },
}
</script>
<style>
.slide-enter-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  /* max-height: 200px; */
  overflow: hidden;
  transition: 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  /* max-height: 0; */
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 5px;
  z-index: 10001;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}
.dark .dark\:dark-line {
  stroke: #fff;
}
.ham1 .top {
  stroke-dasharray: 40 139;
}
.ham1 .bottom {
  stroke-dasharray: 40 180;
}
.ham1.active .top {
  stroke-dashoffset: -98px;
}
.ham1.active .bottom {
  stroke-dashoffset: -138px;
}
/*mobile nav menu*/
.mobile-menu.show {
  opacity: 1;
  overflow: hidden;
}

.mobile-menu.hide {
  opacity: 0;
  overflow: hidden;
}

.mobile-menu {
  /* transform: translate3d(-100vw, 0, 0); */
  transition: opacity 0.7s;
  -webkit-transition: opacity 0.7s;
  -moz-transition: opacity 0.7s;
  -o-transition: opacity 0.7s;
  overflow: scroll;
  z-index: 1000;
}

.menu-link {
  overflow: scroll;
  z-index: 1000;
}

.menu-link.show {
  transform: translate3d(0vw, 0, 0);
  overflow: hidden;
}

.menu-link.hide {
  transform: translate3d(-100vw, 0, 0);
  overflow: hidden;
}
.header-nav {
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.header-nav.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.dark-mode-transition {
  transition: background-color 0.5s;
}
</style>
