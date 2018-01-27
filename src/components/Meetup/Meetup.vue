<template>
  <v-container fluid class="mt-0">
      <v-layout row wrap>
          <v-flex xs12>
              <v-card>
                  <v-card-title>
                      <h3 class="--text">{{meetup.title}}</h3>
                  </v-card-title>
                  <v-card-media
                    :src="meetup.imageUrl"
                    height="130px"
                  ></v-card-media>
                  <v-card-title>
                      <div class="info--text">{{meetup.date | date}} - {{meetup.location}}</div>
                  </v-card-title>
                  <v-card-text>
                      <div>{{meetup.description}}</div>
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn dark class="red darken-4">Register</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
