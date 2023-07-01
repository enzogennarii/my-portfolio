import React from 'react';

function Skills() {
  const stack = [
    ['GIT'],
    ['HTML'],
    ['CSS'],
    ['JAVASCRIPT'],
    ['REACT'],
    ['REDUX'],
    ['DOCKER'],
  ];

  return (
    <ul className="skill-list">
    { stack.map((skill) => (
      <li key={ skill[0] } className="skill-item">
        <p className="skill-name">{skill[0]}</p>
      </li>
    )) }
    </ul>
  );
}

export default Skills;
