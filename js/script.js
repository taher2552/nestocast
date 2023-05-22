const networkWrapper = document.querySelector('.network_wrapper');
const cards = document.querySelector('.cards');
let networkName;
let streaming;
let classColor;
let mbps;
let mbps2;
let imageNumber;

let networkNameObject = {
    0: "Prime Video",
    1: "Colors",
    2: "Microsoft",
    3: "Sony",
    4: "Tele Network",
    5: "Sony Sab",
    6: "Blue Network",
    7: "News Bulletin",
    8: "Lemon",
    9: "TV Entertainment",
    10: "Apple Tv",
    11: "Girrafe Vision",
    12: "Aeroplane Sattelite",
    13: "Discovery Plus",
    14: "Jhalak Dikhlaja",
    15: "Star Life"

}



for(let i=0;i<12;i++){

    let randomNumber= Math.floor(Math.random()*12);

    if(i%2==0){
        networkName="Cartoon Network";
        mbps="4.00";
        mbps2="1.50";
        imageNumber=0;
    }
    else{
        networkName="Abp news";
        mbps="3.50";
        mbps2="2.50";
        imageNumber=1;
    }

    if(randomNumber%2==0){
         streaming ="Stopped";
         classColor="red-font";
    }
    else{
        streaming ="Streaming";
        classColor="green-font";
    }

    networkWrapper.innerHTML  += `

    <section class="network_section flex">
     
        
<div class="flex ip_address">
<img src="./image/img-${imageNumber}.jpg" alt=""> 
<div>
  <p class="ip_text"><b>${networkName}</b><span class="green-font">[${mbps} Mbps]</span></p>
  <p class="link_color ip_text ">udp://224.1.1.101.:1234@192.168.101.200</p>
 </div> 
</div>



<div>
  <p class="link_color ip_text">udp://224.1.1.101.:1234@192.168.101.200</p>
  <p class="link_color ip_text">720x576,H264,ACC,Progressive</p>
</div>

<div class="flex">
  <div>
      <p><b>${mbps2} Mbps</b></p>
      <p class='${classColor}'>${streaming}</p>
  </div>
  <div>
      <i class="fa fa-angle-right" aria-hidden="true"></i>
  </div>

</div>
</section>

`;

}


for(let i=0; i<16;i++){

    cards.innerHTML += `
    
    <div class="flex cards_layout">
    <div class="network_img">
       <img src="./image/network-${i}.jpg" alt="" srcset="">
    </div>
    <div class="network_details">
      <h3>${networkNameObject[i]}</h3>
      <p class="link_color font_Size">224.101.11.224@224.101.1</p>
      <div class="flex">
        <p class="link_color font_Size">Video:H224</p>
        <p class="link_color font_Size">Audio:AAC</p>
      </div>
      <div class="flex">
        <p class="link_color font_Size">1920x1080</p>
        <p class="red-font font_Size">00.05 Mbps</p>
      </div>
    </div>
  </div>
    
    `
}


