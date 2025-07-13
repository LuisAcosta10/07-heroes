import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher( publisher );
    // memorizar y solo cambia cuando el publisher cambie
    const heroesMemo = useMemo( () =>getHeroesByPublisher( publisher ), [publisher] );
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
        {
            heroesMemo.map(hero => (
                <HeroCard
                key={ hero.id }
                {...hero}
                />
            ))
        }
    </div>
  )
}