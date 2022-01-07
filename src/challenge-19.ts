import { Equal, Expect } from "./utils";

type TupleToUnion<T extends any[]> = T[number];

type a = TupleToUnion<[123, "456", true]>;

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
