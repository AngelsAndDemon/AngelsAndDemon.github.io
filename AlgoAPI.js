
 
const api_url = "https://algoexplorerapi.io/idx2/v2/accounts/M2LZ26TAFPVLCA6WEYK3OO3EMT2E5JTYC6W34GOSNFYWN4JPCFZMZMI5ME";
 
async function information(){
        // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);
 
    // Parsing it to JSON format
    const data = await response.json();
    dataLength = data['account']['created-assets'].length
    
    var newtext = document.createTextNode("Demons Minted Count: " + dataLength + " / 469");
      info = document.getElementById("info");
      info.appendChild(newtext);
      info.className += "info";

      var linebreak = document.createElement('br');
      info.appendChild(linebreak);
      
      var newtext2 = document.createTextNode("Angels Minted Count: " + dataLength + " / 469");
      info.appendChild(newtext2);
      info.style.color = "white";
      
      var linebreak = document.createElement('br');
      info.appendChild(linebreak);
      var numberize = parseFloat(dataLength);
      var percent = numberize / 469 * 100;
      
      var newtext3 = document.createTextNode("% of project complete: " + percent.toFixed(2) + "%");
      info.appendChild(newtext3);
      info.style.color = "white";
}

function attribute(){
     const attributeArray = [
         "001 None NA HPurple NA NA NA NA Line EDemon/Angel Black/Yellow MNormal None/Shirt NA Algo BGreen WClosed Wred BKGrey",
        "002 ShortHorn/Ring DarkGreen/Orange HOrange Dots NA NA NA Line Special1 ESilver Smoke LongSleeve CYellow 666/Cross BGreen None NA BKRed",
         "003 None NA HYellow NA NA NA NA Thin ENormal EOrange MOpen LongSleeve CDarkGrey Yieldly BYellow None NA BKYellow",
         "004 None NA HPink NA NA NA NA Line Special1 EYellow Clench LongSleeve CWhite 666/Cross BPurple WClosed Wyellow BKBlue",
        "005 LongHorn/Cross DarkGreen/Orange HDarkGrey NA NA NA NA Thick/ThinV2 Special2 EBlue Clench Suit/Dress CPurple Algo BOrange None NA BKGrey",
        "006 4xHorns/2Halos DarkSilver HPink Ring Dots Demon/Angel RingGold Thick/ThinV2 ENormal ERed Clench None/Shirt NA Slime BRed None NA BKYellow",
        "007 ShortHorn/Ring DarkGreen/Orange HDarkGrey Demon/Angel Ring NA RingSilver Thin ENormal EOrange MNormal Suit/Dress CWhite 666/Cross BRed None NA BKGrey",
        "008 ShortHorn/Ring DarkGreen/Orange HPurple Dots Demon/Angel NA NA None/Small EDemon/Angel Black/Yellow MOpen None/Shirt NA None BGreen WClosed Wwhite BKYellow",
        "009 ShortHorn/Ring DarkGreen/Orange HSilver Ring Dots Demon/Angel RingGold Line ENormal EBlue Smoke None/Shirt NA Algo BRed None NA BKRed",
        "010 ShortHorn/Ring DarkGreen/Orange HOrange Dots Ring NA RingSilver None/Small ENormal EPink MNormal DressShirt CYellow 666/Cross BSilver None NA BKGrey",
        "011 ShortHorn/Ring DarkSilver HDarkGrey NA NA NA NA Line EDemon/Angel Black/Yellow MNormal LongSleeve CWhite Yieldly BDarkGrey WClosed Wwhite BKYellow",
        "012 None NA HRed NA NA NA NA Thin ENormal EYellow Smoke None/Shirt NA None BYellow None NA BKGrey",
        "013 None NA HPurple NA NA NA NA None/Small Special1 EPurple MNormal DressShirt CDarkGrey 666/Cross BBlue None NA BKGrey",
        "014 None NA HSilver Ring Dots Demon/Angel RingGold None/Small EDemon/Angel Black/Yellow MNormal DressShirt CWhite Algo BSilver WClosed Wred BKPurple",
        "015 LongHorn/Cross DarkGreen/Orange HGreen Ring Dots NA RingGold Thin EDemon/Angel Black/Yellow MNormal None/Shirt NA 666/Cross BPurple None NA BKPurple",
        "016 4xHorns/2Halos DarkGreen/Orange HSilver Dots NA NA NA Thin EDemon/Angel Black/Yellow MNormal DressShirt CWhite None BYellow WOpen Wred BKGrey",
        "017 ShortHorn/Ring DarkGreen/Orange HRed NA NA NA NA Line EDemon/Angel Black/Yellow Tongue Suit/Dress CDarkGrey Yieldly BBlue WOpen Wred BKGrey",
        "018 LongHorn/Cross DarkSilver HPink NA NA NA NA None/Small EDemon/Angel Black/Yellow Clench Suit/Dress CPurple 666/Cross BDarkGrey WClosed Wwhite BKBlue",
        "019 LongHorn/Cross DarkGreen/Orange HPurple Demon/Angel Dots NA NA Thin ENormal EOrange Tongue DressShirt CWhite Yieldly BGreen None NA BKGrey",
        "020 ShortHorn/Ring DarkGreen/Orange HSilver NA NA NA NA Line Special1 EBlue Tongue Suit/Dress CDarkGrey None BBlue None NA BKGrey",
        "021 4xHorns/2Halos DarkSilver HBlue NA NA NA NA Thick/ThinV2 EDemon/Angel Black/Yellow MNormal LongSleeve CWhite None BGreen None NA BKPurple",
        "022 None NA HSilver NA NA NA NA Line EDemon/Angel Black/Yellow Clench LongSleeve CDarkGrey None BPurple WClosed Wblack BKPurple",
        "023 None NA HOrange Demon/Angel Ring NA RingGold Thick/ThinV2 EDemon/Angel Black/Yellow MOpen None/Shirt NA None BDarkGrey None NA BKPurple",
        "024 4xHorns/2Halos DarkGold/Gold HGreen NA NA NA NA Line EDemon/Angel Black/Yellow MNormal None/Shirt NA None BDarkGrey WClosed Wyellow BKYellow",
        "025 4xHorns/2Halos DarkGreen/Orange HSilver NA NA NA NA None/Small Cat EYellow Clench LongSleeve CWhite A&D BRed WClosed Wyellow BKBlue"];

    var attributeArray2 = attributeArray

       const attributeArray3 = attributeArray.concat(attributeArray2)
       attributeArray3.sort()
            
      for (var i = attributeArray3.length; i < 938; i++) {
          attributeArray3.push("None");
      }

        
    //console.log(attributeArray3)
    return attributeArray3
}

