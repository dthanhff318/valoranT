import { menuConfig, TMenuConfig } from "@/components/menu-list/menu-config";

const MenuList = () => {
	return (
		<div className="absolute top-[50%] -translate-y-[50%] left-10 flex flex-col items-start gap-7 font-tungsten">
			{menuConfig.map((e, i) => {
				return <MenuItem key={i} item={e}></MenuItem>;
			})}
		</div>
	);
};

const MenuItem = ({ item }: { item: TMenuConfig }) => {
	const isPrime = item.title === "Play";
	return (
		<div className="flex items-center gap-5 group ">
			<span className="bg-white -rotate-45 group-hover:rotate-[135deg] transition-all origin-center group-hover:scale-125 group-hover:bg-[#76e8e8] size-[8px] group-hover:size-[10px]"></span>
			<span
				className={`${isPrime ? "text-[108px] text-[#ff4453]" : "text-[56px]"} leading-[100%] font-bold transition-all cursor-pointer group-hover:translate-x-4 group-hover:text-[#76e8e8]`}
			>
				{item.title.toUpperCase()}
			</span>
		</div>
	);
};

export default MenuList;
