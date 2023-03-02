const generateRandomColor = () => {
  const existingBudgetsLength = fetchData('budgents')?.length ?? 0;
  return `${existingBudgetsLength + 34} 65% 50%`
}

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key)
}

export const createBudget = ({ name, amont }) => {

  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amont,
    color: generateRandomColor()
  }
  const existingBudgets = fetchData('budgets') ?? []
  return localStorage.setItem('budgets',
    JSON.stringify([...existingBudgets, newItem]))
}