information()
getUser("")

  async function getUser(c) {
    // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);
 
    // Parsing it to JSON format
    const data = await response.json();
    dataLength = data['account']['created-assets'].length
    const attributeArray = attribute()

      for (var i = 0; i < dataLength; i++) {
        var containerDiv = document.createElement('div');
        var imageDiv = document.createElement('div');
        var nameDiv = document.createElement('div');
        nameDiv.className += "name";
          
        var idDiv = document.createElement('div');
        idDiv.className += "name";

        containerDiv.className = "gallery " + attributeArray[i];
        containerDiv.appendChild(imageDiv);
                                 

        var ret = data['account']['created-assets'][i]['params']['url'].replace('ipfs://','');

        var img = document.createElement('img');
        img.id = "imageID";
        img.src = "https://ipfs.io/ipfs/" + ret;  

        var s = document.getElementById('selection');
        s.appendChild(containerDiv);
        imageDiv.appendChild(img);
        imageDiv.style.float = 'center';
          
        containerDiv.appendChild(nameDiv);
        var text = document.createTextNode(data['account']['created-assets'][i]['params']['name']);
        nameDiv.appendChild(text); 
          
          containerDiv.appendChild(idDiv);  
        var textID = document.createTextNode(data['account']['created-assets'][i]['index']);
        idDiv.appendChild(textID);       
                  
                        
        
     }
}