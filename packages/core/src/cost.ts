//  New Rate Calculation
//  const rate2 = storage * 20; // 20 per unit



//  Default Rate Calculation
//  The calculateCost function takes a storage parameter and returns
//  if a user wants to store 10 or fewer notes, we’ll charge them 
//  $4 per note. For 11 to 100 notes, we’ll charge $2 and any more 
//  than 100 is $1 per note. Since Stripe expects us to provide the 
//  amount in pennies (the currency’s smallest unit) we multiply 
//  the result by 100.
export function calculateCost(storage: number) {
  const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
  return rate * storage * 100;
}