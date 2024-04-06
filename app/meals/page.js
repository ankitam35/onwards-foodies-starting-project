import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created{""}</h1>
        <span className={classes.highlight}>by you</span>
        <p>Choose your favourite recipe and cook yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fething Meals.....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
