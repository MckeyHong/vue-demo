import Vue from 'vue'
import Vuex from 'vuex'

import course from './modules/course';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    course
  }
});

if (module.hot) {
  module.hot.accept([
    './modules/course'
  ], () => {
    store.hotUpdate({
      modules: {
        course: require('./modules/course').default
      }
    });
  });
}

export default store;
