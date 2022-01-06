import { Equal, Expect } from "./utils";

type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const t = typeof tuple;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];
