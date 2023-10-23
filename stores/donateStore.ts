import { defineStore } from "pinia";
import { fetch } from "#imports";


export const useDonateStore = defineStore("donate", {
  state: () => ({
    orderId: "",
    body: {
      order_meta: {
        shipping_postcode: "",
        shipping_firstname: "",
      },
    },
  }),
  actions: {
    async donateOrder() {
      try {
        await fetch(this.orderId, this.body);
      } catch (error) {
        console.log(error);
      }
    },

    setId(id: string) {
      this.orderId = id;
    },
    setFirstname(data: string) {
      this.body.order_meta.shipping_firstname = data;
    },
    setPostalCode(data: string) {
      this.body.order_meta.shipping_postcode = data;
    },
  },
});
