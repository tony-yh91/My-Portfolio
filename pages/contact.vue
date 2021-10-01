<template>
  <div class="w-11/12 max-w-5xl mx-auto px-1">
    <section class="flex flex-col">
      <h3 class="text-xl md:text-2xl font-bold tracking-tight">Contact me</h3>
      <p class="py-5 text-base md:text-lg font-light">
        Interested to discuss with me for your valuable project? May be just a question? I would
        love to hear from you.
      </p>
      <form class="space-y-5">
        <input
          v-model="name"
          type="text"
          name="senderName"
          placeholder="Name"
          class="
            shadow-sm
            p-2
            w-full
            rounded-md
            sm:text-sm
            border border-borderSecondary
            text-textSecondary
          "
        />
        <input
          v-model="email"
          type="text"
          name="senderEmail"
          placeholder="Email"
          class="
            shadow-sm
            p-2
            w-full
            rounded-md
            sm:text-sm
            border border-borderSecondary
            text-textSecondary
          "
        />
        <textarea
          id="senderBody"
          v-model="description"
          name="senderBody"
          rows="3"
          class="
            shadow-sm
            p-2
            w-full
            rounded-md
            sm:text-sm
            border border-borderSecondary
            text-textSecondary
          "
          placeholder="Please describe your detail."
        ></textarea>
        <button
          type="button"
          class="
            rounded
            px-5
            py-2.5
            overflow-hidden
            group
            text-textSecondary
            bg-buttonPrimary
            hover:ring-2
            hover:ring-offset-2
            hover:ring-offset-backgroundPrimary
            hover:ring-buttonPrimary
            transition-all
            ease-out
            duration-300
          "
          @click="sendMail"
        >
          Send
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      description: '',
    }
  },
  methods: {
    sendMail() {
      this.$axios({
        method: 'POST',
        url: '/sendmail',
        baseURL: process.env.NETLIFY_FUNCTION_URL,
        data: {
          name: this.name,
          email: this.email,
          description: this.description,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            this.$toast.success('Email sent.', {
              duration: 3000,
            })
          } else {
            this.$toast.error(
              'Sorry! Unable to send email right now. Could you plese contact me by clicking this?',
              {
                action: [
                  {
                    text: 'Link',
                    href: 'mailto:ygxan18@gmail.com?subject=Hello',
                  },
                  {
                    icon: 'CLOSE',
                    onClick: (e, toastObject) => {
                      toastObject.goAway(0)
                    },
                  },
                ],
              }
            )
          }
        })
        // eslint-disable-next-line node/handle-callback-err
        .catch((error) => {
          this.$toast.error(
            'Sorry! Unable to send email right now. Could you plese contact me by clicking this?',
            {
              action: [
                {
                  text: 'Link',
                  href: 'mailto:ygxan18@gmail.com?subject=Hello',
                },
                {
                  icon: 'CLOSE',
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0)
                  },
                },
              ],
            }
          )
        })
    },
  },
}
</script>
