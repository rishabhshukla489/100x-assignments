setInterval(()=>{
    let date =new Date();
    let hours=date.getHours()
    let min=date.getMinutes().toString()
    let sec=date.getSeconds().toString()
    let ampm=hours>12 ?'Pm':'Am';
    hours=hours.toString()
    const date1=`${hours}:${min}:${sec}`
    const date2=`${hours}:${min}:${sec} ${ampm}`
    console.log(date1)
    console.log(date2)
},1000)