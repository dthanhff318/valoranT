import { Outlet } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import Footer from "@/components/footer/footer";

const Layout = (): FunctionComponent => {
	return (
		<>
			<Footer />
			<Outlet />
		</>
	);
};

export default Layout;
