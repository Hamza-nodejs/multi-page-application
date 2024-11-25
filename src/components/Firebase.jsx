import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

export default function Firebase() {
    const [testData, setTestData] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const auth = getAuth();

        // Authenticate anonymously for testing
        const testAuth = async () => {
            try {
                const userCredential = await signInAnonymously(auth);
                console.log("Anonymous user signed in:", userCredential.user);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Error signing in anonymously:", error);
            }
        };

        // Fetch test data from Firestore
        const fetchTestData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "testCollection"));
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTestData(data);
                console.log("Fetched data from Firestore:", data);
            } catch (error) {
                console.error("Error fetching Firestore data:", error);
            }
        };

        testAuth();
        fetchTestData();
    }, []);

    return (
        <div>
            <h1>Firebase Testing</h1>
            {isAuthenticated ? <p>Anonymous Authentication Successful!</p> : <p>Authenticating...</p>}
            <h2>Test Data from Firestore:</h2>
            {testData.length > 0 ? (
                <ul>
                    {testData.map((item) => (
                        <li key={item.id}>{JSON.stringify(item)}</li>
                    ))}
                </ul>
            ) : (
                <p>No data available or error fetching data.</p>
            )}
        </div>
    );
}
