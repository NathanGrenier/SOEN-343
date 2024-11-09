import type { ActionFunction, LoaderFunction } from "react-router";

export declare interface TestLoaderData {
  data: { id: number; name: string; created_at: string }[];
}

export const loader: LoaderFunction = async function loader() {
  try {
    const response = await fetch(`${__API_PATH__}/test`, {
      method: "GET",
    });
    const data = (await response.json()) as TestLoaderData["data"];
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: [] };
  }
};

export const action: ActionFunction = async function action({
  request,
  params,
}) {
  const method = request.method.toLowerCase();
  switch (method) {
    case "delete": {
      const deleteRes = await fetch(`${__API_PATH__}/test/${params.id}`, {
        method: "DELETE",
      });
      if (!deleteRes.ok) throw deleteRes;
      return { ok: true };
    }
    case "post": {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);

      const postRes = await fetch(`${__API_PATH__}/test`, {
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
