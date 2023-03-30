import React from "react";
import {Routes, Route} from "react-router-dom";

import Opening from "./Opening";
import Shipments from "./kuehne+Nagel/Shipments";
import Shopping from "./eShop/Shopping";
import Writers from "./writers/Writers";
import Hooks from "./hooks/Hooks";
import UseState1 from "./hooks/UseState1";
import UseState2 from "./hooks/UseState2";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseReducer1 from "./hooks/UseReducer1";
import UseReducer2 from "./hooks/UseReducer2";
import UseReducer3 from "./hooks/UseReducer3";


export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Opening/>}/>
            <Route path="/shipments" element={<Shipments/>}/>
            <Route path="/shopping" element={<Shopping/>}/>
            <Route path="/writers" element={<Writers/>}/>
            <Route path="/hooks" element={<Hooks/>}/>
            <Route path="/usestate1" element={<UseState1/>}/>
            <Route path="/usestate2" element={<UseState2/>}/>
            <Route path="/useeffect" element={<UseEffect/>}/>
            <Route path="/usememo" element={<UseMemo/>}/>
            <Route path="/usereducer1" element={<UseReducer1/>}/>
            <Route path="/usereducer2" element={<UseReducer2/>}/>
            <Route path="/usereducer3" element={<UseReducer3/>}/>

        </Routes>
    );
}