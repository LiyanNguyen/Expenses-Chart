const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");
const bar4 = document.querySelector("#bar4");
const bar5 = document.querySelector("#bar5");
const bar6 = document.querySelector("#bar6");
const bar7 = document.querySelector("#bar7");
const spending1 = document.querySelector("#spending1");
const spending2 = document.querySelector("#spending2");
const spending3 = document.querySelector("#spending3");
const spending4 = document.querySelector("#spending4");
const spending5 = document.querySelector("#spending5");
const spending6 = document.querySelector("#spending6");
const spending7 = document.querySelector("#spending7");

const fetchChartData = () => {
	let spendingArray = [];

	fetch('data.json')
		.then((response) => {
			return response.json();
		})
		.then((returnData) => {
			returnData.forEach((data) => { spendingArray.push(data.amount); });
			let maxSpending = Math.max(...spendingArray);

			spending1.innerHTML = `$${spendingArray[0]}`;
			spending2.innerHTML = `$${spendingArray[1]}`;
			spending3.innerHTML = `$${spendingArray[2]}`;
			spending4.innerHTML = `$${spendingArray[3]}`;
			spending5.innerHTML = `$${spendingArray[4]}`;
			spending6.innerHTML = `$${spendingArray[5]}`;
			spending7.innerHTML = `$${spendingArray[6]}`;

			bar1.style.height = `${(spendingArray[0] / maxSpending) * 100}%`;
			bar2.style.height = `${(spendingArray[1] / maxSpending) * 100}%`;
			bar3.style.height = `${(spendingArray[2] / maxSpending) * 100}%`;
			bar4.style.height = `${(spendingArray[3] / maxSpending) * 100}%`;
			bar5.style.height = `${(spendingArray[4] / maxSpending) * 100}%`;
			bar6.style.height = `${(spendingArray[5] / maxSpending) * 100}%`;
			bar7.style.height = `${(spendingArray[6] / maxSpending) * 100}%`;

			let indexOfHighestSpending = spendingArray.indexOf(maxSpending);
			const allBars = document.querySelectorAll(".bar");
			allBars[indexOfHighestSpending].classList.add("highest");
		})	
};

fetchChartData();