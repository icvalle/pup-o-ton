import React from 'react';
import { useQuery } from '@apollo/client';
import { Line } from 'react-chartjs-2';
import { QUERY_EXERCISE } from '../utils/queries'

function Graph() {

    const dogId = document.getElementById('dog-id').innerHTML;

    const QueryExercise = () => {
        const { data } = useQuery(QUERY_EXERCISE, {
            variables: { dog: dogId }
        });
        const exercises = data?.exercises;
        const exerciseArray = exercises.map
        return exercises;
    }

    console.log(QueryExercise())

    return (
        <>
            <div className='header'>
                <Line data={{
                    labels: ['1', '2', '3', '4', '5', '6'],
                    datasets: [
                        {
                            label: 'Time Spent Exercising',
                            data: [1, 2, 3, 4, 5],
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)',
                        },
                    ],
                }} options={{
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }} />
            </div>

        </>
    )
};

export default Graph;