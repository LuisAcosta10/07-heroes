import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageUrl = `/assets/heroes/heroes/${ id }.jpg`;

    // const characterByHero = (<p>{ characters }</p>)

    // const CharacterByHeroComponent = ({characters, alter_ego}) => {
    //     if (alter_ego === characters) return  (<></>)
    //     return <p className="card-text">{ characters }</p>
    // }

    const CharacterByHeroComponent = ({characters, alter_ego}) => {
        return (alter_ego === characters)
        ?<></>
        :<p>{ characters }</p>
    }
    
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 animate__animated animate__fadeIn">
                    <img src={heroImageUrl} className="card-img" alt={superhero} />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>
                    {/* { 
                        // (alter_ego !==  characters) &&  (<p className="card-text">{characters} </p>)
                        (alter_ego !==  characters) &&  characterByHero
                    } */}
                    <CharacterByHeroComponent characters={characters} alter_ego={alter_ego} />

                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`}>
                        MAS...
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
