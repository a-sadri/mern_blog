import './write.css';

export default function Write() {
  return (
    <div className='write'>
      <img className='writeImg' src='https://picsum.photos/600/250' alt='' />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            className='writeInput writeText'
            id=''
            cols='30'
            rows='10'
            placeholder='Tell your story ...'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  );
}
