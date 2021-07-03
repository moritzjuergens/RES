<template>
  <div class="content-bg-0" style="padding-top: 5vh">
    <div class="table-container">
      <table class="table">
        <tr class="table__row">
          <th class="table__header">Job Title</th>
          <th class="table__header">Company</th>
          <th class="table__header">Location</th>
          <th class="table__header">Description</th>
          <th class="table__header"></th>
        </tr>
        <tr class="table__row" v-for="(job, index) in jobs" :key="index">
          <td class="table__data" style="font-weight: bold">{{ job.title }}</td>
          <td class="table__data">{{ job.company }}</td>
          <td class="table__data">{{ job.locations }}</td>
          <td class="table__data">{{ job.description }}</td>
          <td class="table__data">
            <button class="button--action" @click="visitJob(job.url)">
              Visit
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Jobs",
  data() {
    return {
      jobs: [],
    };
  },
  props: {
    jobtitle: String,
    location: String,
  },
  created() {
    this.getJobs();
  },
  methods: {
    getJobs() {
      const path = "https://res-mmg-backend.herokuapp.com/jobs";

      var payload = {
        jobtitle: this.jobtitle,
        location: this.location,
      };
      //   var payload = JSON.stringify(jobQuery);
      console.log(payload);
      axios
        .post(path, payload)
        .then((res) => {
          this.jobs = res.data.jobs;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    visitJob(url) {
      window.open(url);
    },
  },
};
</script>
<style lang="scss" scoped>
.headers {
  margin-bottom: 1.5rem;
}
.table {
  width: 100%;
  border-collapse: collapse;
  &__row {
    height: 80px;
    max-height: 80px;
  }
  &__row:hover {
    background: var(--highlight);
  }
  &__header,
  &__data {
    font-size: 1rem;
    color: var(--body-background-txt);
    text-align: left;
    padding: 15px;

    max-width: 100ch;
  }
  &__data:first-child,
  &__header:first-child {
    padding-left: 30px;
  }
  &__data:last-child,
  &__header:last-child {
    padding-right: 30px;
  }
  &__data {
    height: 80px;
    max-height: 80px;
  }
  &__header {
    font-size: 1.5rem;
  }
  &-container {
    width: 95vw;
    background: var(--object-background-2);
    border: 1px solid var(--color-brand);
    border-radius: 5px;
    box-shadow: #3083ff77 3px 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.button--action {
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 7px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  background: var(--color-brand);
  cursor: pointer;
}
</style>
