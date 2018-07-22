import Link from 'next/link'

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
        <Link href="/list">
          <a style={linkStyle}>List</a>
        </Link>
        <Link href="/posts">
          <a style={linkStyle}>Posts</a>
        </Link>
        <Link href="/shows-list-page">
          <a style={linkStyle}>Shows</a>
        </Link>
    </div>
)

export default Header;
