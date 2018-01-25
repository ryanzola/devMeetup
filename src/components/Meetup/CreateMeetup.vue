<template>
  <v-container fluid class="mt-0">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Create a new Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="170">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                multi-line
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row class="mb2">
            <v-flex xs12 sm6 offset-sm3>
              <h4>Choose a date and time</h4>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{date}}</p>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time"></v-time-picker>
              <p>{{time}}</p>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs-12 sm-6 offset-sm3>
              <v-spacer></v-spacer>
              <v-btn dark 
                class="red darken-4" 
                :disabled="!formIsValid"
                type="submit">Create Meetup</v-btn>
                <p>{{submittableDateTime}}</p>
            </v-flex> 
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: '',
      time: new Date()
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
    },
    submittableDateTime () {
      const date = new Date()

      if (this.time !== null) {
        const hours = this.time.getHours
        const minutes = this.time.getMinutes

        date.setHours(hours)
        date.setMinutes(minutes)
      }

      return date
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
