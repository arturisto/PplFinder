import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addToFavourites, removeFromFavourites, getAllFavourites } from "../../utils/fav_storage"
import * as S from "./style";

const UserList = ({ users, isLoading, favourites, handleFavourites }) => {
  const countries = ["Brazil", "Australia", "Canada", "Germany", "Norway"];
  const [hoveredUserId, setHoveredUserId] = useState();
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleCheckboxClick = (country) => {
    if(window.event.target.checked) {
      setSelectedCountries(selectedCountries=> [...selectedCountries, country]);
    } else {
      setSelectedCountries(selectedCountries.length === 1 ? [] : selectedCountries.filter(function(countryItem){ return countryItem !== country}));
    }
  }

  const handleClickFavourites = (index) => {
   handleFavourites(index);
  }
 
  return (
    <S.UserList>
      <S.Filters>
        {countries.map((country, index) => {
          return (<CheckBox key={index} value={country} label={country} onChange={()=>handleCheckboxClick(country)} />)
        })}
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          if(selectedCountries.length > 0 && selectedCountries.indexOf(user.location.country) < 0 ) return ""
          else{
            
            return (
              <S.User
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
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
                <S.IconButtonWrapper isVisible={favourites.includes(index) ? true : (index === hoveredUserId)} onClick={()=>handleClickFavourites(index)}>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
            );}
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
