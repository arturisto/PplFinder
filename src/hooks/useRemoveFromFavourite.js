import { useState, useEffect } from "react";

export const useRemoveFromFavourites = (userId) => {
    useEffect(() => {
        let favourites = JSON.parse(window.localStorage.getItem('favourite_users'));
        favourites.splice(favourites.indexOf(userId), 1);
        window.localStorage.setItem('favourite_users', JSON.stringify(favourites));
      }, []);
};