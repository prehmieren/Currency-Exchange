const currency1 = document.getElementById("currency1")
const currency2 = document.getElementById("currency2")

const amount1 = document.getElementById("amount1")
const amount2 = document.getElementById("amount2")

const rateText = document.getElementById("rate")
const swap = document.getElementById("btn")

currency1.addEventListener("change", calculateMoney)
function calculateMoney() {
    const one = currency1.value
    const two = currency2.value
    amount1.addEventListener('input', calculateMoney)
    amount2.addEventListener('input', calculateMoney)
    fetch(`https://v6.exchangerate-api.com/v6/d5208b3fd839226df070e668/latest/${one}`)
        .then(res => res.json()).then(data => {
            const rate = data.conversion_rates[two]
            rateText.innerText = `1${one} = ${rate}${two}`
            amount2.value = (amount1.value * rate).toFixed(2)
        })
}
swap.addEventListener("click", () => {
    // EUR => THB || THB => USD
    // TEMP => EUR || THB => EUR
    const temp = currency1.value
    currency1.value = currency2.value //ต้นทาง
    currency2.value = temp
    calculateMoney()
})
calculateMoney()