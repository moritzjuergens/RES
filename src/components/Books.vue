<template>
  <div>
    <h1 v-for="(book, index) in books" :key="index">{{ book.title }}</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Books",
  data() {
    return {
      books: [],
    };
  },
  methods: {
    getBooks() {
      const path = "http://localhost:5000/books";
      axios
        .get(path)
        .then((res) => {
          this.books = res.data.books;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getBooks();
  },
};
</script>
