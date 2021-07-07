import { BrowserRouter,Switch, Route, Link } from "react-router-dom";

import AdminDash from "./Admin/AdminDash"


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                    <Route path="/" component={AdminDash}/>
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;