import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  artworks: [],
  loading: true,
  error: null,
};

const artworkReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, artworks: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'ADD_ARTWORK':
      return { ...state, artworks: [...state.artworks, action.payload] };
    case 'UPDATE_ARTWORK':
      return {
        ...state,
        artworks: state.artworks.map((artwork) =>
          artwork.id === action.payload.id ? action.payload : artwork
        ),
      };
    case 'DELETE_ARTWORK':
      return {
        ...state,
        artworks: state.artworks.filter((artwork) => artwork.id !== action.payload),
      };
    default:
      return state;
  }
};

export const ArtworkContext = createContext();

export const ArtworkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(artworkReducer, initialState);

  useEffect(() => {
    axios.get('http://localhost:5000/artworks')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  }, []);

  const addArtwork = (artwork) => {
    axios.post('http://localhost:5000/artworks', artwork)
      .then((response) => {
        dispatch({ type: 'ADD_ARTWORK', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  };

  const updateArtwork = (id, updatedArtwork) => {
    axios.put(`http://localhost:5000/artworks/${id}`, updatedArtwork)
      .then((response) => {
        dispatch({ type: 'UPDATE_ARTWORK', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  };

  const deleteArtwork = (id) => {
    axios.delete(`http://localhost:5000/artworks/${id}`)
      .then(() => {
        dispatch({ type: 'DELETE_ARTWORK', payload: id });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  };

  return (
    <ArtworkContext.Provider
      value={{
        artworks: state.artworks,
        loading: state.loading,
        error: state.error,
        addArtwork,
        updateArtwork,
        deleteArtwork,
      }}
    >
      {children}
    </ArtworkContext.Provider>
  );
};
