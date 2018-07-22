import Link from 'next/link';
// import { Link } from '../core/routes';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/posts">
          <a style={linkStyle}>Posts</a>
        </Link>
        <Link href="/shows/shows-list-page" as="/shows">
          <a style={linkStyle}>Shows</a>
        </Link>
        {/* <Link route = '/shows'>
          <a style={linkStyle}>Shows</a>
        </Link> */}
    </div>
)

export default Header;
