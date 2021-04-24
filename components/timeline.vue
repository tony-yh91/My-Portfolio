<template>
  <section class="mx-auto mt-7 py-7 px-5 space-y-5 sm:w-7/12 w-10/12">
    <header class="space-y-3">
      <h3 class="text-lg text-blue-500 font-semibold tracking-wider uppercase"
        >Timeline</h3
      >
      <h3 class="text-4xl font-bold"> An unexpected journey. </h3>
    </header>
    <h3 class="text-2xl text-left">Work Experience</h3>
    <dl class="space-y-5">
      <div class="py-2 space-x-5 flex flex-row relative">
        <div class="justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            />
          </svg>
        </div>
        <div class="justify-center items-center space-y-1">
          <dt class="font-bold text-base">Lead Programming Engineer</dt>
          <dd class="text-sm text-gray-500"> Professy - Full-Time </dd>
          <dd class="text-sm text-gray-500"> 2021 March - Current - Japan </dd>
        </div>
        <div
          class="hidden lg:block px-3 py-3 mx-auto rounded border h-32 w-3/4 absolute left-80"
        >
          <slot name="professy" :username="name"></slot>
        </div>
      </div>
      <div class="py-2 space-x-5 flex flex-row relative">
        <div class="justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            />
          </svg>
        </div>
        <div class="justify-center items-center space-y-1">
          <dt class="font-bold text-base">Senior Web Developer</dt>
          <dd class="text-sm text-gray-500">
            Myanmar Media Linkage - Full-Time
          </dd>
          <dd class="text-sm text-gray-500"> Jul 2020 – Mar 2021 - Myanmar </dd>
        </div>
        <div
          class="hidden lg:block px-3 py-3 mx-auto rounded border h-32 w-3/4 absolute left-80"
        >
          <slot name="mml"></slot>
        </div>
      </div>
      <div class="py-2 space-x-5 flex flex-row">
        <div class="justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            />
          </svg>
        </div>
        <div class="justify-center items-center space-y-5">
          <div class="space-y-1">
            <dt class="font-bold text-base">Web Developer</dt>
            <dd class="text-sm text-gray-500">
              Myanmar High Society - Full-Time
            </dd>
            <dd class="text-sm text-gray-500">
              Dec 2017 – Mar 2020 - Myanmar
            </dd>
          </div>
          <div class="flex flex-col space-y-5">
            <div class="space-x-5 show">
              <ul>
                <li class="pl-10 space-y-1">
                  <div class="text-sm font-bold"> Senior Web Developer </div>
                  <div class="text-sm text-gray-500"> Jan 2020 – Mar 2020 </div>
                </li>
              </ul>
            </div>
            <div class="space-x-5">
              <ul>
                <li class="pl-10 space-y-1">
                  <div class="text-sm font-bold"> Junior Web Developer </div>
                  <div class="text-sm text-gray-500"> Dec 2017 – Dec 2019 </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="py-2 space-x-5 flex flex-row">
        <div class="justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            />
          </svg>
        </div>
        <div class="justify-center items-center space-y-1">
          <dt class="font-bold text-base">Shop Owner</dt>
          <dd class="text-sm text-gray-500"> Self-employed </dd>
          <dd class="text-sm text-gray-500">
            Jan 2014 – April 2017 - Myanmar
          </dd>
        </div>
      </div>
    </dl>
    <h3 class="text-2xl text-left w-full">Education</h3>
    <dl class="py-2 space-x-5 flex flex-row">
      <div class="justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
          />
        </svg>
      </div>
      <div class="justify-center items-center space-y-1">
        <dt class="font-bold text-base">Bachelor of Computer Science</dt>
        <dd class="text-sm text-gray-500"> University of Computer Studies </dd>
        <dd class="text-sm text-gray-500"> Monywa </dd>
      </div>
    </dl>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
}
</script>
