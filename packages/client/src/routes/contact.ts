import type { ActionFunction } from "react-router";

export declare interface ContactActionData {
  ok: boolean;
}

export const action: ActionFunction = async function action({ request }) {
  const method = request.method.toLowerCase();
  switch (method) {
    case "post": {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      const postRes = await fetch(`${__API_PATH__}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!postRes.ok) throw postRes;
      return { ok: true };
    }
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};
