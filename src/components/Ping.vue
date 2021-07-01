<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Ping",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    async getMessage() {
      const path = "https://res-mmg-backend.herokuapp.com/ping";
      await axios
        .get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
