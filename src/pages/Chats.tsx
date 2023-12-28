import React from 'react'
import { GridItem } from '../styled/grid';
import Search from "../components/Search";
import styled from 'styled-components';

const ChatsGrid = styled.div`
  display: grid;
  grid-template-columns: 427px 1fr;
  grid-template-rows: 60px 1fr;
  gap: 11px 49px;

`;

const ChatGridItem = styled(GridItem)`
  grid-row: 1/3;
  grid-column: 2/3;

`; 

const Chats = () => {
  return (
    <ChatsGrid>
        <Search />
        <GridItem>Friend</GridItem>
        <ChatGridItem>Chat</ChatGridItem>
        
    </ChatsGrid>
  )
}

export default Chats;