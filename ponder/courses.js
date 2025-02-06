// courses.js
const aCourse = {
    courseCode: "CSE121b",
    name: "Javascript Language",
    credits: 3,
    sections: [{
        sectionNum: 1,
        roomNum: 'STC 353',
        enrolled: 26,
        days: 'TTh',
        instructor: 'Bro T'
    },

    {
        sectionNum: 2,
        roomNum: 'STC 347',
        enrolled: 28,
        days: 'TTh',
        instructor: 'Sis A'
    }
    ]
};

enrollStudent: function(sectionNum) {
    console.log(sectionNum);
    console.log(sections);
}

console.log(aCourse.sections[0].sectionNum);


const section1 = aCourse.sections.find(section => section.sectionNum === 1);

function setCourseInfo(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.courseCode;
  }
  
  function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
  }
  
  function renderSections(sections) {
    const sectionList = document.querySelector("#sections");
    sectionList.innerHTML = "";
    const html = sections.map(sectionTemplate);
    sectionList.innerHTML = html.join("\n");
  }
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);

  document.querySelector("#enrollStudent").addEventListener("click", aCourse.enrollStudent() (sectionNum) => {      

    aCourse.enrollStudent(1);
  }