document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', calculateTip)
})

function calculateTip(e) {
  e.preventDefault()
  const bill = parseFloat(e.target.bill.value)
  const service = parseInt(e.target.service.value)
  const guests = parseInt(e.target.party.value)
  
  const tip = document.querySelector('#tip')
  const tipAmount = ((bill * service) / guests / 100).toFixed(2)
  tip.textContent = `Each guest should tip $${tipAmount}.`
}