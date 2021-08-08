import './topbar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>
              About
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>
              Contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>
              Write
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>
              {user && 'LOGOUT'}
            </Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img className='topImage' src='https://picsum.photos/40/40' alt='' />
        ) : (
          <ul className='topList'>
            <li>
              <Link to='/' className='link'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/' className='link'>
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
}
