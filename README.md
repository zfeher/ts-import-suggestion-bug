Step 0, run `npm i`

Step 1, open `app/scripts/b.js` and try to type `foo`, or `foo2`, code completion should show them and import them when accepted. 

actual: error in typescript output

Step 2, comment the `localStorage`, `gulpwatch` and `postcssobjectfitimages` imports and try *Step 1*, again

actual: accepting import suggestion works

NOTE: any of these three (`localStorage`, `gulpwatch` and `postcssobjectfitimages`) can crash the code completion
