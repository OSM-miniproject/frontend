import "../app/globals.css";

const fieldLabels = {
  age: "Age",
  durationOfSymptoms: "Duration of Symptoms",
  obsessionType: "Obsession Type",
  compulsionType: "Compulsion Type",
  depressionDiagnosis: "Depression Diagnosis",
  anxietyDiagnosis: "Anxiety Diagnosis"
};

const DisplayResult = ({ result, answers }) => (
  <div className="result-container flex justify-center items-center min-h-[calc(100vh-20px)] -mt-5">
    <div className="border-2 border-[#ff4b2b] rounded-lg p-12 max-w-md shadow-lg">
      <h2 className="text-4xl text-[#ff4b2b] font-bold mb-4 text-center">
        Your Prediction Result
      </h2>
      <p className="text-xl text-left">
        <strong>OCD Severity:</strong> {result.severity}
      </p>
      <p className="text-xl text-left">
        <strong>OCD Percentage:</strong> {result.percentage.toFixed(2)}%
      </p>
      <h3 className="text-lg mt-4 mb-2 text-left">Your Answers:</h3>
      <ul className="list-none text-left">
        {Object.keys(answers).map((field, index) => (
          <li key={index} className="mb-2 text-sm">
            <strong>{fieldLabels[field] || field}:</strong> {answers[field]}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default DisplayResult;
