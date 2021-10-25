import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App'
import Hello from './Hello'
import Content from './Content'
import Error404 from './Error'
import Form from './Form'



function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/hello" component={Hello} />
            <Route path="/content" component={Content} />
            <Route path="/form" component={Form} />
            <Route path="/*" component={Error404} />

        </Switch>
        </BrowserRouter>
    )
}

export default Routes