import { FC, ReactNode } from "react"
import { NavLink } from "react-router"


type Props = {
    component: ReactNode
}

export const ProtectedRoute: FC<Props> = ({component}) => {
    const isAuthenticated = !!localStorage.getItem('token')

    if (isAuthenticated) return component

    return <NavLink to='login' />
}
