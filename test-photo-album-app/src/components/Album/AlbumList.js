import React from 'react'
import {Album} from './Album'
import {StatusBar} from '../statusbar/statusbar'
import {server} from '../../api/index'

const options = {

  url: 'api/photos',
  listQuery(options) {
    console.log(options)
    return {
      term: options.search,
      sort: options.sort,
      limit: 10,
      offset: options.page * 10
    }
  },

  onError(response) {
    console.log(response)
    return `${response.code}: ${response.message}`
  },

  onChange(value) {
    console.log('Value changed to %s', value)
  },
  onFetch(response) {
  //  console.log(response[0])
    response = Array.from(response)
    console.log(response)
    return response.map((record)=> {
      return {
        id: record.id,
        attribution: record.attribution,
        name: record.name,
        caption: record.caption,
        url: record.url,
        tags: record.tags
      }
    })
  },
   request: server
}
export const AlbumList = (props) => {

  const {albums} = props
  const renderAlbums = () => {
    return (
      Object.keys(albums)
      .map(album_id => {
        return (
          <Album 
          key={album_id}
          title={`Album ${album_id}`}
          options={{ ...options, multiselect: true }} /> 
        );
      })
    );
  }
  return(
   
    <div>
        <StatusBar title={`${albums.length} Albums(s) total`}>
        </StatusBar>
        <div>
        {renderAlbums()}
        </div>
    </div>
  
  )
}