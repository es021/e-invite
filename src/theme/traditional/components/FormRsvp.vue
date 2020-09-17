
<template>
  <div :style="{padding:'25px 25px'}">
    <div v-if="isSuccess">
      <div v-html="MessageRsvp"></div>
      <button @click="popupClose" class="btn-primary">Got It</button>
    </div>
    <form v-else @submit="onSubmit">
      <div>RSVP</div>
      <div class="form-input">
        <label>Name</label>
        <input required="true" type="text" name="name" v-model="name" />
      </div>
      <div class="form-input">
        <label>Telephone No</label>
        <input required="true" type="text" name="phone_number" v-model="phone_number" />
      </div>
      <div class="form-input">
        <label>Headcount</label>
        <input required="true" type="number" name="headcount" v-model="headcount" />
      </div>
      <!-- <div class="form-input">
        <label>Slot</label>
        <select required="true" name="slot" v-model="slot">
          <option value="11am-12pm">11 AM - 12 PM</option>
          <option value="12pm-1pm">12 PM - 1 PM</option>
          <option value="1pm-2pm">1 PM - 2 PM</option>
          <option value="2pm-3pm">2 PM - 3 PM</option>
          <option value="3pm-4pm">3 PM - 4 PM</option>
        </select>
      </div> -->
      <div v-if="error" class="form-error">{{error}}</div>
      <div class="form-submit">
        <input class="btn-primary" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { EventSlug, MessageRsvp } from "../data";
import { phpRequest } from "../../../helper/api-helper";
export default {
  props: {},
  data: () => {
    return {
      MessageRsvp: MessageRsvp,
      // name: "Wan",
      // event: EventSlug,
      // headcount: "1",
      // phone_number: "0165246",
      // slot: "11am-12pm",
      // error: null,
      // isSuccess: true,

      name: "",
      event: EventSlug,
      headcount: "",
      phone_number: "",
      slot: "",
      error: null,
      isSuccess: false,
    };
  },
  name: "FormRsvp",
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
      phpRequest("rsvp", {
        name: this.name,
        event: this.event,
        headcount: this.headcount,
        phone_number: this.phone_number,
        slot: this.slot,
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

