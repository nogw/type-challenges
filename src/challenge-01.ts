import { Equal, Expect, NotAny } from "./utils";

type HelloWorld = string;
type Cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
