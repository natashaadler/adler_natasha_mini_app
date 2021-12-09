
(() => {
  new Vue({
    el: '#app',
    data: {
      items1: [],
      focusItem: null,
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        fetch("./includes/data.php")
        .then(data => data.json())
        .then(response => {
          this.items1 = response;
          this.focusItem = null;
        })
      },
      open(item) {
        this.focusItem = item;
      },
      close() {
        this.focusItem = null;
      }
    }
  })
})();