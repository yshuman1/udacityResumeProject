var bio = {
    name: "Yasin Shuman",
    role: "Developer",
    contacts: {
        mobile: "628-600-8772",
        email: "yshuman@loyalloops.com",
        github: "yshuman1",
        twitter: "@yasin0424",
        location: "San Francisco"
    },
    welcomeMessage: "Hi!",
    skills: ["HTML", "Java", "JavaScript"],
    biopic: "yasin.io",
    display: function () { "use strict"; }
};

var education = {
    schools: [{
        name: "Cleveland State University",
        location: "Cleveland, Ohio",
        degree: "B.A.",
        majors: "International Relations",
        dates: "1996 - 2005",
        url: "csuohio.edu"
    }],
    onlineCourses: [{
        title: "Front end Development",
        school: "Udacity",
        dates: "2017",
        url: "udacity.com"
    }],
    display: function () { "use strict"; }
};

var work = {
    jobs: [{
        employer: "Loyal Loops",
        title: "President",
        location: "San Francisco",
        dates: "2015 - Current",
        description: "Founder"
    }],
    display: function () { "use strict"; }
};

var projects = {
    projects: [{
        title: "Punch Card Rewards",
        dates: "2015 - 2017",
        description: "Loyalty Program",
        images: ["/images/fry.jpg", "images/197x148.gif"],
    }],
    display: function () { "use strict"; }
};

$("#workExperience").append(jobs.toString);
/*
how do i display all the info from the array? is it a for loop like this:
for (a = 0; a <= jobs.length; a++) {
    console.log(jobs[a]);
} */
