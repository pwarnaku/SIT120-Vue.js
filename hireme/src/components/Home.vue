<template>
  <v-container class="red lighten-5">
 
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <!-- Image viewer on the hoe screen -->
          <v-carousel-item
            v-for="service in services"
            :src="service.imageUrl"
            :key="service.id"
             @click="onLoadJobs(service.id)">
            <div class="title">
              {{ service.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
       <v-layout row wrap>
    </v-layout>
    <v-layout row wrap  class="mt-2">
        <br>
        <v-flex xs12 class="text-xs-center">
            <br><br><br>
           <div class="info--text"><h4><b>Why HireMe.com</b></h4></div>
       <p>HireMe.com is well aware of the concerns that students are normally plagued with when it comes to preparing their academic paper. Our assignment experts know that you encounter that lingering sense of fear when it comes to preparing your assignments. No matter how hard you try to enjoy the company of your loved ones, the dread of the impending deadline always plays at the back of your mind. You can hardly shake off this feeling. So how can you cope with it? It’s simple; you can seek the help of our experts who understand your problems, and this actually drives them to produce the best; the most authentic and genuine content for your assignments.</p>
       <br>
       <p>As per the results of another study those who hire study help from professional help providers improve their grades two times faster than those who don't. Due to the increasing popularity of academic study help service, now more than 85% of University students are into hiring writing and editing assistance from online study help portals. But a coin has two sides; not every study help providers in Australia are worth your time and money. To get the best result most swiftly, you can rely on HireMe.com. </p>
        <br>
        <p>At HireMe.com we believe in maintaining nominal rates so that every student can easily avail our educational study support services. Unlike many other study help providers, it is our assurance that you will get the best deal only at HireMe.com. We regularly revise our rates and make sure students are getting educational study guides at the best market price.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        services: [
          { imageUrl: 'https://www.houseofbots.com/images/news/3630/cover.png', id: 'afajfjadfaadfa323', title: 'Programming' },
          { imageUrl: 'https://www.assignmenttask.com/images/custome-essay-writing-help-price.png', id: 'aadsfhbkhlk1241', title: 'Essay' },
          { imageUrl: 'http://www.mycasestudyhelp.com/wp-content/uploads/2019/01/Case-study-help-1.jpg', id: 'aadsfhbkhlkfvgvcdx1241', title: 'Case Study' },
          { imageUrl: 'http://www.assignmenthelphub.com/Blog/wp-content/uploads/2017/04/law-assignmen-HELP.jpg', id: 'uhguhjkl', title: 'Law' }
        ]
      }
    },
    methods: {
      onLoadJobs (id) {
        this.$router.push('/staff/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
