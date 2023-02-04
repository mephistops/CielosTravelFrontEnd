import { useRouteNode } from 'react-router5'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'

function Router() {
    const { route } = useRouteNode('')
    const topRouteName = route.name.split('.')[0]

    if (topRouteName === 'home') {
        return <Home />
    }

    return <ErrorPage />
}

export default Router
