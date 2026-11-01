import type { ThreeElements } from "@react-three/fiber";

// @types/react 19 moved JSX into the React namespace, so react-three-fiber's global augmentation no longer applies.
declare module "react" {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends ThreeElements {}
  }
}
