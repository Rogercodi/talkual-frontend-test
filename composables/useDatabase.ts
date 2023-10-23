import { Strapi4Response } from "@nuxtjs/strapi/dist/runtime/types";
import {
  OrderListResponse,
} from "~/types";

export const useDatabase = () => {
  const databaseOrders = async (filter: string | undefined) => {
    const { find } = useStrapi();
    const result = await find<OrderListResponse>("orders", {
      populate: ["order_items", "order_meta"],
      filters: {
        type: { $eq: filter},
      },
    });
    return result.data
  };
  return { databaseOrders };
};