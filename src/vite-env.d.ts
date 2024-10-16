/// <reference types="vite/client" />

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    // @ts-expect-error: Duplicate identifier 'content'.
    export default content;
}