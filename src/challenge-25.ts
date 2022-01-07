import { Equal, Expect } from "./utils";

// type A<S extends string> = S extends `${infer head}${infer _}` ? head : S;
// type B<S extends string> = S extends `${infer _}${infer tail}` ? tail : S;
// type _A = A<"some">; // s
// type _B = B<"some">; // ome

type TrimLeft<S extends string> = S extends `${infer head}${infer tail}`
  ? head extends " " | "\n" | "\t"
    ? TrimLeft<tail>
    : S
  : S;

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>
];
