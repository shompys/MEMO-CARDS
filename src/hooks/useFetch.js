import { useState, useEffect } from 'react';

export const useFetch = ( url ) => {

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {

        (async () => {

            try{
                const response = await fetch(url);
                const data = await response.json();

                setState({
                    data: data.results.slice(0, 6),
                    loading: false,
                    error: null
                })
                

            }catch( err ){

                console.log('Error: ', err);

                setState({
                    data: null,
                    loading: false,
                    error: err
                })
            }

        }  ) ()

    }, [url])

    return state;

}
