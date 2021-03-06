import { Equal, Expect } from "./utils";

type Last<T extends any[]> = T extends [...infer head, infer tail]
  ? tail
  : never;

// or

type _Last<T extends any[]> = T extends [infer head, ...infer tail]
  ? T[tail["length"]]
  : never;

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
