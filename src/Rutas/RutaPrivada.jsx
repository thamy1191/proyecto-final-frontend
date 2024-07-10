import { Navigate, useLocation} from "react-router-dom"
const RutaPrivada = ({children}) => {
    const {state} = useLocation()
    const Admi = localStorage.getItem("Admi-id")
    if (!Admi) {
        return state?.logged ? children : <Navigate to={"/login"} />
    }
    return children
}
export default RutaPrivada









