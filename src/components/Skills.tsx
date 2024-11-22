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
import Title from './Title';


const Skills: React.FC = () => {
    const iconList = [
        { name: 'HTML', img: HTML, level: 2},
        { name: 'CSS', img: CSS, level: 2},
        { name: 'JavaScript', img: JavaScript, level: 2},
        { name: 'TypeScript', img: TypeScript, level: 2},
        { name: 'NodeJs', img: NodeJs, level: 1},
        { name: 'Reactjs', img: Reactjs, level: 2},
        { name: 'Nextjs', img: Nextjs, level: 1},
        { name: 'Tailwind', img: Tailwind, level: 1},
        { name: 'Firebase', img: Firebase, level: 2},
        { name: 'Git', img: Git, level: 2},
        { name: 'GitHub', img: GitHub, level: 2},
        { name: 'Vite', img: Vite, level: 2},
        { name: 'Netlify', img: Netlify, level: 2}
    ]

    const levelDiscrimination = (level:number) => {
        let levelMark: string = ''
        let levelText: string = ''
        
        switch(level){
            case 1 :
                levelMark = '★☆☆☆☆'
                levelText = '学習中'
                break;
            case 2 :
                levelMark = '★★☆☆☆'
                levelText = '開発経験あり'
                break;
            case 3 :
                levelMark = '★★★☆☆'
                levelText = '実務経験あり'
                break;
            case 4 :
                levelMark = '★★★★☆'
                levelText = '3年以上の実務経験あり'
                break;
            case 5 :
                levelMark = '★★★★'
                levelText = '5年以上の実務経験あり'
                break;
        }
        
        return (
            <>
            <div>{levelMark}</div>
            <div>{levelText}</div>
            </>
        )
    }

    return (
        <>
        <Title 
            title='Skills' 
            text='' 
            animationType='right'
        />
        <div className='my-skills'>
            <div className='skill-set'>
                {iconList.map((skill) => (
                    <div className='card'>
                        <div className='front'>
                            <img src={skill.img} alt={skill.name} />
                        </div>
                        <div className='back'>
                            <h3>{skill.name}</h3>
                            {levelDiscrimination(skill.level)}
                            <img src={skill.img} alt={skill.name} />
                        </div>
                    </div>
                ))}
            </div>           
        </div>
        </>
    );
};
export default Skills
