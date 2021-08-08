import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src='https://picsum.photos/400/280' alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum harum,
        voluptatem labore repellat aliquam ducimus corrupti. Maiores,
        consequuntur dolorem ex veniam, similique accusantium quas doloremque
        incidunt perspiciatis natus unde sit. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Ipsum harum, voluptatem labore repellat
        aliquam ducimus corrupti. Maiores, consequuntur dolorem ex veniam,
        similique accusantium quas doloremque incidunt perspiciatis natus unde
        sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        harum, voluptatem labore repellat aliquam ducimus corrupti. Maiores,
        consequuntur dolorem ex veniam, similique accusantium quas doloremque
        incidunt perspiciatis natus unde sit.
      </p>
    </div>
  );
}
