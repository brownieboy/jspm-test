console.log("app.js loaded, and is not corrupted!");

import Module1Class from './modules/module1.js';
import MyReactModule from './modules/reactmodule.jsx';

const configObj = {"firstName": "Han", "surname": "Solo"};

const module1Obj = new Module1Class(configObj);
document.getElementById("main").innerHTML = module1Obj.getTemplate();

