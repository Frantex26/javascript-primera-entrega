

//Listas de videojuegos

let password = "1234";

function login() {

    let ingresar = false;

    for (let i = 3; i > 0; i--) {
        let enter_pass = prompt(
        "Enter your password. You have " + i + " chances"
    );
        if (enter_pass === password) {
            alert("Welcome, login successful");
            ingresar = true;
            break;
        } 
        else {
            alert("Incorrect password, please try again");
        }
    }
    return ingresar;
}

let succes = login();

if (succes) {
    let choose = prompt(
    "Select a company: \n1- Riot Games. \n2 - FromSoftware. \n3 - Blizzard Entertainment. \n4 - Naughty Dog \n5 - Supercell. \nPress X to finish."
    );

    while (choose != "X" && choose != "x") {
        switch (choose) {
            case "1":
                alert("League of Legends");
                alert("Valorant");
            break;

            case "2":
                alert("Dark Souls");
                alert("Bloodborne");
            break;

            case "3":
                alert("World of Warcraft");
                alert("Overwatch");
            break;

            case "4":
                alert("The Last of Us");
                alert("Uncharted");
            break;

            case "5":
                alert("Clash Royale");
                alert("Clash of Clans");
            break;
            
            
            default:
            alert("Invalid option");
            break;
        }
        choose = prompt(
            "Select a company: \n1- Riot Games. \n2 - FromSoftware. \n3 - Blizzard Entertainment. \n4 - Naughty Dog \n5 - Supercell. \nPress X to finish."
            );
    }
}
else {
    alert("Too many failed attempts, try again in a few minutes")
}
