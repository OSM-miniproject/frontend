'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "../globals.css";
const StoryDetail = () => {
    const router = useRouter();
    const { id } = router.query; // Get the story ID from the URL
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return; // Wait until we have an ID
        const fetchStory = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/stories/${id}`); // Adjust the URL as needed
                if (!response.ok) throw new Error('Failed to fetch story');
                const data = await response.json();
                setStory(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchStory();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    if (!story) return <div>Story not found.</div>;

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">{story.title}</h1>
            <p className="mt-4">{story.description}</p> {/* Replace with the actual story content */}
            <div className="mt-5">
                <h2 className="text-xl font-semibold">Options:</h2>
                <label>
                    <input type="checkbox" className="mr-2" />
                    Option 1: [Your Question Here]
                </label>
                <label>
                    <input type="checkbox" className="mr-2" />
                    Option 2: [Your Question Here]
                </label>
                <label>
                    <input type="checkbox" className="mr-2" />
                    Option 3: [Your Question Here]
                </label>
                <label>
                    <input type="checkbox" className="mr-2" />
                    Option 4: [Your Question Here]
                </label>
            </div>
            <div className="mt-5">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => router.push(`/stories/${parseInt(id) + 1}`)} // Adjust logic to navigate to the next story
                >
                    Next Story
                </button>
            </div>
        </div>
    );
};

export default StoryDetail;
