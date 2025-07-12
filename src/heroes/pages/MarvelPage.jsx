import { HeroList } from "../components";

export const MarvelPage = () => {
   const value = 'Marvel Comics';
  return (
    <>
      <h1>MarvelPage</h1>
      <HeroList publisher={value}/>
      <hr />
    </>
  )
}
