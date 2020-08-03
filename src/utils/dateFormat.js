const dateFormat = ( dateNumber ) =>{
    console.log(dateNumber);
    var date = new Date(dateNumber);
    return  `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()} UTC`;
}
export default dateFormat;