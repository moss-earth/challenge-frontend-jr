import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ApprovalList from '../screens/ApprovalList'
import CreateOrders from '../screens/CreateOrders'
import OrdersDetail from '../screens/OrdersDetail'
import OrdersList from '../screens/OrdersList'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={CreateOrders}/>
                <Route exact path='/historico' component={OrdersList}/>
                <Route exact path='/ordem/:id' component={OrdersDetail}/>
                <Route exact path='/aprovar' component={ApprovalList}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
