import {userRequest} from "../requestMethod";

export const createOrder = async (orderData) => {
  try {
    const res = await userRequest.post("/orders", orderData);
    if (res.status === 200) {
      const data = res.data;
      return data;
    } else {
      throw new Error("Failed to create order");
    }
  } catch (error) {
    console.log(error);
  }
};
