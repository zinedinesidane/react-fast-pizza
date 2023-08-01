import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((store) => store.user.username);
  if (!username) return null;
  return (
    <div className="hidden  md:block">
      Hey, <span className=" text-xl font-semibold uppercase">{username}</span>
    </div>
  );
}

export default Username;
