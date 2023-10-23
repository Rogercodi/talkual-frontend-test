import { defineStore } from "pinia";

import { useDatabase } from "../composables/useDatabase";

export const useOrdersStore = defineStore({
  id: "orders",
  state: () => ({
    filter: undefined as undefined | string,
    orders: [] as any[],
  }),
  actions: {
    async setFilter(filter: string) {
      if (filter === "undefined") {
        this.filter = undefined;
      } else {
        this.filter = filter;
      }
    },

    async getOrders() {
      const { databaseOrders } = useDatabase();
      this.orders = await databaseOrders(this.filter);
    },
  },
});
