import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.slug);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.header}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={ {__html: meal.instructions} }
        />
      </main>
    </>
  );
}
