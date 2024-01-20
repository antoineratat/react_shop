import { authFetch } from "./../utils/authHooks";

export default async function deleteCart(cart_id) {
  const response = await authFetch(
    "https://antoineratat.xyz/api_shop/api/cart/" + cart_id,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let responseJson = undefined;
  let errorJson = undefined;
  if (response.ok) {
    responseJson = await response.json();
  } else {
    if (response.status === 400) {
      errorJson = await response.json();
    }
    if (response.status === 401) {
      errorJson = await response.json();
    }
  }

  return new Promise((resolve, reject) => {
    responseJson ? resolve(responseJson) : reject(errorJson.message);
  });
}
