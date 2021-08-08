import './singlePost.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src='https://picsum.photos/1000/300'
          alt=''
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet consectetur
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Ali Sadri</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <div className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          corporis dignissimos, vel consequuntur deleniti repellendus et.
          Excepturi modi iure ipsa dolores quis quae impedit ad? Adipisci
          voluptas suscipit cumque quidem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Impedit corporis dignissimos, vel
          consequuntur deleniti repellendus et. Excepturi modi iure ipsa dolores
          quis quae impedit ad? Adipisci voluptas suscipit cumque quidem! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis
          dignissimos, vel consequuntur deleniti repellendus et. Excepturi modi
          iure ipsa dolores quis quae impedit ad? Adipisci voluptas suscipit
          cumque quidem! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Impedit corporis dignissimos, vel consequuntur deleniti
          repellendus et. Excepturi modi iure ipsa dolores quis quae impedit ad?
          Adipisci voluptas suscipit cumque quidem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Impedit corporis dignissimos, vel
          consequuntur deleniti repellendus et. Excepturi modi iure ipsa dolores
          quis quae impedit ad? Adipisci voluptas suscipit cumque quidem!
        </div>
      </div>
    </div>
  );
}
