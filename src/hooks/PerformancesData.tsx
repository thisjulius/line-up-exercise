/* Import necessary hooks and services */
import { useState, useEffect } from 'react';
import { performancesAPI } from '../services/PerformancesAPI';


/* Structure for data */
import { IPerformance } from 'utils/types';

/* Define the Performances component */
export default function PerformancesData() {
    /* State to hold the performances data */
    const [performances, setPerformances] = useState<IPerformance | null>(null);


    /* useEffect hook to fetch data when the component mounts */
    useEffect(() => {
        /* Define an asynchronous function to fetch data */
        const getAsyncData = async () => {
            try {
                /* Fetch performances data using the performancesAPI function */
                const performancesData = await performancesAPI();
                
                /* Check if the fetched data is not null */
                if (performancesData) {
                    /* Update the state with the fetched data */

                    setPerformances(performancesData.data);

                } else {
                    console.log('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        /* Call the getData function to fetch data when the component mounts */
        getAsyncData();
    }, []); /* The empty dependency array ensures this effect runs only once */

    /* Return the performances data */
    return performances; 
}
