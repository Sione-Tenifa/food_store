import React from 'react';
import List from './List';

const MenuList = ({ lists, updateList, deleteList }) => (
  <div>
    { lists.map( list => 
        <List
          key={list.id}
          {...list}
          updateList={updateList}
          deleteList={deleteList}
        />
      )
    }
  </div>
)

export default MenuList;