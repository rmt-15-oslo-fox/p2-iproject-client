<template lang="">
  <div>
    <TabGroup as="div">
      <div class="border-b border-gray-200">
        <TabList class="-mb-px flex space-x-8">
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                selected
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
              ]"
            >
              Customer Reviews
            </button>
          </Tab>
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                selected
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
              ]"
            >
              FAQ
            </button>
          </Tab>
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                selected
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
              ]"
            >
              License
            </button>
          </Tab>
        </TabList>
      </div>
      <TabPanels as="template">
        <TabPanel class="-mb-10">
          <h3 class="sr-only">Customer Reviews</h3>

          <div
            v-for="(review, reviewIdx) in reviews.featured"
            :key="review.id"
            class="flex text-sm text-gray-500 space-x-4"
          >
            <div class="flex-none py-10">
              <img
                :src="review.avatarSrc"
                alt=""
                class="w-10 h-10 bg-gray-100 rounded-full"
              />
            </div>
            <div
              :class="[
                reviewIdx === 0 ? '' : 'border-t border-gray-200',
                'py-10',
              ]"
            >
              <h3 class="font-medium text-gray-900">{{ review.author }}</h3>
              <p>
                <time :datetime="review.datetime">{{ review.date }}</time>
              </p>

              <div class="flex items-center mt-4">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    review.rating > rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">{{ review.rating }} out of 5 stars</p>

              <div
                class="mt-4 prose prose-sm max-w-none text-gray-500"
                v-html="review.content"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel as="dl" class="text-sm text-gray-500">
          <h3 class="sr-only">Frequently Asked Questions</h3>

          <div v-for="faq in faqs" :key="faq.tittle">
            <dt class="mt-10 font-medium text-gray-900">{{ faq.question }}</dt>
            <dd class="mt-2 prose prose-sm max-w-none text-gray-500">
              <p>{{ faq.answer }}</p>
            </dd>
          </div>
        </TabPanel>

        <TabPanel class="pt-10">
          <h3 class="sr-only">License</h3>

          <div
            class="prose prose-sm max-w-none text-gray-500"
            v-html="license.content"
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
