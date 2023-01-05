import { Link } from 'react-router-dom';

const menu = [
  {
    href: 'Home',
    tex: 'HOME',
  },
  {
    href: 'Film',
    tex: 'FILM',
  },
];

export const Header = () => {
  return (
    <div>
      {menu.map(({ href, tex }) => (
        <Link to={href} key={tex}>
          {tex}
        </Link>
      ))}
    </div>
  );
};
