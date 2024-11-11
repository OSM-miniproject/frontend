'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DisplayResult from '../../../components/DisplayResult';

const StoryDetailPage = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await fetch(`http://localhost:7000/api/stories/${id}`);
                if (!response.ok) throw new Error('Failed to fetch story');
                const data = await response.json();
                setStory(data);
            } catch (error) {
                console.error('Error fetching story:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchStory();
    }, [id]);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setResult(null);

        try {
            const inputData = {
                Age: 25,  // Replace with actual data or input
                Gender: 'Female',  // Replace with actual data or input
                AnxietyDiagnosis: answers['question1'] === 'Yes' ? 1 : (answers['question1'] === 'No' ? 0 : 2),
                CompulsionType: answers['question2'] === 'Yes' ? 1 : (answers['question2'] === 'No' ? 0 : 2),
            };

            console.log('Sending inputData:', inputData);

            const response = await fetch('http://localhost:5000/api/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: inputData })
            });

            if (!response.ok) throw new Error('Failed to submit answers for prediction');
            const data = await response.json();
            setResult(data.prediction);
        } catch (error) {
            console.error('Error submitting answers:', error);
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNext = () => {
        if (currentChapterIndex < story.chapters.length - 1) {
            setCurrentChapterIndex(currentChapterIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentChapterIndex > 0) {
            setCurrentChapterIndex(currentChapterIndex - 1);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const currentChapter = story?.chapters?.[currentChapterIndex];

    if (result !== null) {
        return <DisplayResult result={result} answers={answers} />;
    }

    const progress = ((currentChapterIndex + 1) / story?.chapters?.length) * 100;

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">{story?.title}</h1>
            <div>
                <div className="h-2 bg-gray-300 rounded-full mt-4">
                    <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="mt-5">
                    <h3 className="text-lg font-semibold">{currentChapter?.chapterTitle}</h3>
                    <p>{currentChapter?.content}</p>

                    <div className="mt-5">
                        <h3 className="text-lg font-bold">Questions</h3>
                        {currentChapter?.questions.map((question, index) => (
                            <div key={index} className="mt-3">
                                <p>{question.text}</p>
                                <div className="flex gap-4 mt-2">
                                    <button
                                        className={`px-4 py-2 rounded ${answers[question._id] === 'Yes' ? 'bg-blue-500' : 'bg-gray-200'}`}
                                        onClick={() => handleAnswerChange(question._id, 'Yes')}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        className={`px-4 py-2 rounded ${answers[question._id] === 'No' ? 'bg-blue-500' : 'bg-gray-200'}`}
                                        onClick={() => handleAnswerChange(question._id, 'No')}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-5 flex justify-between">
                    <button
                        className="px-6 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
                        onClick={handlePrevious}
                        disabled={currentChapterIndex === 0 || isSubmitting}
                    >
                        Previous
                    </button>
                    {currentChapterIndex === story?.chapters?.length - 1 ? (
                        <button
                            className="px-6 py-3 bg-green-500 text-white rounded"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                        className="px-6 py-3 bg-blue-500 text-white rounded"
                        onClick={handleNext}
                        disabled={isSubmitting}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    </div>
);
};

export default StoryDetailPage;

