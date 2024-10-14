import { Outlet } from "react-router-dom";
import MyNavBar from "../../components/myNavBar/MyNavBar";
import MyFooter from "../../components/myFooter/MyFooter";

export default function View() {
    return (
        <>
            <MyNavBar />
            <Outlet />
            <MyFooter />
        </>
    )
}