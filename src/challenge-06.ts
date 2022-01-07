import { Equal, Expect } from "./utils";

// it would be interesting to do this with recursion,
// but I couldn't think of how to derive a Number of
// a type without using many lines

// type Length<T extends readonly unknown[]> =
//   T extends [infer _, ...infer tail]
//   ? Length<tail>
//   : 1;

type Length<T extends readonly unknown[]> = T["length"];

// or

type _Length<T extends readonly unknown[]> = T extends { length: infer R }
  ? R
  : never;

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>
];
