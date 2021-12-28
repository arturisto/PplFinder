import React, {useState, useEffect} from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import FavouriteList from "components/FavouritesList";
import { usePeopleFetch } from "hooks";
import { addToFavourites, removeFromFavourites, getAllFavourites } from "../../utils/fav_storage"
import * as S from "./style";

const Home = (props) => {
  const [ favourites, setFavourites ] = useState([]);
  const { users, isLoading } = usePeopleFetch();
  
  console.log(props);
  useEffect(()=> {
    setFavourites(getAllFavourites());
  },[])

  const handleClickFavourites = (index) => {
    if(!favourites.includes(index)){
      addToFavourites(index)
      let new_favourites = favourites.splice(0);
      new_favourites.push(index)
      setFavourites(new_favourites);

    } else {
      //remove fav item
      removeFromFavourites(index)
      let new_favourites = favourites.splice(0);
      new_favourites.splice(new_favourites.indexOf(index), 1)
      setFavourites(new_favourites);
    }
  }

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
          {props.tab === 0 ? "PplFinder": "Favourites"} 
          </Text>
        </S.Header>
        {props.tab === 0 ?
        <UserList users={users} isLoading={isLoading} favourites={favourites} handleFavourites={handleClickFavourites} />
        : <FavouriteList users={users} favourites={favourites} handleFavourites={handleClickFavourites} />
        }
      </S.Content>
    </S.Home>
  );
};

export default Home;
