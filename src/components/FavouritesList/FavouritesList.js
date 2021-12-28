import React, { useEffect, useState } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addToFavourites, removeFromFavourites, getAllFavourites } from "../../utils/fav_storage"
import * as S from "./style";

const FavouritesList = ({ users, favourites, handleFavourites }) => {
  console.log(favourites);
  return (
    <S.FavouritesList>
      <S.List>
        {users.map((user, index) => {
            if(!favourites.includes(index)) return ""
            return (
              <S.User
                key={index}
              >
                <S.UserPicture src={user?.picture.large} alt="" />
                <S.UserInfo>
                  <Text size="22px" bold>
                    {user?.name.title} {user?.name.first} {user?.name.last}
                  </Text>
                  <Text size="14px">{user?.email}</Text>
                  <Text size="14px">
                    {user?.location.street.number} {user?.location.street.name}
                  </Text>
                  <Text size="14px">
                    {user?.location.city} {user?.location.country}
                  </Text>
                </S.UserInfo>
                <S.IconButtonWrapper isVisible={true} onClick={()=>handleFavourites(index)}>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
            )})}
      </S.List>
    </S.FavouritesList>
  );
};

export default FavouritesList;
