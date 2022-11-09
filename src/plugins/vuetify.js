import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#7734e7',
        secondary: '#0132fc',
        accent: '#607d8b',
        anchor: '#0099ff',
      }
    }
  }
});