
import { Navbar } from './../../ui/components/Navbar';

export const HeroesRoutes = () => {
  return (
    <>

        <Navbar />
        <Routes>
            <Route path='marvel' element={<MarvelPage /> }/>
            <Route path='dc' element={<DcPage /> }/>

{/*  */}


            <Route path='/' element={<Navigate to="marvel" /> }/>
        </Routes>
    </>
  )
}
