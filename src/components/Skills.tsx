import React from 'react';
import HTML from '../assets/img/HTML5.png'
import CSS from '../assets/img/CSS.png'
import JavaScript from '../assets/img/JavaScript.png'
import TypeScript from '../assets/img/Typescript.png'
import NodeJs from '../assets/img/nodejs.png'
import Reactjs from '../assets/img/React.png'
import Nextjs from '../assets/img/nextjs.png'
import Tailwind from '../assets/img/Tailwind.png'
import Firebase from '../assets/img/Firebase.png'
import Git from '../assets/img/git.png'
import GitHub from '../assets/img/github.png'
import Vite from '../assets/img/Vite.png'
import Netlify from '../assets/img/netlify.png'



const Skills: React.FC = () => {
    const iconList = [
        { name: 'HTML', img: HTML},
        { name: 'CSS', img: CSS},
        { name: 'JavaScript', img: JavaScript},
        { name: 'TypeScript', img: TypeScript},
        { name: 'NodeJs', img: NodeJs},
        { name: 'Reactjs', img: Reactjs},
        { name: 'Nextjs', img: Nextjs},
        { name: 'Tailwind', img: Tailwind},
        { name: 'Firebase', img: Firebase},
        { name: 'Git', img: Git},
        { name: 'GitHub', img: GitHub},
        { name: 'Vite', img: Vite},
        { name: 'Netlify', img: Netlify}
    ]

    return (
        <div className='my-skills'>
            <div className='skill-set'>
                {iconList.map((skill) => (
                    <div>
                        <img src={skill.img} alt={skill.name} />
                        <label>{skill.name}</label>
                        <p>自分のスキルです</p>
                    </div>
                ))}
            </div>           
        </div>
    );
};
export default Skills
