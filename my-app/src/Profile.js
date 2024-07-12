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
      <hr />
      <h2>About Me</h2>
      <p>Hello! I'm John Doe, a software engineer passionate about web development and open-source projects. I enjoy learning new technologies and working on collaborative projects.</p>
      <img src="https://via.placeholder.com/150" alt="Profile" />
      <hr />
      <h2>Hobbies</h2>
      <ul>
        <li>Coding</li>
        <li>Reading</li>
        <li>Traveling</li>
        <li>Photography</li>
      </ul>
      <hr />
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>CSS</li>
      </ul>
      <hr />
      <h3>Contact Information:</h3>
      <ul>
        <li>Email: johndoe@example.com</li>
        <li>GitHub: <a href="https://github.com/lover1975" target="_blank" rel="noopener noreferrer">github.com/lover1975</a></li>
        <li>Twitter: <a href="https://twitter.com/lover1975" target="_blank" rel="noopener noreferrer">twitter.com/lover1975</a></li>
      </ul>
    </div>
  );
};

export default Profile;
