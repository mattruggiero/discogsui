

export const hasImage = (props) => {
    let retVal = [{src:"../disc.png"}];
    console.log(props);
    if(props){
       retVal = props.map(each => {
        return({
            src: each.uri,
            thumbnail: each.uri,
            thumbnailWidth: (each.width)/2,
            thumbnailHeight: (each.height)/2,
        })
       })
    }
    return(retVal);

}

