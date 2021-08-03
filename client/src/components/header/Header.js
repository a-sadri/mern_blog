import './header.css';

export default function Header() {
  return (
    <div>
      <div className='header'>
        <div className='headerTitle'>
          <span className='headerTitleSm'>React and Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img
          className='headerImg'
          src='https://picsum.photos/id/337/1500/450'
          alt=''
        />
      </div>
    </div>
  );
}
