import { useState, useEffect } from "react";

export const useAddToFavourites = (userId) => {
    useEffect(() => {
        let favourites = JSON.parse(window.localStorage.getItem('favourite_users'));
        favourites.push(userId);
        window.localStorage.setItem('favourite_users', JSON.stringify(userId));
      }, []);
};


