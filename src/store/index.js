import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1507218132/new-york-city-skyline-CHEAPNYCFLIGHT1017.jpg?itok=BuIH6Efp',
        id: 'dfvirv235',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'Manhattan, New York',
        description: 'the coolest meetups ever happen in New York City!'
      },
      {
        imageUrl:
          'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/visuel-carrousel-dossier-ou-sortir-le-soir-a-paris-740x380-c-dr/16967596-1-fre-FR/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-740x380-C-DR.jpg',
        id: 'dfvirv236',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris! Have some cheese!'
      },
      {
        imageUrl:
          'https://cdn.londonandpartners.com/visit/general-london/areas/westminster-st-james/60262-640x360-parliament-bridge-640.jpg',
        id: 'dfvirv237',
        title: 'Meetup in London',
        date: new Date(),
        location: 'London Bridge, London'
      },
      {
        imageUrl:
          'https://cdn.theculturetrip.com/wp-content/uploads/2015/11/Sweden-%C2%A9-Kalin-Eftimov-Shutterstock-650x434.jpg',
        id: 'dfvirv238',
        title: 'Meetup in Sweden',
        date: new Date(),
        location: 'IKEA, Sweden',
        description: 'Hej varlden!'
      }
    ],
    user: {
      id: 'qwerty123',
      registeredMeetups: ['kjhgfdrthb5']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: Math.floor(Math.random() * Math.floor(3)).toString()
      }

      // Reach out to firebase and store
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetup (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
