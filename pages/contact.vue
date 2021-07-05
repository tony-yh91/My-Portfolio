<template>
  <div
    class="container xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg xl:mx-auto space-y-10"
  >
    <section class="px-5 py-5 flex flex-col">
      <div class="space-y-3">
        <h3 class="text-lg text-green-800 font-semibold uppercase">Contact me</h3>
        <h3 class="text-3xl dark:text-white md:text-4xl font-bold">Let's talk about this</h3>
      </div>
      <p class="py-5 dark:text-white">
        Interested to discuss with me for your valuable project? May be just a question? I would
        love to hear from you.
      </p>
      <form class="space-y-5">
        <input
          type="text"
          name="senderName"
          placeholder="Name"
          class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
        />
        <input
          type="text"
          name="senderEmail"
          placeholder="Email"
          class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
        />
        <textarea
          id="senderBody"
          name="senderBody"
          rows="3"
          class="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          placeholder="Please describe your detail."
        ></textarea>
        <button
          class="bg-green-300 font-bold py-2 px-4 rounded-md hover:shadow-xl text-black hover:bg-green-500"
        >
          Send
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {}
</script>
