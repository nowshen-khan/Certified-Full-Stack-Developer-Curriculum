/*
==================================================================
Lab: Blackjack Card Counting Assistant
==================================================================

Problem:
In the casino game Blackjack, a player can determine whether they
have an advantage over the house by keeping track of high and low
cards remaining in the deck. This is called Card Counting.

Having more high cards remaining favors the player.
- Positive count → Bet
- Zero or negative count → Hold

User Stories / Requirements:
1. Use a global variable 'count' initialized to 0
2. Function cc(card) receives a number or string
3. 2–6 → count++
4. 7–9 → count unchanged
5. 10, J, Q, K, A → count--
6. Return string: "{count} Bet" if count > 0, else "{count} Hold"

Example Test Cases:
- [2,3,4,5], cc(6) → "5 Bet"
- [7,8], cc(9) → "0 Hold"
- [10,"J","Q","K"], cc("A") → "-5 Hold"
- [3,7,"Q",8], cc("A") → "-1 Hold"
- [2,"J",9,2], cc(7) → "1 Bet"
- [2,2], cc(10) → "1 Bet"
- [3,2,"A",10], cc("K") → "-1 Hold"
==================================================================
*/

let count = 0;

function cc(card) {
	if ([2, 3, 4, 5, 6].includes(card)) count++;
	else if ([10, "J", "Q", "K", "A"].includes(card)) count--;
	return `${count} ${count > 0 ? "Bet" : "Hold"}`;
}

// =================== Tests ===================

// Helper to reset count
function resetCount() {
	count = 0;
}

// Test 4
resetCount();
cc(2);
cc(3);
cc(4);
cc(5);
console.log("Test 4:", cc(6)); // Expected: "5 Bet"

// Test 5
resetCount();
cc(7);
cc(8);
console.log("Test 5:", cc(9)); // Expected: "0 Hold"

// Test 6
resetCount();
cc(10);
cc("J");
cc("Q");
cc("K");
console.log("Test 6:", cc("A")); // Expected: "-5 Hold"

// Test 7
resetCount();
cc(3);
cc(7);
cc("Q");
cc(8);
console.log("Test 7:", cc("A")); // Expected: "-1 Hold"

// Test 8
resetCount();
cc(2);
cc("J");
cc(9);
cc(2);
console.log("Test 8:", cc(7)); // Expected: "1 Bet"

// Test 9
resetCount();
cc(2);
cc(2);
console.log("Test 9:", cc(10)); // Expected: "1 Bet"

// Test 10
resetCount();
cc(3);
cc(2);
cc("A");
cc(10);
console.log("Test 10:", cc("K")); // Expected: "-1 Hold"
