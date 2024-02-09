import s from './DecksList.module.css'
import {useEffect} from "react";
import {desksApi} from "../decks-api";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {setDecksAC} from "../decks-reducer";
import {getDecks} from "../decks-selectors";
import {DeckItem} from "./DeckItem/DeckItem";

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(getDecks)

  useEffect(() => {
    desksApi.fetchDesks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  },[])

  return <ul className={s.list}>{decks.map(el => <DeckItem key={el.id} deck={el}/>)}</ul>
}
