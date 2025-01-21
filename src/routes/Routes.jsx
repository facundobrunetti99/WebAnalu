import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../page/Home/Home'
import Content from '../component/content/Content'
import { RouterProvider } from 'react-router-dom'
const router= createBrowserRouter([

    {
    path:"/",
    element:(
        <Home></Home>
    ),
    children :[
        {
            path :"/",
            element :(
                <Content>
                </Content>
                
            )

        },
    
        {
            path :"products",
            element :(
                <></>

            )

        }
    ],
    
    }
    ])
    
    const AppRouter = () => {
        return <RouterProvider router={router} />;
      };
export default AppRouter;

