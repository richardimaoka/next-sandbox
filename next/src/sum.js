module.exports = {
  sum: function sum(a, b) {
    return a + b;
  },

  fetchData: async function fetchData() {
    return "peanut butter";
  },

  fetchDataE: async function fetchDataE() {
    throw "error";
  },
};
