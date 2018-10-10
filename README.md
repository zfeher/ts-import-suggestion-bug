Step 0, run `npm i`

Step 1, open `app/scripts/b.js` and try to type `foo`, or `foo2`, code completion should show them and import them when accepted. 

actual: error in typescript output

Step 2, comment the `ncu` import and try *Step 1*, again

actual: accepting import suggestion works but it is in a different form `import("./a").foo` than before `import { foo } from "./a"` (via ts@3.0.3 for example)
