import useMediaQuery from '@mui/material/useMediaQuery';



export function GetMatchesSmallScreen(){
    const matchesSmallScreenQuery = useMediaQuery('(min-width:600px)');

    return(matchesSmallScreenQuery);
}