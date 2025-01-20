import { Outlet } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import Banner18Alert from "@/components/banner18alert/banner18alert";
import AsideBar from "@/components/aside/aside";
import Header from "@/components/header/header";

const Layout = (): FunctionComponent => {
	return (
		<>
			<div className="fixed inset-0">
				<Header />
				<Banner18Alert />
				<AsideBar />
			</div>
			<Outlet />
		</>
	);
};

export default Layout;
