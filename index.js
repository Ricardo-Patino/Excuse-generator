        function generator () {
    var who = ["Juan", "María", "Pablo", "Roberto"]; 
    var action = ["duerme", "come", "escribe", "habla"];
    var when = ["hoy", "después", "durante clases", "anteayer"];
 
    var msg =
        who[Math.floor(Math.random() * who.length)] + " " +
        action[Math.floor(Math.random() * action.length)] + " " +
        when[Math.floor(Math.random() * when.length)];
    //return msg;
    }

    console.log(generator());