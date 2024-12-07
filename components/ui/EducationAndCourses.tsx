import React from 'react';

const EducationAndCourses = () => {
  const education = [
    {
      title: 'Bachelor of Science (Hons) in Computer Science (Top-Up)',
      duration: '2022 - Present',
      institution: 'Lithan Academy, Singapore',
    },
    {
      title: 'Higher National Diploma in Software Engineering',
      duration: '2022 - Present',
      institution: 'Lithan Academy, Singapore',
    },
    {
      title: 'GCE (O/L) - 2016 (English Medium)',
      duration: '2006 to 2016',
      institution: 'Bandarawela Central College',
    },
    {
      title: 'GCE (A/L) - 2020 (Maths Stream)',
      duration: '2017 to 2020',
      institution: 'Bandarawela Central College',
    },
  ];

  const courses = [
    {
      title: 'Information Communication Technology',
      duration: '2016 - 2017',
      institution: 'Open University, Sri Lanka',
    },
    {
      title: 'Human Resources Management',
      duration: '2022 - 2023',
      institution: 'Open University, Sri Lanka',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-between">
      {/* Education Section */}
      <div className="w-full lg:w-1/2 relative pl-10">
        <h3
          className="text-2xl font-bold mb-6"
          style={{
            background: 'linear-gradient(to right, #6AB1D7, #007ACC)', // Custom gradient
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          EDUCATION
        </h3>
        <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div> {/* Timeline Line */}
        <ul>
          {education.map((item, index) => (
            <li key={index} className="mb-5 relative">
              <div className="absolute left-[-45px] top-0 h-3 w-3 rounded-full bg-blue-500 border-2 border-white"></div>{/* Circle for timeline */}
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
              <p className="text-sm text-gray-500">{item.institution}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Courses Section */}
      <div className="w-full lg:w-1/2 relative pl-10">
        <h3
          className="text-2xl font-bold mb-6"
          style={{
            background: 'linear-gradient(to right, #6AB1D7, #007ACC)', // Custom gradient
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          COURSES FOLLOWED
        </h3>
        <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div> {/* Timeline Line */}
        <ul>
          {courses.map((item, index) => (
            <li key={index} className="mb-8 relative">
              <div className="absolute left-[-45px] top-0 h-3 w-3 rounded-full bg-blue-500 border-2 border-white"></div> {/* Circle for timeline */}
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
              <p className="text-sm text-gray-500">{item.institution}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationAndCourses;
