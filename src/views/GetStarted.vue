<template>
  <div class="page">
    <div class="content-bg-0" style="padding-top: 3%">
      <div class="container">
        <form @submit.prevent="onSubmit" class="form" id="regForm">
          <div class="form__grid form__head">
            <div>
              <h1 class="form__header">Getting started</h1>
              <h4 class="form__sub">
                Upload your Resume and find out which job fits you best!
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
                    :src="require('/src/assets/upload_file_white_24dp.svg')"
                    alt=""
                  />
                </div>
                <div class="tab-nav__item">
                  <img
                    :src="require('/src/assets/work_white_24dp.svg')"
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
              <!-- Upload your Resumé -->
              <div class="tab" id="Upload Resume">
                <h1 class="form__header">Upload your Resumé</h1>
                <h4 class="form__sub">
                  Upload your Resumé as a PDF file to get in analyzed and rated
                  by our algorithm
                </h4>
                <div class="input-container" style="justify-content: center">
                  <!-- <input
                    class="box__file-temp"
                    type="file"
                    name="files"
                    id="files"
                  />
                  <label for="files">
                    <upload-ico /> <br />
                    <strong>Choose a file</strong
                    ><span> or drag it here</span>.</label
                  >
                  <button class="box__button" @click="uploadFile">
                    Upload
                  </button> -->
                  <div
                    class="box-input"
                    id="file"
                    v-cloak
                    @drop.prevent="addFile"
                    @dragover.prevent
                  >
                    <div v-if="files.length == 0">
                      <input
                        class="box__file"
                        type="file"
                        name="files"
                        id="files"
                      />
                      <label for="files">
                        <upload-ico /> <br />
                        <strong>Choose a file</strong
                        ><span> or drag it here</span>.</label
                      >
                      <button class="box__button" @click="uploadFile">
                        Upload
                      </button>
                    </div>
                    <div v-else>
                      <label
                        for="file"
                        v-for="(file, index) in files"
                        :key="index"
                        >{{ file.name }}</label
                      >
                      <br />
                      <button class="box__button" @click="uploadFile">
                        Upload
                      </button>
                    </div>
                  </div>
                  <div class="box__uploading">Uploading…</div>
                  <div class="box__success">Done!</div>
                  <div class="box__error">Error! <span></span>.</div>
                </div>
              </div>
              <!-- Get lists of Jobs -->
              <div class="tab" id="Job View">
                <h1 class="form__header">Final steps</h1>
                <h4 class="form__sub">
                  Please enter the location and salary of your dream job!
                </h4>
                <div class="input-container">
                  <label for="dropdown" class="form__label"
                    >Enter a location</label
                  >
                  <input
                    id="location-input"
                    list="location-list"
                    class="form__input"
                    v-model="formData.location"
                  />
                  <datalist id="location-list">
                    <option
                      v-for="(location, index) in locations"
                      :key="index"
                      :value="location.title"
                    ></option>
                  </datalist>

                  <label for="salary" class="form__label">Enter a Salary</label>
                  <input
                    id="salary"
                    type="text"
                    class="form__input"
                    disabled
                    placeholder="not yet implemented"
                  />
                </div>
              </div>
              <div class="tab">
                <h1 class="form__header">We have found a job category</h1>
                <h4 class="form__sub">
                  Our algorithm has picked out a job category based on your
                  Resume. Please click the submit button to view fitting jobs in
                  your area!
                </h4>
                <p class="form__sub" v-html="predictedJob">
                  [default value. should not appear]
                </p>
              </div>
              <button class="form__button" id="nextBtn" @click="nextPrev(1)">
                Next step
              </button>
              <router-link
                :to="{
                  name: 'Jobs',
                  params: { jobtitle: predictedJob },
                }"
                :jobtitle="predictedJob"
                >Take a look!</router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import Upload from "vue-material-design-icons/FileUpload.vue";

export default {
  name: "GetStarted",
  components: {
    "upload-ico": Upload,
  },
  data() {
    return {
      currentTab: 0,
      presets: [],
      predictedJob: "",
      sanitycheck: {
        message: "",
        status: "",
      },
      tabs: document.getElementsByClassName("tab"),
      files: [],
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
  created() {},
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
      this.tabs[this.currentTab].style.display = "none";
      this.currentTab = this.currentTab + n;
      if (this.currentTab >= this.tabs.length) {
        document.getElementById("nextBtn").type = "submit";
        return false;
      }
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

    comments() {
      // getSets() {
      //   const path = "http://localhost:5000/pre";
      //   axios
      //     .get(path)
      //     .then((res) => {
      //       this.presets = res.data.pre;
      //     })
      //     .catch((error) => {
      //       // eslint-disable-next-line
      //       console.error(error);
      //     });
      // },
      // initForm() {
      //   (this.files = []), (this.formData.preset = "");
      //   this.formData.config = "";
      //   this.formData.read = [];
      // },
      // addData(payload) {
      //   const path = "http://localhost:5000/pre";
      //   axios
      //     .post(path, payload)
      //     .then(() => {
      //       this.getSets();
      //     })
      //     .catch((error) => {
      //       // eslint-disable-next-line
      //       console.log(error);
      //       this.getSets();
      //     });
      // },
    },

    onSubmit(evt) {
      evt.preventDefault();
      // let read = false;
      // if (this.formData.read[0]) read = true;
      // const payload = {
      //   title: this.formData.preset,
      //   config: "",
      //   read,
      // };
      // this.addData(payload);
      // this.initForm();
    },

    uploadFile(e) {
      var formElement = document.querySelector("#regForm"),
        request = new XMLHttpRequest(),
        data = new FormData(formElement);

      this.files.forEach((f, x) => {
        console.log(f, "+", x);
        data.append("file" + (x + 1), f);
      });

      request.open("POST", "https://res-mmg-backend.herokuapp.com/send", false);
      request.send(data);
      this.predictedJob = request.response;
      console.log(request.responseText);

      e.preventDefault();
      e.stopPropagation();
    },
    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      [...droppedFiles].forEach((f) => {
        this.files.push(f);
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
    font-size: 14px;
    font-weight: bold;
    color: var(--on-body);
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

.box-input {
  width: 400px;
  height: 150px;
  background: var(--body);
  color: var(--on-body);
  border: 1px solid #3082ff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box__file {
  width: 0.1px;
  height: 0.1px;
  position: absolute;
  z-index: -1;
  opacity: 0;
  overflow: hidden;
}
.box__file + label > strong {
  cursor: pointer;
}
.box__file:hover + label > strong:hover {
  color: #a9ccff;
}

.box__dragndrop,
.box__uploading,
.box__success,
.box__error {
  display: none;
}

.box.is-dragover {
  background-color: grey;
}
</style>
