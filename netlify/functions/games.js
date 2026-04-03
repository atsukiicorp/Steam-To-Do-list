const https=require("https");
exports.handler=async function(event){
const {key,steamid}=event.queryStringParameters;
const url=`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${steamid}&include_appinfo=1`;
return new Promise(resolve=>{
 https.get(url,res=>{
  let data="";
  res.on("data",c=>data+=c);
  res.on("end",()=>resolve({statusCode:200,body:data}));
 });
});
};
