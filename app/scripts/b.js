import * as npmcheckupdates from "npm-check-updates" // fixed in 3.1.3
import * as localStorage from "localStorage" // fails in 3.1.3, 3.2.0-dev.20181011
import * as postcssobjectfitimages from "postcss-object-fit-images"  //fails in 3.1.3, 3.2.0-dev.20181011
import * as gulpwatch from "gulp-watch" // ok in 3.1.3, fails in 3.2.0-dev.20181011

// 1, try to type foo, or foo2, code completion should show them and import 
//  them when accepted actual: error in typescript output

// 2, uncomment the `localStorage`, `gulpwatch` and `postcssobjectfitimages` 
//  imports and try 1, again
//  actual: accepting import suggestion works, no code completion crash

// NOTE: any of these three (`localStorage`, `gulpwatch` and `postcssobjectfitimages`) 
//  can crash the code completion
