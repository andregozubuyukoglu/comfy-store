import { Outlet } from "react-router-dom"
import { Header } from "../components"

const HomeLayout = () => {
  return (
    <>
      <Header />
      <span className="text-4xl text-primary">Comfy</span>

      <section>
        <Outlet className="align-element py-20" />
      </section>
    </>
  )
}

export default HomeLayout
