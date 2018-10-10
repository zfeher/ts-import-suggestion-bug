import ncu from 'npm-check-updates'

// 1, try to type foo, or foo2, code completion should show them and import 
//  them when accepted actual: error in typescript output

// 2, uncomment the ncu import and try 1, again
//  actual: accepting import suggestion works but it is in a different form 
//  `import("./a").foo` than before `import { foo } from "./a"` (via ts@3.0.3 for example)

