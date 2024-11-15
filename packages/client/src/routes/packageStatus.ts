import type { LoaderFunction } from "react-router";
import { redirect } from "react-router-dom";

export declare interface PackageStatusLoaderData {
  data: {
    pickUpAddress: string;
    pickUpDate: string;
    dropOffAddress: string;
    dropOffDate: string;
    status: string;
  };
}

export const loader: LoaderFunction = async function loader({ params }) {
  try {
    const response = await fetch(
      `${__API_PATH__}/trackPackage/${params.packageId}/status`,
      {
        method: "GET",
      },
    );
    if (response.status === 404) {
      return redirect("/package-not-found");
    }
    const data = (await response.json()) as PackageStatusLoaderData["data"];
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: [] };
  }
};
