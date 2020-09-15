import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {albumphotos}  from '../../api/samplePhotos'
import {photos} from '../photo/photos'
import {PhotoList} from '../photo/photolist'
import { AlbumList } from '../Album/AlbumList'

export class Main extends React.Component{
state = {
    albums: {},
    photos: {}
}

componentDidMount() {
    this.setState({
        photos: photos,
        albums:albumphotos

    })
    console.log(`hola3 ${this.state.photos[1]}`)
 }

   render(){ 
    const {albums, photos} =this.state
    const albumList = () => <AlbumList albums={albums}></AlbumList>
    const photoList = () => <PhotoList photos={photos}></PhotoList>

    return(
        <Switch>
            <Route exact path= "/" render={albumList}></Route>
            <Route path= "/albums" render={albumList}></Route>
            <Route path= "/photos" render={photoList}></Route>
        </Switch>
    )
    }
}
