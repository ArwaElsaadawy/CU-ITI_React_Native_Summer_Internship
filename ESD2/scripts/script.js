function createCourse(courseObj = {}) {
    const allowedKeys = ['courseName', 'courseDuration', 'courseOwner'];
    var defObj = {courseName:"SW", courseDuration:"3months", courseOwner:"FCAI"};
    var result = Object.assign(defObj,courseObj);
    for (let key in courseObj) {
        if (!allowedKeys.includes(key)) {
            throw new Error(`Invalid property: ${key}. Only 'courseName', 'courseDuration', and 'courseOwner' are allowed.`);
        }
    }
    console.log(`Course Name: ${result.courseName}`);
    console.log(`Course Duration: ${result.courseDuration}`);
    console.log(`Course Owner: ${result.courseOwner}`);
}


try {
    var course = {
        courseName: "Js",
        courseDuration: "2 weeks",
        courseOwner: "iti",
    };

    createCourse(course);
} catch (error) {
    console.error(error.message);
}


try {
    var course2 = {
        courseName: "Js1",
        courseOwner: "iti",
    };

    createCourse(course2);
} catch (error) {
    console.error(error.message);
}


try {
    var course3 = {
        coursename: "Js2",
        courseOwner: "iti",
    };

    createCourse(course3);
} catch (error) {
    console.error(error.message);
}