import React from "react";
import {Routes, Route} from "react-router-dom";

import Opening from "./Opening";
import Shipments from "./kuehne+Nagel/Shipments";
import Shopping from "./eShop/Shopping";
import Writers from "./writers/Writers";
import Hooks from "./hooks/Hooks";
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";


export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Opening/>}/>
            <Route path="/shipments" element={<Shipments/>}/>
            <Route path="/shopping" element={<Shopping/>}/>
            <Route path="/writers" element={<Writers/>}/>
            <Route path="/hooks" element={<Hooks/>}/>
            <Route path="/usestate" element={<UseState/>}/>
            <Route path="/useeffect" element={<UseEffect/>}/>
            <Route path="/usememo" element={<UseMemo/>}/>

        </Routes>
    );
}