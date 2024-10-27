'use client';

import { useEffect, useState } from 'react';

const StoryDetailPage = ({ params }) => {
    const { id } = params;
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStory = async () => {
            if (id) {
                console.log('Fetching story with ID:', id);
                try {
                    const url = `http://localhost:5000/api/stories/${id}`;
                    console.log('Fetch URL:', url);
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch story. Status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log('Fetched story data:', data);
                    setStory(data);
                } catch (error) {
                    console.error('Error fetching story:', error);
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchStory();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!story) return <div>Story not found</div>;

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">{story.title}</h1>
            <p className="mt-4">{story.content}</p>
            <div className="mt-5">
                <h2 className="text-2xl font-semibold">Questions</h2>
                <ul className="mt-3 space-y-3">
                    {story.questions && story.questions.length > 0 ? (
                        story.questions.map((question, index) => (
                            <li key={index} className="border p-3 rounded">
                                <p>{question.text}</p>
                                <input type="text" className="mt-2 p-2 border rounded w-full" placeholder="Your response" />
                            </li>
                        ))
                    ) : (
                        <p>No questions available for this story.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default StoryDetailPage;