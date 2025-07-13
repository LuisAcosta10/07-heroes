import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const navigate = useNavigate();

  const ReturnPage = () => {
    navigate("/", {
      replace: true,
    });
  };

  const onNavigateBack = () => {
    navigate(-1);
  };

  const { id } = useParams();

  const hero = getHeroById(id);
  const heroMemo = useMemo(() => getHeroById( id ), [id]);


  console.log(hero);

  if (!hero) {
    return <Navigate to="/Dc" />;
  }
  const heroImageUrl = `/assets/heroes/heroes/${hero.id}.jpg`;
  return (
    <>
      {/* //! mi codigo  */}
      <div className="col mt-4">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img
                src={heroImageUrl}
                className="card-img"
                alt={hero.superhero}
              />
            </div>
            <div className="col-8">
              <div className="card-title">
                <p className="fw-bold fs-3">{hero.superhero}</p>
              </div>
              <div class="card-body">
                <ul>
                  <span className="fw-bold">alter-ego:</span>{" "}
                  <a>{hero.alter_ego}</a>
                </ul>
                <hr />
                <p>
                  <span className="fw-bold">publisher:</span>{" "}
                  <a>{hero.publisher}</a>
                </p>
                <p>
                  <span className="fw-bold">First appearance:</span>{" "}
                  <a>{hero.first_appearance}</a>
                </p>
                <p>
                  <span className="fw-bold">characters:</span>
                  <br />
                  <a>{hero.characters}</a>
                </p>
                <button className="btn btn-primary" onClick={ReturnPage}>
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //! codigo del curso */}
      <div className="row mt-5   animate__animated animate__fadeInLeft">
        <div className="col-4">
          <img
            src={`/assets/heroes/heroes/${heroMemo.id}.jpg`}
            alt={heroMemo.superhero}
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h3>{heroMemo.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter Ego:</b> {heroMemo.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {heroMemo.publisher}
            </li>
            <li className="list-group-item">
              <b>First Appearance:</b>
              {heroMemo.first_appearance}
            </li>
          </ul>
          <h5 className="mt-3">Character</h5>
          <p>{heroMemo.characters}</p>

          <button className="btn btn-outline-primary" onClick={onNavigateBack}>
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};
