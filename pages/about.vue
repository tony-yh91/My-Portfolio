<template>
  <div class="container divide-y divide-blue-100">
    <!-- About me  -->
    <section
      class="mx-auto mt-6 py-5 px-5 space-y-6 sm:w-7/12 w-10/12 flex flex-col"
    >
      <header class="space-y-3">
        <h3 class="text-lg text-blue-500 font-semibold tracking-wider uppercase"
          >About me</h3
        >
        <h3 class="text-4xl font-bold"> Here's my story. </h3>
      </header>
      <p class="text-left">
        I’m Ye Htet Aung, a senior full-stack engineer who has a passion for
        coding.
      </p>
      <p class="text-left">
        I have a demonstrated history of working in the information technology
        and services industry. I have done over five projects which include
        medium to large business applications.
      </p>
      <p class="text-left">
        I specialize in Javascript which is the most popular programming
        language in web development. It is also one of my favorite and strongest
        skills.
      </p>
      <p class="text-left">
        I’m currently part of the team at Professy where I help to develop
        full-stack RESTful microservices, and leading the Javascript developers
        in a remote working environment.
      </p>
      <p class="text-left"> I always like to learn new things. </p>
    </section>
    <!-- TIMELINE -->
    <Timeline>
      <template #professy="{ username = { b: 'haha' } }">
        <div class="px-5 py-5 text-left">
          <h2>{{ username.b }} Lead Programming Engineer @Professy</h2>
          <p class="text-sm text-gray-500">2021 March - Current</p>
          <dl>
            <dd>
              - Work on one of the Japan's successful chat bot automation</dd
            >
            <dd> - Write clean and reusable code tasks using Coffeescript </dd>
          </dl>
        </div>
      </template>
      <template #mml>
        <div class="px-5 py-5 text-left">
          <h2>Senior Web Developer @Myanmar Media Linkage</h2>
          <p class="text-sm text-gray-500">Jul 2020 – Mar 2021</p>
          <dl>
            <dd>
              - Work on one of the Japan's successful chat bot automation</dd
            >
            <dd> - Write clean and reusable code tasks using Coffeescript </dd>
          </dl>
        </div>
      </template>
    </Timeline>
    <!-- TOOLBOX -->
    <section class="mx-auto mt-7 py-7 px-5 space-y-5 sm:w-7/12 w-10/12">
      <header class="space-y-3">
        <h3 class="text-lg text-blue-500 font-semibold tracking-wider uppercase"
          >My ToolBox</h3
        >
        <h3 class="text-4xl font-bold"> Some skills I have. </h3>
        <article class="flex flex-wrap justify-center items-center">
          <figure class="m-6 h-20 w-20">
            <img src="../assets/angular.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-20">
            <img src="../assets/nodejs.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-20">
            <img src="../assets/react.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/vuejs.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/js.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-20">
            <img src="../assets/nuxt.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/html.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-16 w-12">
            <img src="../assets/css.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-32">
            <img src="../assets/rails.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-36">
            <img src="../assets/mongodb.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-20 w-20">
            <img src="../assets/mysql.png" alt="Vue.js" />
          </figure>
        </article>
      </header>
    </section>
  </div>
</template>

<script>
import Timeline from '@/components/timeline'
export default {
  components: { Timeline },
  data() {
    return {
      job: {
        title: 'GG',
      },
    }
  },
}
</script>
<style>
ul li {
  position: relative;
}
ul li::after {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  background-image: url('../assets/check.svg');
  display: inline-block;
  height: 24px;
  width: 24px;
  text-align: center;
  line-height: 24px;
}
.show ul li::before {
  position: absolute;
  left: 11px;
  top: 27px;
  content: '';
  height: 80%;
  width: 0;
  --tw-divide-opacity: 1;
  border-left: 1px solid #000;
  border-color: rgba(209, 213, 219, var(--tw-divide-opacity));
}
</style>
