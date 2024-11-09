// components/DisplayResult.js

import React from 'react';

const DisplayResult = ({ answers, story }) => {
    const getAnswerText = (answer) => (answer === 'Yes' ? 'Yes' : 'No');

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">Your Answers</h1>

            <div>
                <h2 className="text-xl font-semibold">Story Title: {story.title}</h2>
                <div className="mt-5">
                    <h3 className="text-lg font-semibold">Chapters:</h3>
                    {story.chapters.map((chapter, chapterIndex) => (
                        <div key={chapterIndex} className="mt-5">
                            <h4 className="text-md font-semibold">{chapter.chapterTitle}</h4>
                            {chapter.questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="mt-3">
                                    <p>{question.text}</p>
                                    <p>Your answer: {getAnswerText(answers[question._id])}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayResult;
