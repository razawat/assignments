/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const KEYS = {
  name: "category",
  totalAmount: "totalSpent",
  amount: "price",
};

function calculateTotalSpentByCategory(transactions) {
  const totalSpend = transactions.reduce((a, b) => {
    const index = a.findIndex((obj) => obj[KEYS.name] == b[KEYS.name]);
    //console.log(index,b['category']);
    if (index != -1) {
      a[index][KEYS.totalAmount] += b[KEYS.amount];
    } else {
      a.push({ [KEYS.name]: b[KEYS.name], [KEYS.totalAmount]: b[KEYS.amount] });
    }
    return a;
  }, []);
  //console.log(totalSpend);
  return totalSpend;
}

// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656105600000,
//     price: 20,
//     category: "Food",
//     itemName: "Burger",
//   },
//   {
//     id: 3,
//     timestamp: 1656134400000,
//     price: 30,
//     category: "Food",
//     itemName: "Sushi",
//   },
// ];

// calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
