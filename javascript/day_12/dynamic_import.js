const mathObj = await import('./math.js')

console.log("mathObj: ",mathObj)
mathObj.default(10,20)
mathObj.sub(10,20)
mathObj.mul(10,20)