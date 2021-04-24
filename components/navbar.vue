<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <nav>
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div
          class="relative flex items-center justify-center sm:justify-between h-16"
        >
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <!-- <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="isMenuOn = !isMenuOn"
            > -->
            <span class="sr-only">Open main menu</span>
            <!-- <svg
                :class="isMenuOn ? 'hidden' : 'block'"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg> -->
            <!-- <svg
                :class="isMenuOn ? 'block' : 'hidden'"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> -->
            <!-- <div
              class="menu-btn mt-1"
              :class="isMenuOn ? 'open' : ''"
              @click="isMenuOn = !isMenuOn"
            >
              <div class="menu-btn__burger"></div>
            </div> -->
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
          <div class="flex items-center mr-2">
            <h2 class="font-black text-2xl text-base hidden lg:block"
              >Ye Htet Aung</h2
            >
          </div>
          <div class="hidden sm:flex items-center">
            <div class="flex space-x-4">
              <NuxtLink
                href="#"
                to="/"
                exact-active-class="text-green-400"
                class="hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >Home</NuxtLink
              >
              <NuxtLink
                href="#"
                to="/"
                class="hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >Blog</NuxtLink
              >

              <NuxtLink
                href="#"
                to="/"
                class="hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >Resume</NuxtLink
              >

              <NuxtLink
                href="#"
                to="about"
                exact-active-class="text-green-400"
                class="hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >About</NuxtLink
              >
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              type="button"
              class="focus:outline-none ring ring-blue-600 ring-offset-2 text-white text-sm py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
            >
              Contact me
            </button>

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
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <transition name="slide">
        <div v-show="isMenuOn" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col text-center">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <NuxtLink
              to="/"
              exact-active-class="text-green-400"
              class="block px-3 py-2 rounded-md text-base font-medium"
              @click.native="isMenuOn = false"
              >Home</NuxtLink
            >

            <NuxtLink
              href="#"
              to="/"
              exact-active-class="text-green-400"
              class="block px-3 py-2 rounded-md text-base font-medium"
              >Blog</NuxtLink
            >

            <NuxtLink
              href="#"
              to="/"
              exact-active-class="text-green-400"
              class="block px-3 py-2 rounded-md text-base font-medium"
              >Resume</NuxtLink
            >

            <NuxtLink
              href="#"
              to="about"
              exact-active-class="text-green-400"
              class="block px-3 py-2 rounded-md text-base font-medium"
              @click.native="isMenuOn = false"
              >About</NuxtLink
            >
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOn: false,
      isMenuOn: false,
    }
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
  max-height: 200px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
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
</style>
