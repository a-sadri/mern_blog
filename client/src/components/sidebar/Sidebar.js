import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Me</span>
        <img src='https://picsum.photos/250/250' alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          repellendus asperiores perspiciatis fugiat amet dolore, fuga quibusdam
          aliquid tempora, ad et qui cumque natus. Repellat quas omnis odit sit
          illo!
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Sports</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Music</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow Us</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
}
