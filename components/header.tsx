// import Link from 'next/link';
import { Link } from '../core/routes';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link route="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link route="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link route="/posts">
          <a style={linkStyle}>Posts</a>
        </Link>
        <Link route="shows-list">
          <a style={linkStyle}>Shows</a>
        </Link>
        {/* <Link route = '/shows'>
          <a style={linkStyle}>Shows</a>
        </Link> */}
    </div>
)

export default Header;
