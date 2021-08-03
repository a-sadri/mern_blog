import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <img clasName='postImg' src='https://picsum.photos/1000/500' alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
    </div>
  );
}
