import { Navigate, Route, Routes } from "react-router-dom"
import { Traineelist } from "./traineelist"
import { Addtrainee } from "./addtrainee"

export const Crud = () => {
    return (
        <Routes>
            <Route path="/trainee/create" element={<Addtrainee />}></Route>
            <Route path="/trainee/update/:id" element={<Addtrainee />}></Route>
            <Route path="/trainee" element={<Traineelist />}></Route>
            <Route path="/" element={<Navigate replace to='/trainee' />}></Route>
        </Routes>
    )
}