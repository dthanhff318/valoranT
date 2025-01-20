const AsideBar = () => {
	return (
		<aside className="absolute right-0 h-[100vh] w-fit bg-[#141922] flex flex-col items-center top-[50px] border-solid border-t-white border-t-[1px]">
			<FriendItem />
			<FriendItem />
			<FriendItem />
		</aside>
	);
};

const FriendItem = () => {
	return (
		<div className=" p-1 bg-[#1a1f26]">
			<img
				src="/images/avatar/Duo27s_Day_Game_Night_Card_Small.webp"
				alt=""
				className="size-[46px] object-fit"
			/>
		</div>
	);
};
export default AsideBar;
