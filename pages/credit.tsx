import styles from "../styles/Home.module.css";
import React, { useState } from "react";

interface CreditCalculationResult {
  totalCredit: number;
  interest: number;
  monthlyPayment: number;
}

function calculateCredit(
  amount: number,
  interestRate: number,
  termMonths: number,
): CreditCalculationResult {
  const monthlyInterestRate = interestRate / 12 / 100;
  const monthlyPayment =
    (amount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -termMonths));
  const totalPayment = monthlyPayment * termMonths;
  const totalInterest = totalPayment - amount;

  return {
    totalCredit: totalPayment,
    interest: totalInterest,
    monthlyPayment: monthlyPayment,
  };
}

const Credit: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [termMonths, setTermMonths] = useState(0);
  const [result, setResult] = useState<CreditCalculationResult | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const creditResult = calculateCredit(amount, interestRate, termMonths);
    setResult(creditResult);
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Loan Amount:
          <input
            className={styles.input}
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            required
          />
        </label>
        <br />
        <label className={styles.label}>
          Annual Interest Rate (%):
          <input
            className={styles.input}
            type="number"
            value={interestRate}
            step="0.01"
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            required
          />
        </label>
        <br />
        <label className={styles.label}>
          Loan Term (Months):
          <input
            className={styles.input}
            type="number"
            value={termMonths}
            onChange={(e) => setTermMonths(parseInt(e.target.value, 10))}
            required
          />
        </label>
        <br />
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </form>
      {result && (
        <div>
          <p>Total Credit: {result.totalCredit.toFixed(2)}</p>
          <p>Interest: {result.interest.toFixed(2)}</p>
          <p>Monthly Payment: {result.monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Credit;
