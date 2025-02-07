const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],

  enrollStudent: function (sectionNum) {
    this.changeEnrollment(sectionNum, true);
  },

  dropStudent: function (sectionNum) {
    this.changeEnrollment(sectionNum, false);
  },

  changeEnrollment: function (sectionNum, add = true) {
    // find the right section using findIndex
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      renderSections(this.sections);
    }
  },
};

function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
  if (!isNaN(sectionNum)) aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
  if (!isNaN(sectionNum)) aCourse.dropStudent(sectionNum);
});

// Initialize UI
setCourseInfo(aCourse);
renderSections(aCourse.sections);
