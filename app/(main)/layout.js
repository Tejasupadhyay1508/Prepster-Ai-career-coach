import React, { children } from "react";
const MainLayout = ({children}) =>{
// redirect useer after onbording
    return <div className="container mx-auto mt-24 mb-20">{children}</div>
    
}


export default MainLayout;