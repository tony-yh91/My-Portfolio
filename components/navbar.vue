<template>
  <header class="header-nav sticky top-0 z-10 bg-white" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
      <div class="grid grid-flow-col grid-cols-2 md:grid-cols-4 mx-auto gap-3 sm:py-5 items-center">
        <div class="sm:hidden flex items-center">
          <!-- Mobile menu button-->
          <svg
            class="ham hamRotate ham1"
            viewBox="0 0 100 100"
            width="80"
            :class="isMenuOn ? 'active' : ''"
            @click="isMenuOn = !isMenuOn"
          >
            <path
              class="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path class="line middle" d="m 30,50 h 40" />
            <path
              class="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
          <!-- </button> -->
        </div>
        <div class="col-span-2">
          <h2 class="font-black text-2xl hidden sm:block">
            <NuxtLink href="#" to="/">Ye Htet Aung</NuxtLink>
          </h2>
        </div>
        <nav class="hidden col-span-2 sm:block justify-self-end">
          <!-- <div class="flex content-end"> -->
          <!-- <NuxtLink
              href="#"
              to="/"
              exact-active-class="text-green-400"
              class="hover:text-green-600 px-3 py-2 rounded-md font-medium"
              >Home</NuxtLink
            > -->
          <NuxtLink href="#" to="/" class="hover:text-green-600 px-3 py-2 rounded-md font-medium"
            >Blog</NuxtLink
          >

          <NuxtLink href="#" to="/" class="hover:text-green-600 px-3 py-2 rounded-md font-medium"
            >Resume</NuxtLink
          >

          <NuxtLink
            href="#"
            to="about"
            exact-active-class="text-green-400"
            class="hover:text-green-600 px-3 py-2 rounded-md font-medium"
            >About</NuxtLink
          >
          <!-- </div> -->
        </nav>
        <button
          type="button"
          class="focus:outline-none text-black text-sm py-2 px-4 rounded-md border-2 border-green-600 hover:shadow-xl"
        >
          Contact me
        </button>
        <!-- <div class="justify-self-end"> -->
        <!-- Profile dropdown -->
        <!-- <div class="ml-3 relative">
              <div>
                <button
                  id="user-menu"
                  type="button"
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="isOn = !isOn"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div
                  v-show="isOn"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    >Your Profile</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    >Settings</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    >Sign out</a
                  >
                </div>
              </transition>
            </div> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <nav
      class="sm:hidden menu-link top-0 absolute w-full bg-white backdrop-filter backdrop-blur-md bg-opacity-50 firefox:bg-opacity-400"
      :class="[isMenuOn ? 'show' : 'hide']"
    >
      <div class="px-5 pt-24 py-5 space-y-3 text-left font-bold text-2xl h-screen">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <div
          class="menu-link"
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
          class="menu-link"
          :class="[isMenuOn ? 'show' : 'hide']"
          style="transition: transform 0.6s"
        >
          <NuxtLink
            href="#"
            to="/"
            exact-active-class="text-green-400"
            class="block px-3 py-2 rounded-md"
            >Blog</NuxtLink
          >
        </div>

        <div
          class="menu-link"
          :class="[isMenuOn ? 'show' : 'hide']"
          style="transition: transform 0.7s"
        >
          <NuxtLink
            href="#"
            to="/"
            exact-active-class="text-green-400"
            class="block px-3 py-2 rounded-md"
            >Resume</NuxtLink
          >
        </div>

        <div
          class="menu-link"
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
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMenuOn: false,
      showNavbar: true,
      currentScroll: 0,
    }
  },
  watch: {
    isMenuOn(value) {
      if (this.isMenuOn) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, true)
    // this.isScrollUp = true
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll, true)
  },
  methods: {
    onScroll(e) {
      const scroll = window.scrollY
      if (scroll < 0) {
        return
      }
      if (Math.abs(scroll - this.currentScroll) < 60) {
        return
      }
      this.showNavbar = scroll < this.currentScroll
      this.currentScroll = scroll
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
  padding: 10px;
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
</style>
