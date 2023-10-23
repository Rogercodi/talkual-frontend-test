import { useFetch } from "nuxt/app";

export const fetch = async (id: string, body: Object) => {
    let result = await useFetch(
        `http://localhost:1337/api/orders/${id}/donate`,
        {
          method: "post",
          body: body,
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("talkual_token")}`,
          },
        }
      );

      return result;
}