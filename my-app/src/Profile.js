import React from 'react';

const Profile = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to the profile page.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
      <ul>
        <li>Profile Item 1</li>
        <li>Profile Item 2</li>
        <li>Profile Item 3</li>
        <li>Profile Item 4</li>
        <li>Profile Item 5</li>
      </ul>
      <p>This is a simple profile page created using React.</p>
    </div>
  );
};

export default Profile;
