import { Fragment } from "react";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { publicRoutes } from './routes/route'


function App() {
    return (
        <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout

                        if(route.layout)
                        {
                            Layout = route.layout
                        }
                        else if(route.layout === null)
                        {
                            Layout = Fragment
                        }
                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
        </BrowserRouter>
    )
}

export default App;
