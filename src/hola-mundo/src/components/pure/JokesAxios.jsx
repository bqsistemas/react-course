import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getRandomJoke } from '../../services/AxiosService';

// Material UI
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { ThumbUp, ThumbDown } from '@mui/icons-material'

const JokesAxios = () => {
    const [joke, setJoke] = useState(null)
    const [likesCount, setLikesCount] = useState(0)
    const [disLikesCount, setdisLikesCount] = useState(0)

    useEffect(() => {
        obtainJoke()
    }, [likesCount, disLikesCount])
    
    const obtainJoke = async() => {
        getRandomJoke()
            .then((response) => {
                console.log('joke', response)
                if(response.status === 200){
                    setJoke(response.data)
                }
            })
            .catch((err) => {
                console.log(`Error: `, err)
            })
            .finally(() => console.log('Finally'))
    }

    const addLike = () => {
        setLikesCount(likesCount + 1)
    }

    const addDisLike = () => {
        setdisLikesCount(disLikesCount + 1)
    }

    return (
        <div>
            <h1>Random Joke</h1>
            { joke && 
                (
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: joke.value}}></h3>    
                    </div>
                )
            }
            <div>
                <Badge badgeContent={likesCount} color="secondary">
                    <IconButton onClick={addLike} aria-label=''>
                        <ThumbDown/>
                    </IconButton>
                </Badge>
                <Badge badgeContent={disLikesCount} color="success">
                    <IconButton onClick={addDisLike} aria-label=''>
                        <ThumbUp/>
                    </IconButton>
                </Badge>
            </div>
        </div>
    );
};


JokesAxios.propTypes = {

};


export default JokesAxios;
