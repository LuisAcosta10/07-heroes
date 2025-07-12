import { HeroList } from "../components";
export const DcPage = () => {
  const value = 'DC Comics'
  return (
    <>
      <h1>DcPage</h1>
      <hr />

      <HeroList publisher={value}/>
    </>
  )
}
