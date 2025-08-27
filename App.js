import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ExpenseList from "./components/ExpenseList";
import MonthlySummary from "./components/MonthlySummary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleAddExpense() {
    if (!desc || !amount || !date) return;
    setExpenses([
      ...expenses,
      { desc, amount: parseFloat(amount), date }
    ]);
    setDesc("");
    setAmount("");
    setDate("");
  }

  return (
    <div className="container">
      <h1>Calculadora de Orçamento</h1>
      <div className="form">
        <Input
          label="Descrição"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Ex: Mercado"
        />
        <Input
          label="Valor"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ex: 50"
        />
        <Input
          label="Data"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={handleAddExpense}>Adicionar Despesa</Button>
      </div>
      <ExpenseList expenses={expenses} />
      <MonthlySummary expenses={expenses} />
    </div>
  );
}

export default App;
