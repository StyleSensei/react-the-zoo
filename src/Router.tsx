import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Zoo } from "./pages/Zoo";
import { Suspense } from "react";
import { Spinner } from "./components/Spinner";
import { NotFound } from "./pages/NotFound";
import { animalsLoader } from "./loaders/animalsLoader";
import { Animal } from "./pages/Animal";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/animals",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <Zoo />
                    </Suspense>
                ),
                loader: animalsLoader,
                children: [

                    {
                        path: "/animals/:id",
                        element: (
                            <Suspense fallback={<Spinner />}>
                                <Animal  />
                            </Suspense>
                        ),
                    }
                ]
            },
        ],
        errorElement: <NotFound />
    }
])