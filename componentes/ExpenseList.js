import React from "react";

function ExpenseList({ expenses }) {
  if (expenses.length === 0)
    return <p>Nenhuma despesa registrada.</p>;

  return (
    <div>
      <h2>Despesas</h2>
      <ul>
        {expenses.map((exp, idx) => (
          <li key={idx}>
            {exp.date} - {exp.desc}: R$ {exp.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
