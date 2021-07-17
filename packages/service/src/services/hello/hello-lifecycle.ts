export const lifecycle = {
  // Note: Created is not async function
  created() {
    console.log('Service created');
  },

  async started() {},

  async stopped() {},
};
