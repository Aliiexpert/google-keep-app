import React from "react";
import Logo from './Component/Images/Logo1.png';
import './index.css';

const Header=()=>{

   return(
       <>
       <div className="header-container">
<div className="header">
<img  src={Logo} alt="Logo" width='40' height='50'/>
<h1> Google Keep</h1>
</div>
</div>

       </>
   );
};

export default Header;