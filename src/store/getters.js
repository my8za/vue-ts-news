export default {
  fetchedItem(state) {
    return state.item;
  },
  fetchedUser(state) {
    return state.user;
  },
  // hoc
  fetchedList(state) {
    return state.list;
  },
  // ItemView
  userName(state) {
    return state.item.user;
  },
  userContent(state) {
    return state.item.content;
  },
  userQuestion(state) {
    return state.item.title;
  },
  userTimeAgo(state) {
    return state.item.time_ago;
  },
  contentPoints(state) {
    return state.item.points;
  },

  // token
  getToken(state) {
    return state.token
  }
};
