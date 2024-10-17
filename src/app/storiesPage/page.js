'use client';
import { useEffect, useState } from 'react';
import Story from '../../components/Story'; // Import your Story component
import '../globals.css';
const StoriesPage = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/stories'); // Adjust this URL based on the backend route
                if (!response.ok) throw new Error('Failed to fetch stories');
                const data = await response.json();
                setStories(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchStories();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="stories-page">
            <h1 className="text-3xl font-bold">OCD Stories</h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {stories.map((story) => (
                    <Story key={story._id} story={story} />
                ))}
            </div>
        </div>
    );
};

export default StoriesPage;
