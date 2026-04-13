import "../css/PublicLayout.css"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <div className="content.full-widtht">
        <Outlet />
      </div>
    </>
  )
}