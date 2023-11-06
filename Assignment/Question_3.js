// Store's inventory object with prices in USD
const inventory = {
    item1: 20,   // Price in USD
    item2: 30,
    item3: 40,
    item4: 50,
  };
  
  // Function to convert prices from USD to INR
  function convertToINR(priceInUSD) {
    const exchangeRate = 80;  // 1 USD to 80 INR
    const priceInINR = priceInUSD * exchangeRate;
    return priceInINR;
  }
  
  // Use the `map` function to create a new object with prices in INR
  const inventoryInINR = {};
  
  for (const item in inventory) {
    if (inventory.hasOwnProperty(item)) {
      const priceInUSD = inventory[item];
      const priceInINR = convertToINR(priceInUSD);
      inventoryInINR[item] = priceInINR;
    }
  }
  
  console.log("Inventory in INR:", inventoryInINR);
  