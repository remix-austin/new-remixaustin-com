import { Outlet } from "react-router";

export default function Page() {
    return (
        <div className="p-20">
            <Outlet />
        </div>
    );
}
