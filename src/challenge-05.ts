import { Equal, Expect } from "./utils";

type First<T extends unknown[]> = T extends [infer First, ...infer _]
  ? First
  : never;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
