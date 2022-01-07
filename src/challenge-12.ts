import { T } from "ts-toolbelt";
import { Equal, Expect } from "./utils";

type Push<T extends unknown[], U> = [...T, U];

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>
];
