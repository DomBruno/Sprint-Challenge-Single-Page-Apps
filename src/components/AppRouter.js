import React from 'react';
import {Switch,Route} from 'react-router-dom';
import CharacterList from './CharacterList';
import LocationList from './LocationsList';
import EpisodesList from './EpisodesList';
import WelcomePage from './WelcomePage';

export default function AppRouter(){
    return( 
    <div className='page-view ui bottom attached segment active tab'>
        <Switch>
            <Route path='/characters' component={CharacterList}/>
            <Route path='/locations' component={LocationList}/>
            <Route path='/episodes' component={EpisodesList}/>
            <Route component={WelcomePage}/>
        </Switch>
    </div>
    );
}