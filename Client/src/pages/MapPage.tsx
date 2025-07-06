import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import noresults from '../assets/noresults.jpg';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { API } from '../ApiUri';

const issueIcon = new L.Icon({
    iconUrl,
    shadowUrl: iconShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const liveLocationIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});

interface Comment {
    _id: string;
    comment: string;
    userMade: {
        _id: string;
        name: string;
    };
    toProblem: string;
    createdAt: string;
}

interface Issue {
    id: string;
    position: [number, number];
    description: string;
    severity: number;
    comments: Comment[];
    createdBy: string;
    voteCount?: number;
    averageRating?: number;
}

const DangerRating: React.FC<{ rating: number; onRate: (rating: number) => void }> = ({ rating, onRate }) => (
    <div className="flex space-x-1 cursor-pointer text-yellow-400 text-3xl">
        {[1, 2, 3, 4, 5].map((danger) => (
            <span key={danger} onClick={() => onRate(danger)} className="w-[100px] h-[40px]">
                {danger <= rating ? <div className="text-xl">⚠️</div> : <div className="text-2xl">⚠</div>}
            </span>
        ))}
    </div>
);

const AddIssueOnClickComponent: React.FC<{ setNewIssuePos: any; setShowModal: any }> = ({
    setNewIssuePos,
    setShowModal,
}) => {
    useMapEvents({
        click(e) {
            setNewIssuePos([e.latlng.lat, e.latlng.lng]);
            setShowModal(true);
        },
    });
    return null;
};

const MapPage: React.FC = () => {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
    const [sortBy, setSortBy] = useState<'severity' | 'distance'>('severity');
    const [newIssuePos, setNewIssuePos] = useState<[number, number] | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [newIssueDesc, setNewIssueDesc] = useState('');
    const [newSeverity, setNewSeverity] = useState(1);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState<any[]>([]);
    const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
    const [newIssueTitle, setNewIssueTitle] = useState('');
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                // ✅ FIX: Now using actual user coordinates
                const currentPos: [number, number] = [pos.coords.latitude, pos.coords.longitude];
                setPosition(currentPos);

                try {
                    const response = await axios.get(`${API}/getAllproblems`);
                    const fetchedIssues = response.data.problems.map((item: any) => ({
                        id: item._id,
                        position: [item.location.coordinates[1], item.location.coordinates[0]],
                        description: item.description,
                        severity: item.averageRating || 1,
                        createdBy: item.createdBy,
                        comments: [],
                    }));
                    setIssues(fetchedIssues);
                } catch (error) {
                    console.error("Error fetching issues:", error);
                }
            },
            (err) => {
                console.error(err);
                setPosition([28.6139, 77.2090]); // Fallback to Delhi
            }
        );
    }, []);

    const getComments = async (problemId: string) => {
        try {
            const response = await axios.get(`${API}/getComment/${problemId}`);
            return response.data.success ? response.data.comments : [];
        } catch (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
    };

    useEffect(() => {
        if (selectedIssue) {
            getComments(selectedIssue.id).then(setComments);
        }
    }, [selectedIssue]);

    // ... all the rest of your logic remains the same ...
    // Keep the functions: handleAddIssue, handleDeleteIssue, handleConfirmDelete,
    // handleAddComment, handleRateIssue, getDistance, and UI JSX as you had them.

    return (
        <>
            {/* Your same return UI remains unchanged */}
            {/* ... (too long to repeat here again) ... */}
        </>
    );
};

export default MapPage;
