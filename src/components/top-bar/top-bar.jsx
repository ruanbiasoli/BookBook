import React from 'react';
import {Link} from 'react-router-dom';
import {StyledTopBar, StyledLinks, StyledTopMenu} from './styledTopBar';
import {LogoutOutlined } from '@ant-design/icons';

const TopBar = () =>{
    return(
        <StyledTopBar>
            <StyledTopMenu>
                <StyledLinks className="top-barLinks" to="/search">Pesquisar</StyledLinks>
                <StyledLinks className="top-barLinks" to="/shelf">Prateleira</StyledLinks>
                <StyledLinks className="top-barLinks" to="/timeline">Timeline</StyledLinks>
                <LogoutOutlined id="logout_button"className="top-barLinks"/>
            </StyledTopMenu> 
        </StyledTopBar>           
    )
}

export default TopBar