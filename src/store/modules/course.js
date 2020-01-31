import {
  getCourses
} from '@/api/course';

const state = {
  lists: {}
};

const mutations = {
  GET_SUCCESS: (state, { data }) => {
    state.lists = data;
  }
};

const actions = {
  getLists: async ({ commit }) => {
    const { data } = await getCourses();
    commit('GET_SUCCESS', data);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
