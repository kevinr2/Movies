import styled from 'styled-components/native'



export const ContainerHome = styled.View`
background-color: #5CA0D3;
`
export const ContainerDetails = styled.ScrollView`
background-color:${props => props.theme.background};
`
/* style Movies */
export const ContainerMovies = styled.View`
width: 160px;
height: 260px;
`
export const Movies = styled.View`
width: 130px;
height: 170px;
background-color: gray;
margin-top: 15px;
border-radius: 30px;
margin-left: 20px;
`
export const Poster = styled.Image`
width: 100%;
height: 100%;
border-radius: 20px;
`

export const TitlesMovies = styled.Text`
margin-left: 25px;
top: 5px;
color:${props => props.theme.color} ;
`
/* body */

export const ContainerBody = styled.View`
width: 100%;
height: 600px;
background-color: ${props => props.theme.background};
border-top-right-radius: 20px;
border-top-left-radius: 20px;
margin-top: -18px;`

export const ContainerText = styled.View`
top: 20px;
padding: 20px;
display: flex;
flex-direction: row ;
justify-content: space-between;
`
export const ContainerText2 = styled.View`
top: 5px;
padding: 20px;
display: flex;
flex-direction: row ;
justify-content: space-between;
`
export const TextTitle = styled.Text`
color:${props => props.theme.color};
font-weight: bold;
`
export const TextSee = styled.Text`
color: ${props => props.theme.color};
`

export const List1 = styled.View`
height: 250px;
`

export const ListTop = styled.View`
margin-top: -20px;
height: 240px;
`
/* Header */

export const ContainerHeader = styled.View`
width: 100%;
height: 200px;
margin-top: -15px;
`
export const Title = styled.View`
height: 100%;
display:flex;
justify-content: center;
align-items: center;
`

export const HeaderText = styled.Text`
color: ${props => props.theme.color};
width: 70%;
font-size: 25px;
font-weight: bold;
margin-bottom: 20px;
`
export const Input = styled.TextInput`
marginLeft: 20px;
background-color: rgba(255, 255, 255, 0.7);
width: 75%;
padding: 2px 40px;
border-radius: 20px;
`

/* titles */

export const ViewContainer = styled.View`
margin-top: 10px;
display: flex;
`
export const TitlesT = styled.Text`
color: ${props => props.theme.color};
font-weight: bold;
font-size: 20px;
width: 250px
`
export const K = styled.Text`
color:${props => props.theme.color};
`
export const ContainerTitles = styled.View`
margin: 0 25px;
flex-direction: row;
justify-content:space-between;
`

/* imageDetails */
export const ImageContent = styled.View`
width: 100%;
height: 250px;
`
export const ImagePoster = styled.Image`
width: 100%;
height: 100%;
`

/* Description */

export const ViewButon = styled.View`
margin-top: 20px;
width: 140px;
height: 40px;
background-color: gray;
marginHorizontal: 25px;
borderRadius: 30px;
`

export const TextButton = styled.Text`
color: white;
height: 100%;
text-align: center;
font-weight: bold;
`
export const Descriptions = styled.View`
margin-top: 20px;

`

export const TextD = styled.Text`
color:${props => props.theme.color};
font-size: 15px;
`

/* Actors */

export const ViewContents = styled.View`
margin-top:20px;
margin-left: 15px;
margin-right:15px;
width: 70px;
height: 160px ;

`

export const ViewPhoto = styled.View`
width: 70px;
height: 70px;
background-color: white;
borderRadius: 50px ;
`

export const ImagePhoto = styled.Image`
width: 100%;
height: 100%;
borderRadius: 50px;

`
export const TextName = styled.Text`
margin-top: 10px; 
color: ${props => props.theme.color}; 
text-align: center;
`

/* others */
export const ViewO = styled.View`
height: 70px;
margin: 0 26px;
`

export const ContainerO = styled.View`
display: flex;
flex-direction:row;
`
export const Bold = styled.Text`
font-weight:bold;
color:${props => props.theme.color};
`
export const TextInfo = styled.Text`
margin-left:20px;
color:${props => props.theme.color};
`
export const TextInfo2 = styled.Text`
margin-left:15px;
color:${props => props.theme.color};
`

export const Container2 = styled.View`
display: flex;
flex-direction:row;
margin-left:15px;
`
export const TextGenres = styled.Text`
color:${props => props.theme.color}
`