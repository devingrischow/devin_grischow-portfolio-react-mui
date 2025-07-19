import useMediaQuery from '@mui/material/useMediaQuery';



export function GetMatchesSmallScreen(minWidth='600px'){
    const minWidthString = `(min-width:${minWidth})`

    const matchesSmallScreenQuery = useMediaQuery(minWidthString);

    return(matchesSmallScreenQuery);
}