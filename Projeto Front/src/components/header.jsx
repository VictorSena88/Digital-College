import Logo from './logo';
import SearchBar from './searchBar';
import AuthLinks from './authLinks';
import MainNav from './mainNave';
import CartIcon from './cartIcon'; 

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Logo />
        <SearchBar />
        <div className="flex items-center gap-4">
          <AuthLinks />
          <CartIcon />
        </div>
      </div>
      <MainNav />
    </header>
  );
};

export default Header;

