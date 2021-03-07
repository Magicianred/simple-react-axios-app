import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from '../Components/Posts'
import Tags from '../Components/Tags'
import Categories from '../Components/Categories'
import NotFound from '../Components/NotFound'

/**
 * Functional Component for handle routes of sites.
 *
 * @component
 * @example
 * return (
 *   <SiteRoutes />
 * )
 */
const SiteRoutes = () => (
    <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/home" component={Posts} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/categories/:id" component={Categories} />
        <Route exact path="/tags" component={Tags} />

        <Route path="*" component={NotFound} />
    </Switch>
)

export default SiteRoutes
