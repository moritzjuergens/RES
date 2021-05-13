<template>
  <div class="page">
    <div class="content-bg-0" style="padding-top: 3%">
      <div class="container">
        <form @submit.prevent="onSubmit" class="form" id="regForm">
          <div class="form__grid form__head">
            <div>
              <h1 class="form__header">Getting started</h1>
              <h4 class="form__sub">
                Fill out the information and calculate your compatibility score
              </h4>
            </div>
            <button
              class="form__button prev"
              id="prevBtn"
              @click="nextPrev(-1)"
            >
              Back
            </button>
          </div>
          <div class="form__grid">
            <div class="form__grid__item" id="right-border">
              <div class="tab-nav">
                <div class="tab-nav__item">
                  <img
                    :src="require('/src/assets/work_white_24dp.svg')"
                    alt=""
                  />
                </div>
                <div class="tab-nav__item">
                  <img
                    :src="require('/src/assets/upload_file_white_24dp.svg')"
                    alt=""
                  />
                </div>
                <div class="tab-nav__item">
                  <img
                    :src="require('/src/assets/check_circle_white_24dp.svg')"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="form__grid__item">
              <!-- Select your profession -->
              <div class="tab">
                <h1 class="form__header">Select your profession</h1>
                <h4 class="form__sub">
                  Either select one of our pre-sets or link the job posting and
                  we'll figure it out from there!
                </h4>
                <div class="input-container">
                  <label for="dropdown" class="form__label"
                    >Select a pre-set</label
                  >
                  <input
                    id="preset-input"
                    list="preset-list"
                    class="form__input"
                    placeholder="eg. Full-Stack-Developer"
                    v-model="formData.preset"
                  />
                  <datalist id="preset-list">
                    <option
                      v-for="(preset, index) in presets"
                      :key="index"
                      :value="preset.title"
                    ></option>
                  </datalist>

                  <label for="link" class="form__label"
                    >Link the job posting</label
                  >
                  <input
                    type="text"
                    class="form__input"
                    placeholder="eg. https://company.com/hire"
                  />
                </div>
              </div>
              <!-- Upload your Resumé -->
              <div class="tab">
                <h1 class="form__header">Upload your Resumé</h1>
                <h4 class="form__sub">
                  Upload your Resumé as a PDF file to get in analyzed and rated
                  by our algorithm
                </h4>
                <div class="input-container" style="justify-content: center">
                  <label class="form__label" for="drag"
                    >Upload your Resumé</label
                  >
                  <div
                    class="txt-area"
                    name="drag"
                    id="drag"
                    cols="30"
                    rows="10"
                  ></div>
                </div>
              </div>
              <!-- submit -->
              <div class="tab">
                <h1 class="form__header">Getting started3</h1>
                <h4 class="form__sub">
                  Fill out the information and calculate your compatibility
                  score
                </h4>
              </div>
              <button class="form__button" id="nextBtn" @click="nextPrev(1)">
                Next step
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "GetStarted",
  data() {
    return {
      currentTab: 0,
      presets: [],
      tabs: document.getElementsByClassName("tab"),
      formData: {
        preset: "",
        config: "",
        read: [],
      },
    };
  },
  mounted() {
    this.showTab(this.currentTab);
  },
  created() {
    this.getSets();
  },
  methods: {
    showTab(n) {
      // This function will display the specified tab of the form ...
      this.tabs[n].style.display = "block";

      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }

      if (n == this.tabs.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next step";
      }
      this.fixStepIndicator(n);
    },
    nextPrev(n) {
      // This function will figure out which tab to display
      // Exit the function if any field in the current tab is invalid:
      // if (n == 1 && !validateForm()) return false;
      // Hide the current tab:
      this.tabs[this.currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      this.currentTab = this.currentTab + n;
      // if you have reached the end of the form... :
      if (this.currentTab >= this.tabs.length) {
        //...the form gets submitted:
        document.getElementById("nextBtn").type = "submit";
        return false;
      }
      // Otherwise, display the correct tab:
      this.showTab(this.currentTab);
    },
    fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var x = document.getElementsByClassName("tab-nav__item"); //i
      // for (i = 0; i < x.length; i++) {
      //   x[i].className = x[i].className.replace(" active", "");
      // }
      //... and adds the "active" class to the current step:
      x[n].className += " active";
    },
    getSets() {
      const path = "http://localhost:5000/pre";
      axios
        .get(path)
        .then((res) => {
          this.presets = res.data.pre;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    onSubmit(evt) {
      evt.preventDefault();
      let read = false;
      if (this.formData.read[0]) read = true;
      const payload = {
        title: this.formData.preset,
        config: "",
        read,
      };
      this.addData(payload);
      this.initForm();
    },
    initForm() {
      this.formData.preset = "";
      this.formData.config = "";
      this.formData.read = [];
    },
    addData(payload) {
      const path = "http://localhost:5000/pre";
      axios
        .post(path, payload)
        .then(() => {
          this.getSets();
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.getSets();
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  height: 500px;
  background: var(--bg2);
  border: 1px solid #3082ff;
  border-radius: 5px;
  box-shadow: #3083ff77 3px 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;
}
.form {
  width: 86%;
  height: 100%;

  &__header {
    font-size: 1.5rem;
    text-align: left;
    color: var(--on-body);
    margin: 0;
  }
  &__sub {
    width: 55ch;
    text-align: left;
    color: var(--on-body);
    font-weight: lighter;
    margin: 10px 0;
  }
  &__grid {
    width: 100%;
    height: 80%;
    border-top: 1px solid #3082ff;
    display: grid;
    grid-template-columns: 25% 75%;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px 0 20px 40px;
    }
  }
  &__button {
    width: 150px;
    padding: 5px;
    font-size: 1.2rem;
    border: none;
    border-radius: 40px;
    font-weight: bold;
    background: #3082ff;
    color: white;
    cursor: pointer;

    transition: all 0.2s ease;
  }
  &__button:hover {
    transform: scale(1.04);
    box-shadow: 0px 0px 10px #266edac9;
  }
  &__input {
    background: var(--body);
    width: 300px;
    height: 20px;
    border: 1px solid #3082ff;
    border-radius: 5px;
    padding: 5px;
    color: var(--on-body);
  }
  &__label {
    color: rgb(151, 151, 151);
  }
  &__head {
    max-height: 100px;
    border: none;
    grid-template-columns: 94% 6%;
  }
}

.prev {
  background: red;
  width: 50px;
  height: 25px;
  border-radius: 5px;
  font-size: 1rem;
}
.prev:hover {
  box-shadow: rgba(255, 0, 0, 0.507) 0 0 10px;
}

.tab {
  display: none;
}
.input-container {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.tab-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  &__item {
    height: 70px;
    width: 70px;
    background: #8b8b8b;
    opacity: 0.5;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease;
    img {
      width: 60%;
    }
  }
}
.active {
  background: #3082ff;
  opacity: 1;
  transition: all 0.2s;
}
.active:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 20px #3083ff62;
}
#right-border {
  border-right: 1px solid #3082ff;
  padding: 40px 0;
}

.txt-area {
  width: 400px;
  height: 100px;
  background: var(--body);
  color: var(--on-body);
  border: 1px solid #3082ff;
  border-radius: 5px;
  margin-top: 5px;
}
</style>
