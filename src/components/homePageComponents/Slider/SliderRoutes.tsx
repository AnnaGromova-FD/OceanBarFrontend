import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'

import PlatoList from '../../../pages/Menu/Assortment/PlatoList'
import SoupList from '../../../pages/Menu/Assortment/SoupList'
import SaladList from '../../../pages/Menu/Assortment/SaladList'
import OystersList from '../../../pages/Menu/Assortment/OystersList'
import DessertList from '../../../pages/Menu/Assortment/DessertList'
import { PATH } from '../../../pages/Menu/MenuRoutes'



const  MenuRoutes : React.FC = ()  => {

    return (
        <div>
            <Switch>
                <Route path={PATH.MENU} exact render={() => <Redirect to={PATH.SOUP}/>}/>
                <Route path={PATH.PLATO} render={() => <PlatoList/>}/>
                <Route path={PATH.SOUP} render={() => <SoupList/>}/>
                <Route path={PATH.SALAD} render={() => <SaladList/>}/>
                <Route path={PATH.OYSTERS} render={() => <OystersList/>}/>
                <Route path={PATH.DESSERT} render={() => <DessertList/>}/>        
            </Switch>
        </div>
    )
}

export default MenuRoutes
