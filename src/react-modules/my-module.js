const teacher = {
  firstName: 'Hamid Rezad',
  lastName: 'Izadi Matin',
};

const myFucntion = () => {
  // console.log('My Function');
  console.log(`${teacher.firstName} ${teacher.lastName}`);
};

class Course {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.teacher = teacher;
  }

  showInfo() {
    return `Course Name : ${this.name}, 
            Duration : ${this.duration}, 
            Teacher : ${this.teacher.firstName} ${this.teacher.lastName}`;
  }
}

// export { myFucntion as default, Course };
export default myFucntion
export { Course }