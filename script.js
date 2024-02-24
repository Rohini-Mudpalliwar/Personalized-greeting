function mainFunction(){


    const userName = document.getElementById("userInput1").value;
    const userMood = document.getElementById("userInput2").value;
    const userHobby = document.getElementById("userInput3").value;
    const userPalns = document.getElementById("userInput4").value;
    const userLocation = document.getElementById("userInput5").value;

    
    function Greeting(){
    
    
    
    const time = new Date().getHours();
    let greeting;
    if (time < 10) {
      greeting = "Good morning" + userFirstName;
    } else if (time < 20) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
      return greeting;
    }
    
    document.getElementById("demo").innerHTML = Greeting()+ " " +`"${userName}! 😊 Today, your ${userMood} mood adds a delightful touch to our conversation. As you enjoy ${userHobby}, I hope it brings you the joy and inspiration you deserve. Whether you go ${userPalns} ahead or are simply savoring the present moment in ${userLocation}, know that this space is tailored just for you. Thanks for sharing a glimpse into your world – let's make today amazing together!"` ;



    return false;
    }