// components/EducationDetails.tsx

const EducationDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-bold">Education</div>
      <div className="text-sm">
        <p>
          <span className="font-bold">2022 - Present:</span> Bachelor of Science (Hons) in Computer Science (Top-Up), Lithan Academy, Singapore
        </p>
        <p>
          <span className="font-bold">2022 - Present:</span> Higher National Diploma in Software Engineering, Lithan Academy, Singapore
        </p>
        <p>
          <span className="font-bold">2006 to 2020:</span> GCE (O/L) - 2016 (English Medium), GCE (A/L) - 2020 (Maths Stream), Bandarawela Central College
        </p>
      </div>
      
      <div className="text-lg font-bold">Courses Followed</div>
      <div className="text-sm">
        <p>
          <span className="font-bold">2016 - 2017:</span> Information Communication Technology, Open University, Sri Lanka
        </p>
        <p>
          <span className="font-bold">2022 - 2023:</span> Human Resources Management, Open University, Sri Lanka
        </p>
      </div>
    </div>
  );
};

export default EducationDetails;
