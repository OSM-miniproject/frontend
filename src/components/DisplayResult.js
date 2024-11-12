const DisplayResult = ({ result, answers }) => (
    <div className="result-container">
        <h2 className="text-2xl font-bold">Your Prediction Result</h2>
        <p><strong>OCD Severity:</strong> {result.severity}</p>
        <p><strong>OCD Percentage:</strong> {result.percentage}%</p>
        <h3 className="text-lg mt-4">Your Answers:</h3>
        <ul>
            {Object.entries(answers).map(([field, answer], index) => (
                <li key={index}>
                    {field}: {answer}
                </li>
            ))}
        </ul>
    </div>
);

export default DisplayResult;
