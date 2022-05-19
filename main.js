let row=document.querySelector(".row");

let btn=document.querySelector(".btn")

btn.addEventListener("click",function(){
    let input=document.querySelector("input");
    let temp=document.querySelector('select')

    async function getDataCountry(){
        let data=await fetch(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`);
        let getData=await data.json();
        console.log(getData);
        if(temp.value=="Temprature"){
            row.innerHTML=` <div class="col-md-6 main">
        <div class="col-md-6 first">
         <label for="inputText" class="form-label">City:</label>
         <input type="text" class="form-control" id="inputText" aria-describedby="emailHelp">

         <p>City: ${getData.location.name}</p>
         <p>Country: ${getData.location.country}</p>
         <p>Weathet Forecast: ${getData.current.temp_c}</p>
         <p>Sky Condition:<img src="${getData.current.condition.icon}" alt="">${getData.current.condition.text}</p>
        </div>
        
        <div class="col-md-6 second">
         <select class="form-select" aria-label="Default select example">
             <option selected>Fahrenheit</option>
             <option value="1">One</option>
             <option value="2">Two</option>
           </select>
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
    </div>
    <div class="col-md-6"></div>`
        }
        else{
            row.innerHTML=` <div class="col-md-6 main">
        <div class="col-md-6 first">
         <label for="inputText" class="form-label">City:</label>
         <input type="text" class="form-control" id="inputText" aria-describedby="emailHelp">

         <p>City: ${getData.location.name}</p>
         <p>Country: ${getData.location.country}</p>
         <p>Weathet Forecast: ${getData.current.temp_f}</p>
         <p>Sky Condition:<img src="${getData.current.condition.icon}" alt="">${getData.current.condition.text}</p>
        </div>
        
        <div class="col-md-6 second">
         <select class="form-select" aria-label="Default select example">
             <option selected>Fahrenheit</option>
             <option value="1">One</option>
             <option value="2">Two</option>
           </select>
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
    </div>
    <div class="col-md-6"></div>`
        }
    }
    getDataCountry();
    console.log(temp.value);

})



