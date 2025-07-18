import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  // console.log({q})
  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;
  // console.log(typeof {...heroes})
  // console.log(heroes[0].superhero)
  // console.log(heroes.length)

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if (searchText.trim().length <= 1) return; //? validacion para que no haga nada cuando el input tienee 0 o 1 caracterer 
    navigate(`?q=${searchText}`);
    // console.log({ searchText })
    // console.log({ location })
  }

  return (
    <>

      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* //* Codigo Clase bien Forma 1*/}
          {/* 
          {
            (q === '')
              ? <div className="alert alert-primary"> Search a hero</div>
              : (heroes.length === 0) && <div className="alert alert-danger">No Search a hero <b>{q}</b></div>

          } */}

          {/* //* Codigo Clase bien Forma 2*/}

          <div className="alert alert-primary  animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger  animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
            No Search a hero <b>{q}</b>
          </div>


          {/* //* Codigo mio falta  */}
{/* 
          <div hidden={(q.length > 0) && heroes.length === 0} className="alert alert-primary">
            Search a hero
          </div>
          <div hidden={q.length !== 0} className="alert alert-danger">
            No Search a hero <b>{ q }</b>
          </div> */}

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  )
}