import './settings.css';
import Sidebar from '../../sidebar/Sidebar';

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <div className='settingsUpdateTitle'>Update Your Account</div>
          <div className='settingsDeleteTitle'>Delete Account</div>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img src='https://picsum.photos/100/100' alt='' />
            <label htmlFor='inputFile'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='inputFile' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' palceholder='ali' />
          <label>Email</label>
          <input type='email' palceholder='ali@test.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
