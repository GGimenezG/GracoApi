// /**Here we define our API endpoints for the corresponding component and assign the controller methods to them. 
//  * Moreover we can do things like authorization (e.g. JWT), 
//  * permission validation (e.g. ACL) or add component specific middleware. */

import { IRouter } from "express";
import { UserController } from "./controller";

//  export {};
//  import { Request, Response,IRouter  } from 'express';
 
//  const router = (app:IRouter) => {
 
//      const Auth = new AuthController();
     
//      app.post('/login', loginValidation, Auth.login);
 
//  }
 
//  export default router;

export {};
const router = (app:IRouter) => {

    const c = new UserController();
    
    app.post('/registrar', c.Create);

}

export default router;