<template>
  <div
    class="container xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg xl:mx-auto space-y-5 xl:px-4 divide-y divide-grey-200"
  >
    <!-- About me  -->
    <section class="py-5 px-5 space-y-6 flex flex-col">
      <div class="space-y-3">
        <h3 class="text-lg text-green-500 font-semibold tracking-wider uppercase">About me</h3>
        <h3 class="text-3xl md:text-4xl font-bold">My story.</h3>
      </div>
      <p class="text-left text-lg">
        I’m Ye Htet Aung, a senior full-stack engineer who has a passion for coding.
      </p>
      <p class="text-left text-lg">
        I have a demonstrated history of working in the information technology and services
        industry. I have done over five projects which include medium to large business
        applications.
      </p>
      <p class="text-left text-lg">
        I specialize in Javascript which is the most popular programming language in web
        development.
      </p>
      <p class="text-left text-lg">
        I’m currently part of the team at Professy where I help to develop full-stack RESTful
        microservices, and leading the Javascript developers in a remote working environment.
      </p>
      <p class="text-left text-lg">
        I have a bachelor degree of Computer Science from University of Computer Studies, Monywa.
      </p>
      <p class="text-left text-lg">I always like to learn new things.</p>
    </section>
    <!-- TIMELINE -->
    <section class="py-5 px-5 space-y-6">
      <div class="space-y-3">
        <h3 class="text-lg text-green-500 font-semibold tracking-wider uppercase">Timeline</h3>
        <h3 class="text-3xl md:text-4xl font-bold">An unexpected journey.</h3>
      </div>

      <div v-for="(prevJob, index) in reorderJobs" :key="prevJob.id" class="flex flex-row ml-5">
        <ul
          class="flex flex-col text-left pl-10"
          :class="{ lastItem: index === reorderJobs.length - 1 }"
        >
          <li class="text-lg md:text-xl font-bold">
            {{ prevJob.title }}
          </li>
          <li class="text-base md:text-lg text-green-500">{{ prevJob.type }}</li>
          <li class="text-base md:text-lg text-gray-700">
            {{ prevJob.from }} - {{ prevJob.to }} - {{ prevJob.location }}
          </li>
        </ul>
      </div>
    </section>
    <!-- TOOLBOX -->
    <section class="py-5 px-5 space-y-6">
      <div class="space-y-3">
        <h3 class="text-lg text-green-500 font-semibold tracking-wider uppercase">My ToolBox</h3>
        <h3 class="text-3xl md:text-4xl font-bold">Some skills I have.</h3>
        <article class="flex flex-wrap justify-center items-center">
          <figure class="m-6 h-20 w-20">
            <img src="../assets/angular.svg" alt="Angular" />
          </figure>
          <figure class="m-6 h-25 w-20">
            <img src="../assets/nodejs.svg" alt="Node" />
          </figure>
          <figure class="m-6 h-25 w-20">
            <img src="../assets/react.svg" alt="React" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/vuejs.svg" alt="Vue.js" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/js.svg" alt="Javascript" />
          </figure>
          <figure class="m-6 h-25 w-20">
            <img src="../assets/nuxt.svg" alt="Nuxt.js" />
          </figure>
          <figure class="m-6 h-25 w-16">
            <img src="../assets/html.svg" alt="HTML5" />
          </figure>
          <figure class="m-6 h-16 w-12">
            <img src="../assets/css.svg" alt="CSS3" />
          </figure>
          <figure class="m-6 h-25 w-32">
            <img src="../assets/rails.svg" alt="Rails" />
          </figure>
          <figure class="m-6 h-25 w-36">
            <img src="../assets/mongodb.svg" alt="MongoDB" />
          </figure>
          <figure class="m-6 h-20 w-20">
            <img src="../assets/mysql.png" alt="Mysql" />
          </figure>
        </article>
      </div>
    </section>
    <!-- OTHER THAN THAT -->
    <section class="py-5 px-5 space-y-6">
      <div class="space-y-3">
        <h3 class="text-lg text-green-500 font-semibold tracking-wider uppercase">Interests</h3>
        <h3 class="text-3xl md:text-4xl font-bold">Other than that,</h3>
        <p class="text-left text-lg">
          When I was young in this industry, I had dreamt of working on FAANG Companies. Now? What
          do you think?
        </p>
        <p class="text-left text-lg">
          Movies, Horror theme is my favorite and currently, US(2018) is my all time favourie movie.
        </p>
        <p class="text-left text-lg">
          <span class="italic"
            >'It’s not who I am underneath, but what I do that defines me.'
          </span>
          said by my favourie superhero.
        </p>
        <p class="text-left text-lg">
          Music? Yep, why not. I always love listening to music when I'm working. Hans Zimmer's
          music scores make me focus better. You should try that. Here's my recommendation,
          <span class="italic">'TIME by Hans Zimmer'.</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedJob: null,
      show: false,
      previousJobs: [
        {
          id: 1,
          title: 'Bechlor of Computer Science',
          company: '',
          type: 'Graduated',
          from: 'Dec 2009',
          to: 'Dec 2013',
          location: 'Monywa',
        },
        {
          id: 2,
          title: 'Shop Owner',
          company: 'Self-employed',
          type: 'Self-employed',
          from: 'Jan 2014',
          to: 'April 2017',
          location: 'Myanmar 🇲🇲',
          details: [
            {
              detail_id: 1,
              task: "Work on one of the Japan's successful chat bot automation",
            },
            {
              detail_id: 2,
              task: 'Write clean and reusable code tasks using Coffeescript',
            },
          ],
        },
        {
          id: 3,
          title: 'Web Developer',
          company: 'Myanmar High Society',
          type: 'Full-Time',
          from: 'Jan 2014',
          to: 'April 2017',
          location: 'Myanmar 🇲🇲',
          details: [
            {
              detail_id: 1,
              task: "Work on one of the Japan's successful chat bot automation",
            },
            {
              detail_id: 2,
              task: 'Write clean and reusable code tasks using Coffeescript',
            },
          ],
        },
        {
          id: 4,
          title: 'Senior Web Developer',
          company: 'Myanmar Media Linkage',
          type: 'Full-Time',
          from: 'Jul 2020',
          to: 'Mar 2021',
          location: 'Myanmar 🇲🇲',
          details: [
            {
              detail_id: 1,
              task: "Work on one of the Japan's successful chat bot automation",
            },
            {
              detail_id: 2,
              task: 'Write clean and reusable code tasks using Coffeescript',
            },
          ],
        },
        {
          id: 5,
          title: 'Lead Programming Engineer',
          company: 'Professy',
          type: 'Full-Time',
          from: 'Mar 2021',
          to: 'Current',
          location: 'Japan 🇯🇵',
          details: [
            {
              detail_id: 1,
              task: "Work on one of the Japan's successful chat bot automation",
            },
            {
              detail_id: 2,
              task: 'Write clean and reusable code tasks using Coffeescript',
            },
          ],
        },
      ],
    }
  },
  computed: {
    reorderJobs() {
      return this.previousJobs.slice().reverse()
    },
  },
  created() {
    this.selectedJob = this.previousJobs.length
  },
}
</script>
<style scoped>
ul {
  position: relative;
}
ul::after {
  position: absolute;
  top: 5px;
  left: 0;
  content: '';
  background-image: url('../assets/check.svg');
  display: inline-block;
  height: 24px;
  width: 24px;
  text-align: center;
  line-height: 24px;
}
ul::before {
  position: absolute;
  left: 11px;
  top: 30px;
  content: '';
  height: 100%;
  width: 0;
  --tw-divide-opacity: 1;
  border-left: 2px solid #000;
  border-color: rgba(209, 213, 219, var(--tw-divide-opacity));
}
.lastItem::before {
  --tw-divide-opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
