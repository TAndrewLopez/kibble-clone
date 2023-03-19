interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="absolute left-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 top-8">
      <div className="flex flex-col gap-4">
        {[
          "Home",
          "Series",
          "Films",
          "New & Popular",
          "My List",
          "Browse  by languages",
        ].map((item) => (
          <div
            key={item}
            className="px-3 text-center text-white hover:underline">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
