import JobQueueData from './api';

export default async function JobQueuePage() {
    return (
        <div className="container mx-auto py-5">
            <JobQueueData />
        </div>
    )
}