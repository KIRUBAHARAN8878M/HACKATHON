var i1 = document.createElement("h3");
i1.textContent="Enter Brewery Name ..You Will Get Brewery Dtails."
document.body.append(i1);
var input1=document.createElement("div");
input1.setAttribute("class","box");
input1.setAttribute("id","id1");
var i2=document.createElement("input");
i2.setAttribute("type","input");
i2.setAttribute("id","nam")
var i3=document.createElement("button");
i3.setAttribute("type","button");
i3.setAttribute("id","btn");
i3.setAttribute("onclick","btn()");
i3.textContent="search";
var i4 = document.createElement("div");
i4.setAttribute("id","id2");
input1.append(i2);
input1.append(i3);
input1.append(i4);
document.body.append(input1);
var i5 =document.getElementById("id2").innerHTML=(`
<div class="card" id="card-text" style="width: 20rem;"></div>`);
function btn(){
   var name1=document.getElementById("nam").value;
    console.log(name1);
    foo();
    async function foo(){     
        try{  
            let brewery= await fetch (`https://api.openbrewerydb.org/breweries?by_name=${name1}`)
            let brewery1= await brewery.json();
            console.log(brewery1);
            for(let i=0;i<=brewery1.length;i++){
            var brewery2 = 
                document.getElementById(
                    "card-text"
                    ).innerText=`
                    Name         : ${brewery1[i].name}
                    Brewery_Type : ${brewery1[i].brewery_type}
                    Website_Url  : ${brewery1[i].website_url}
                    ADDRESS:
                        City         : ${brewery1[i].city}
                        State        : ${brewery1[i].state}
                        Country      : ${brewery1[i].country}
                        Postal_Code  : ${brewery1[i].postal_code}
                    `;
                console.log(brewery1[i].name);
                console.log(brewery1[i].brewery_type);   
                console.log(brewery1[i].website_url);
                console.log(brewery1[i].city);
                console.log(brewery1[i].state);
                console.log(brewery1[i].country);
                console.log(brewery1[i].postal_code);
            }      
        }
        catch(error){
            console.log(error);
        }
    
    }
}

