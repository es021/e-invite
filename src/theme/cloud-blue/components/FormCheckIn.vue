
<template>
  <div :style="{padding:'25px 25px'}">
    <div v-if="isSuccess">
      <div v-html="MessageCheckIn"></div>
      <button @click="popupClose" class="btn-primary">Close</button>
    </div>
    <form v-else @submit="onSubmit">
      <div>Checking In</div>
      <div class="form-input">
        <label>Name</label>
        <input required="true" type="text" name="name" v-model="name" />
      </div>
      <div class="form-input">
        <label>Telephone No</label>
        <input required="true" type="text" name="phone_number" v-model="phone_number" />
      </div>
      <div class="form-input">
        <label>Temperature</label>
        <input type="text" name="temperature" v-model="temperature" />
      </div>
      <div v-if="error" class="form-error">{{error}}</div>
      <div class="form-submit">
        <input class="btn-secondary" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { EventSlug, MessageCheckIn } from "../data";
import { phpRequest } from "../../../helper/api-helper";
export default {
  props: {},
  data: () => {
    return {
      MessageCheckIn: MessageCheckIn,

      // name: "Wan",
      // event: EventSlug,
      // headcount: "1",
      // phone_number: "0165246",
      // slot: "11am-12pm",
      // error: null,
      // isSuccess: true,

      event: EventSlug,
      name: "",
      phone_number: "",
      temperature: "",
      error: null,
      isSuccess: false,
    };
  },
  name: "FormCheckIn",
  mounted: () => {},
  methods: {
    ...mapMutations(["popupOpen", "popupClose"]),
    onSubmitError(err) {
      this.error = err;
    },
    onSubmitSuccess(err) {
      this.isSuccess = true;
    },
    onSubmit(e) {
      this.error = null;
      e.preventDefault(e);
      phpRequest("check-in", {
        name: this.name,
        event: this.event,
        phone_number: this.phone_number,
        temperature: this.temperature,
      })
        .then((res) => {
          try {
            if (res.data.status == "1") {
              this.onSubmitSuccess();
              return;
            } else {
              this.onSubmitError("[1] " + res.data.error);
              return;
            }
          } catch (err) {
            this.onSubmitError("[2] " + err.toString());
            return;
          }
        })
        .catch((err) => {
          this.onSubmitError("[3] " + err.toString());
          return;
        });
    },
  },
};
</script>

