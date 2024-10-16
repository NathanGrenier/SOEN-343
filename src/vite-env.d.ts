/// <reference types="vite/client" />
import React from "react";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  // @ts-expect-error: Duplicate identifier 'content'.
  export default content;
}
