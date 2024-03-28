import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

// darlehensbetrag            100000
// zinsatz nominal jaehrlich  2.5
// tilgung jaehrlich          10
// zahlungen pro jar          12
// laufzeit in jahren         3
// laufzeit beginn            01.01.2023

interface CreditExtendedCalculationResult {
  // darlehensbetrag
  totalCredit: number;
  // zinsatz nominal jaehrlich
  interest: number;
  // tilgung jaehrlich
  acquittance: number;
  // zahlungen pro jahr
  monthlyPayment: number;
  // laufzeit in jahren
  termYears: number;
  // laufzeit beginn
  termStart: Date;
}

function calculateTermOverview(creditInfo: CreditExtendedCalculationResult) {
  const termOverview = [];
  let remainingCredit = creditInfo.totalCredit;

  for (let year = 0; year < creditInfo.termYears; year++) {
    for (let month = 1; month <= 12; month++) {
      const interestForMonth =
        ((remainingCredit / 100) * creditInfo.interest) / 12;
      const acquittanceForMonth =
        ((remainingCredit / 100) * creditInfo.acquittance) / 12;
      remainingCredit -= acquittanceForMonth;

      termOverview.push({
        year: year + 1,
        month,
        interest: interestForMonth,
        acquittance: acquittanceForMonth,
        remainingCredit,
      });
    }
  }

  return termOverview;
}

function calculateTermOverviewV1(creditInfo: CreditExtendedCalculationResult) {
  const termOverviewV1 = [];
  let remainingCredit = creditInfo.totalCredit;

  // Iteriere über Jahre und Monate wie im gewünschten Format
  for (let year = 1; year <= creditInfo.termYears; year++) {
    for (let month = 1; month <= 12; month++) {
      const currentDateString = `${year}-${month.toString().padStart(2, "0")}`;

      const interestForMonth =
        ((remainingCredit / 100) * creditInfo.interest) / 12;
      const annuityForMonth =
        interestForMonth + remainingCredit / creditInfo.termYears;
      const repaymentForMonth = Math.min(
        annuityForMonth - interestForMonth,
        remainingCredit,
      );
      remainingCredit -= repaymentForMonth;

      console.log(
        `Year: ${year}, Month: ${month}, Date: ${currentDateString}, Interest: ${interestForMonth}, Annuity: ${annuityForMonth}, Repayment: ${repaymentForMonth}, Remaining Credit: ${remainingCredit}`,
      );

      termOverviewV1.push({
        Date: currentDateString,
        Interest: interestForMonth,
        Repayment: repaymentForMonth,
        Annunity: annuityForMonth,
        RemainingCredit: remainingCredit,
      });
    }
  }

  return termOverviewV1;
}

const CreditExtendedPage: NextPage = () => {
  const [termOverview, setTermOverview] = useState([]);
  const [termOverviewV1, setTermOverviewV1] = useState([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const creditInfo: CreditExtendedCalculationResult = {
      totalCredit: Number(formData.get("totalCredit")),
      interest: Number(formData.get("interest")),
      acquittance: Number(formData.get("acquittance")),
      monthlyPayment: 12,
      termYears: Number(formData.get("termYears")),
      termStart: new Date(formData.get("termStart") as string),
    };
    const overview = calculateTermOverview(creditInfo);
    setTermOverview(overview);

    const overviewV1 = calculateTermOverviewV1(creditInfo);
    setTermOverviewV1(overviewV1);
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>Credit Extended Page</title>
      </Head>
      <section className={styles.section}>
        <h2>Calculate Credit Term Overview</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="totalCredit" className={styles.label}>
            Total Credit - darlehen
          </label>
          <input
            type="number"
            id="totalCredit"
            name="totalCredit"
            className={styles.input}
            defaultValue={100000}
          />

          <label htmlFor="interest" className={styles.label}>
            Annual Interest Rate (%) - zinssatz jaehrlich
          </label>
          <input
            type="number"
            id="interest"
            name="interest"
            className={styles.input}
            step="0.1"
            defaultValue={2.5}
          />

          <label htmlFor="acquittance" className={styles.label}>
            Acquittance (%) - tilgung
          </label>
          <input
            type="number"
            id="acquittance"
            name="acquittance"
            className={styles.input}
            defaultValue={10}
          />

          <label htmlFor="termYears" className={styles.label}>
            Term (Years) - laufzeit
          </label>
          <input
            type="number"
            id="termYears"
            name="termYears"
            className={styles.input}
            defaultValue={3}
          />

          <label htmlFor="termStart" className={styles.label}>
            Term Start - laufzeit beginn
          </label>
          <input
            type="date"
            id="termStart"
            name="termStart"
            className={styles.input}
            defaultValue={new Date().toISOString().split("T")[0]}
          />

          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </form>
        {termOverviewV1.length > 0 && (
          <>
            <p className={styles.info}>todo</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Interest</th>
                  <th>Repayment</th>
                  <th>Annunity</th>
                  <th>Remaining Credit</th>
                </tr>
              </thead>
              <tbody>
                {termOverviewV1.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Date}</td>
                    <td>{item.Interest.toFixed(2)}</td>
                    <td>{item.Repayment.toFixed(2)}</td>
                    <td>{item.Annunity.toFixed(2)}</td>
                    <td>{item.RemainingCredit.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {termOverview.length > 0 && (
          <>
            <p className={styles.success}>Calculation done.</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Month</th>
                  <th>Interest</th>
                  <th>Acquittance</th>
                  <th>Remaining Credit</th>
                </tr>
              </thead>
              <tbody>
                {termOverview.map((item, index) => (
                  <tr key={index}>
                    <td>{item.year}</td>
                    <td>{item.month}</td>
                    <td>{item.interest.toFixed(2)}</td>
                    <td>{item.acquittance.toFixed(2)}</td>
                    <td>{item.remainingCredit.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </section>
    </div>
  );
};

export default CreditExtendedPage;
