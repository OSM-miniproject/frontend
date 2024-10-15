const Story = ({ story }) => {
    return (
        <div className="story-card p-4 border mb-4 rounded-md">
            <h2 className="text-xl">{story.title}</h2>
            <p>{story.description}</p>
        </div>
    );
};

export default Story;
