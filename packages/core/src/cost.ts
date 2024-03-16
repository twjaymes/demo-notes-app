export function calculateCost(storage: number) {
  
//  if a user wants to store 10 or fewer notes, we’ll charge them 
//  $4 per note. For 11 to 100 notes, we’ll charge $2 and any more 
//  than 100 is $1 per note. Since Stripe expects us to provide the 
//  amount in pennies (the currency’s smallest unit) we multiply 
//  the result by 100.


//  const rate2 = storage * 20; // 20 per unit
    const rate = storage <= 20 ? 10 : storage <= 30 ? 10 : 5;
    return rate * storage * 100;
  }