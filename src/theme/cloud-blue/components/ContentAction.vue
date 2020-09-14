
<template>
  <div class="action">
    <button @click="onClickRsvp" class="action-btn action-rsvp">
      <div>
        <i class="fa fa-calendar-check"></i>
      </div>
      <label>RSVP</label>
    </button>

    <button @click="onClickCheckIn" class="action-btn action-check-in">
      <div>
        <i class="fa fa-sign-in-alt"></i>
      </div>
      <label>CHECK IN</label>
    </button>
  </div>
</template>
<script>
import * as Data from "../data";
import { mapGetters, mapMutations } from "vuex";
import FormRsvp from "./FormRsvp";
import FormCheckIn from "./FormCheckIn";

export default {
  name: "ContentAction",
  data: () => {
    return {
      FormRsvp: FormRsvp,
      FormCheckIn: FormCheckIn,
      ...Data.Action,
    };
  },
  mounted() {
    this.popupOpen({ content: FormRsvp, prop: {} });
  },
  methods: {
    ...mapMutations(["popupOpen", "popupClose"]),
    onClickRsvp() {
      this.popupOpen({ content: FormRsvp, prop: {} });
    },
    onClickCheckIn() {
      this.popupOpen({ content: FormCheckIn, prop: {} });
    },
  },
};
</script>



