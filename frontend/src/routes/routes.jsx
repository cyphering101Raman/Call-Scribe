import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "../App";
import Home from "../page/Home";

// App Routes
import AppLayout from "../components/App/AppLayout";
import Dashboard from "../page/app/Dashboard";
import Result from "../page/app/Result";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            {/* Marketing Site */}
            <Route index element={<Home/>}/>

            {/* Product App */}
            <Route path="app" element={<AppLayout/>}>
                <Route index element={<Dashboard/>} />
                <Route path="result/:id" element={<Result/>} />
            </Route>
        </Route>
    )
)

export default routes;
