import React from 'react';
import COURSE_DATA from '../course-data.json';


function CourseCard(props) {
    const theNumber = props.courseData.number;
    const theTitle = props.courseData.title;
  
    let cssClasses = "card col-6"; 
    if(props.nowTeaching) { //logic!
      cssClasses += " bg-warning bg-gradient"
    }
  
    return (
      <div className={cssClasses}>
        <img src={"img/"+props.courseData.img} alt="chrome browser logo" />
        <h3>{theNumber}: {theTitle}</h3>
      </div>
    )
  }
  
  export function CourseCardList(props) {
  
    console.log(COURSE_DATA);
  
    const componentArray = COURSE_DATA.map((courseObj) => {
      const component = (
        <CourseCard 
          courseData={courseObj} 
          key={courseObj.number}
        />
      )
      return component;
    })
  
    return (
      <div className="row">
        {componentArray}
      </div>
    )
  }