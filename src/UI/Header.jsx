import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className=" flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3  text-xl font-semibold  sm:px-6">
      <Link to="/" className="uppercase tracking-widest">
        Fast React pizza CO.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
