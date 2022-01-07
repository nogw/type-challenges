import { Equal, Expect } from "./utils";

type LookUp<U, T> = U extends Record<"type", string>
  ? U["type"] extends T
    ? U
    : never
  : never;

// Animal -> Animal["type"]
// Dog | Cat  -> Cat | Dog["type"] == T ? Cat | Dog["type"] : never

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>
];
