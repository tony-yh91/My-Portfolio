<template>
  <section class="mt-7 py-5 px-5 space-y-6">
    <header class="space-y-3">
      <h3 class="text-lg text-green-500 font-semibold tracking-wider uppercase">Timeline</h3>
      <h3 class="text-3xl md:text-4xl font-bold">An unexpected journey.</h3>
    </header>

    <div v-for="(prevJob, index) in reorderJobs" :key="prevJob.id" class="flex flex-row ml-5">
      <!-- <h3 class="text-3xl text-left p-3">Work Experience</h3> -->
      <!-- <div class="justify-center items-center pt-1">
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
      </div> -->
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
    <!-- Education -->

    <!-- <article class="border border-blue-100 rounded-t-lg">
      <h3 class="text-2xl text-left bg-blue-200 rounded-t-lg p-3">Education</h3>
      <div
        class="flex flex-row px-5 py-1 space-x-5 py-2 divide-x divide-blue-100"
      >
        <div class="space-x-5 flex flex-rowspace-y-2 md:w-2/4">
          <div class="justify-center items-center pt-1">
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
            <dd class="text-sm text-gray-500">
              University of Computer Studies
            </dd>
            <dd class="text-sm text-gray-500">Monywa</dd>
          </div>
        </div>
        <div class="hidden md:block rounded w-3/4 pl-5">
          <div class="justify-center items-center space-y-1">
            <img src="../assets/bcsc.jpeg" alt="" class="src" />
          </div>
        </div>
      </div>
    </article> -->
  </section>
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
    getSelectedJob() {
      return this.previousJobs.find((prev) => prev.id === this.selectedJob)
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
