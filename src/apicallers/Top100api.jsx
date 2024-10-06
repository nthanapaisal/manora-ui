import { useState, useEffect } from 'react';

// Function to fetch songs
export const useFetchSongs = (num_songs) => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                 //make sure the data on have n songs

                // Replace with your actual API endpoint
                // const response = await fetch('https://api.example.com/top100');
                
               
                // For demonstration purposes, we're using hardcoded data
                const data = [
                    ["Song Name 1", "Artist 1", 1500],
                    ["Song Name 2", "Artist 2", 1200],
                    ["Song Name 3", "Artist 3", 980],
                    ["Song Name 4", "Artist 4", 750],
                    ["Song Name 5", "Artist 5", 670],
                    ["Song Name 6", "Artist 6", 600],
                    ["Song Name 7", "Artist 7", 580],
                    ["Song Name 8", "Artist 8", 550],
                    ["Song Name 9", "Artist 9", 520],
                    ["Song Name 10", "Artist 10", 500],
                    ["Song Name 11", "Artist 11", 500],
                    ["Song Name 12", "Artist 12", 480],
                    ["Song Name 13", "Artist 13", 460],
                    ["Song Name 14", "Artist 14", 440],
                    ["Song Name 15", "Artist 15", 420],
                    ["Song Name 16", "Artist 16", 410],
                    ["Song Name 17", "Artist 17", 400],
                    ["Song Name 18", "Artist 18", 390],
                    ["Song Name 19", "Artist 19", 380],
                    ["Song Name 20", "Artist 20", 370],
                ];
                if (num_songs == 10) {
                    const limitedData = data.slice(0, num_songs);
                    setSongs(limitedData);
                } else {
                    setSongs(data);
                }
                // Uncomment the lines below if you're using a real API
                // if (!response.ok) {
                //     throw new Error('Network response was not ok');
                // }
                // const data = await response.json();

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    return { songs, loading, error };
};

// You can add more functions to fetch different data as needed
export const useFetchAnotherData = () => {
    // Add another function for a different API call
    // Similar structure as useFetchSongs
};
