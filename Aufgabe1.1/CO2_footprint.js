//Aufbau eines Kommentars -> Spaltenüberschrift/Betroffener Bereich - Beschreibung


//Tabelle - Angaben von Arrays und Variablen, welche für die Ausgabe/Sortierung/Filterung benötigt werden:
    //LAND - Array mit den unsortierten Daten 
    const Land_unsortiert = ["	Kirgisistan	","	Kirgisistan	","	Kirgisistan	","	Kirgisistan	","	Türkei	","	Türkei	","	Türkei	","	Türkei	","	Malediven	","	Malediven	","	Malediven	","	Malediven	","	Iran	","	Iran	","	Iran	","	Iran	","	Namibia	","	Namibia	","	Namibia	","	Namibia	","	Mikronesien	","	Mikronesien	","	Sambia	","	Sambia	","	Sambia	","	Sambia	","	Botsuana	","	Botsuana	","	Botsuana	"]
    //LAND - Erstellen zwei neuer Arrrays mit den unsortierten Daten - slice um neue Elemente zu erzeugen und keine Verweise auf das Original-Array zu erstellen.
    const Array_Land_output = Land_unsortiert.slice(); //LAND - Hauptarray um die Ausgabereihenfolge zu halten und auszugeben
    const Array_Land_gefiltert = Land_unsortiert.slice(); //Land - Unterstützungsarray für die Filterung
    //Land - Wird gerade ASC oder DESC geordnet.
    var Land_AnachZ = 0; 


    //Verbrauch - Array mit den unsortierten Daten
    const CO2_unsortiert = ["	870000000	","	33000000	","	45000000	","	103000000	","	520000000	","	52000000	","	107000000	","	36000000	","	370000000	","	45000000	","	98450684	","	191908511	","	657651000	","	60000000	","	12000	","	231000000	","	89000000	","	9000000	","	870000	","	5400000	","	50000000	","	15000000	","	480000000	","	80000000	","	40000000	","	35159159	","	150000000	","	15000000	","	250000	"]
    //Vebrauch - Erstellen zwei neuer Arrrays mit den unsortierten Daten - slice um neue Elemente zu erzeugen und keine Verweise auf das Original-Array zu erstellen.
    const Array_Verbrauch_output = CO2_unsortiert.slice(); //Verbrauch - Hauptarray um die Ausgabereihenfolge zu halten und auszugeben
    const Array_Verbrauch_gefiltert = CO2_unsortiert.slice(); //Verbrauch - Unterstützungsarray für die Filterung
    //Verbrauch - Wird gerade ASC oder DESC geordnet.
    var Verbrauch_AnachZ = 0; 

    //Unternehmen - Array mit den unsortierten Daten
    const unternehmen_unsortiert = ["	Kirgistan	","	Interglass	","	Kyrgyz Express Post	","	Karabalta	","	Türkei	","	Abwrackwerften von Aliaga	","	ESAS Holding	","	Oyak	","	Malediven	","	Industrial Fisheries	","	Male' Water & Sewerage	","	State Electric	","	Iran	","	OSCO	","	AzarAb	","	Pars Oil	","	Namibia	","	Harnas	","	Mediclinic	","	Wilhelmstal	","	Mikronesien	","	Caroline Islands Air	","	Sambia	","	Mopani Copper Mines	","	Konkola Copper Mines	","	Farmers House	","	Botsuana	","	Botswana Bank	","	Insurance Holding	"]
    //Unternehmen - Erstellen zwei neuer Arrrays mit den unsortierten Daten - slice um neue Elemente zu erzeugen und keine Verweise auf das Original-Array zu erstellen.
    const Array_unternehmen_output = unternehmen_unsortiert.slice(); //Verbrauch - Hauptarray um die Ausgabereihenfolge zu halten und auszugeben
    const Array_unternehmen_gefiltert = unternehmen_unsortiert.slice(); //Verbrauch - Unterstützungsarray für die Filterung
    //Unternehmen - Wird gerade ASC oder DESC geordnet.
    var Unternehmen_Anachz = 0;

let gegenpruefen = new Array(Land_unsortiert.length);







//Ausgabe Funktionen - Default: Verbrauch_Output() (Aufrufen der Website)
    //  Land_Output();
     Verbrauch_Output();
    // Unternehmen_Output();

//Outputfunktionen 
//für Land als Hauptspalte 
function Land_Output(){

    let x = 0; //Zurücksetzen der Laufvariable
    while (x < Array_Land_output.length) { //LAND - Schleife solange die Laufvariable kleiner als die Anzahl der Elemente im Array_Land_Output mache:

        var str_land_id = "land_"+(x+1); //LAND - Zusammensetzung der ZellenID für das Land
        var str_verbrauch_id = "verbrauch_"+(x+1); //LAND - Zusammensetzung der ZellenID für den Verbrauch
        var str_unternehmen_id = "unternehmen_"+(x+1); //LAND - Zusammensetzung der UnternehmenID für das Unternehmen

        if(Array_Land_output[x]!= undefined){ //LAND - wenn das Array an der Stelle x nicht undefinded ist führe aus:
            document.getElementById(str_land_id).innerHTML = Array_Land_output[x]; //Land - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_Land_output an der Stelle X mit innerhtml übermittelt
    
            var Land_index = Array_Land_output[x]; //LAND - zuordnet der Variable Land_index den Wert des Array_Land_output an Stelle x zu
            let index = 0; //LAND - setzen einer Variable, welche sowohl den Suchbereich angibt als auch den Index des Suchparameter im Originalen Datenarray
            let reset = 1; //LAND - setzen einer Variable, nur zum beenden der folgendne While-Schleife
            index = Land_unsortiert.indexOf(Land_index, index); //LAND - sucht den Index vom Land_index im Originalen Datengeber Land_unsortiert
            while(reset == 1){ //LAND - solange reset gleich ein true ist.:
                if(gegenpruefen.indexOf(index) == -1){ //Land - Überprüfung im Array gegenpruefen ob die Variable Index bereits Teil des Array ist. Wenn nicht dann:
                    gegenpruefen[x]=index; //LAND -fügt dem Array die Variable index an Position x zu.
                    Array_Verbrauch_output[x] = CO2_unsortiert[index];//LAND - Ordnet dem Array_Verbrauch_output an Position x, aus dem Array CO2_unsortiert an Position index den Wert zu
                    document.getElementById(str_verbrauch_id).innerHTML = Array_Verbrauch_output[x]; //Land - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_Verbrauch_output an der Stelle X mit innerhtml übermittelt
                    Array_unternehmen_output[x] = unternehmen_unsortiert[index]; //LAND Ordnet dem Array_unternehmen_output  an Position x, aus dem unternehmen_unsortiert an Position index den Wert zu.
                    document.getElementById(str_unternehmen_id).innerHTML = Array_unternehmen_output[x]; //Land - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_unternehmen_output an der Stelle X mit innerhtml übermittelt
                    reset = 0; //LAND - setzen der Variable reset auf 0 zum beenden der Schleife
                }else{ //LAND - Ist die Variable Index bereits Teil des Arrays Gegenpruefen:
                    index++; //LAND - Erhöhen des Index um 1.
                }
            }

        }else{//LAND - wenn das Array an der Stelle x undefinded ist führe aus:
            document.getElementById(str_land_id).innerHTML =""; //LAND - der Zelle wird kein Wert übermittelt
            document.getElementById(str_verbrauch_id).innerHTML =""; //LAND - der Zelle wird kein Wert übermittelt
            document.getElementById(str_unternehmen_id).innerHTML=""; //LAnd - der Zelle wird kein Wert übermittelt
        }
    x++; //LAND - Erhöhen der Laufvariable um 1.
    }

   let z = 0; //LAND - Zurücksetzen der Laufvariable
    while (z < gegenpruefen.length) { //LAND - solange z kleiner als die Menge der Elemnte des Arrays Gegenpruenfen ist
        gegenpruefen[z] =""; //LAND - Den Wert des Arrays an Position z auf "" setzen
        z++; //LAND - Erhöhen der Laufvariable um 1.
    }
    
}

//für Vebrauch als Hauptspalte 
function Verbrauch_Output(){

    let x = 0; //Zurücksetzen der Laufvariable
    while (x < Array_Verbrauch_output.length) { //Verbrauch - Schleife solange die Laufvariable kleiner als die Anzahl der Elemente im Array_Verbrauch_Output mache:

        var str_land_id = "land_"+(x+1); //Verbrauch - Zusammensetzung der ZellenID für das Land
        var str_verbrauch_id = "verbrauch_"+(x+1); //Verbrauch - Zusammensetzung der ZellenID für den Verbrauch
        var str_unternehmen_id = "unternehmen_"+(x+1); //Verbrauch - Zusammensetzung der UnternehmenID für das Unternehmen

        if(Array_Verbrauch_output[x]!= undefined){ //Verbrauch - wenn das Array an der Stelle x nicht undefinded ist führe aus:
            document.getElementById(str_verbrauch_id).innerHTML = Array_Verbrauch_output[x]; //Verbrauch - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_Verbrauch_output an der Stelle X mit innerhtml übermittelt
    
            var Land_index = Array_Verbrauch_output[x]; //Verbrauch - zuordnet der Variable Land_index den Wert des Array_Verbrauch_output an Stelle x zu
            let index = 0; //Verbrauch - setzen einer Variable, welche sowohl den Suchbereich angibt als auch den Index des Suchparameter im Originalen Datenarray
            let reset = 1; //Verbrauch - setzen einer Variable, nur zum beenden der folgendne While-Schleife
            index = CO2_unsortiert.indexOf(Land_index, index); //Verbrauch - sucht den Index vom Land_index im Arrayr Verbrauch_unsortiert
            while(reset == 1){ //Verbrauch - solange reset gleich ein true ist.:
                if(gegenpruefen.indexOf(index) == -1){ //Verbrauch - Überprüfung im Array gegenpruefen ob die Variable Index bereits Teil des Array ist. Wenn nicht dann:
                    gegenpruefen[x]=index; //Verbrauch -fügt dem Array die Variable index an Position x zu.
                    Array_Land_output[x] = Land_unsortiert[index];//Verbrauch - Ordnet dem Array_Land_output an Position x, aus dem Array CO2_unsortiert an Position index den Wert zu
                    document.getElementById(str_land_id).innerHTML = Array_Land_output[x]; //Verbauch - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_Land_output an der Stelle X mit innerhtml übermittelt
                    Array_unternehmen_output[x] = unternehmen_unsortiert[index]; //Verbrauch Ordnet dem Array_unternehmen_output  an Position x, aus dem unternehmen_unsortiert an Position index den Wert zu.
                    document.getElementById(str_unternehmen_id).innerHTML = Array_unternehmen_output[x]; //Verbrauch - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_unternehmen_output an der Stelle X mit innerhtml übermittelt
                    reset = 0; //Verbrauch - setzen der Variable reset auf 0 zum beenden der Schleife
                }else{ //Verbrauch - Ist die Variable Index bereits Teil des Arrays Gegenpruefen:
                    index++; //Verbrauch - Erhöhen des Index um 1.
                }
            }

        }else{//Verbrauch - wenn das Array an der Stelle x undefinded ist führe aus:
            document.getElementById(str_land_id).innerHTML =""; //Verbrauch - der Zelle wird kein Wert übermittelt
            document.getElementById(str_verbrauch_id).innerHTML =""; //Verbrauch - der Zelle wird kein Wert übermittelt
            document.getElementById(str_unternehmen_id).innerHTML=""; //Verbrauch - der Zelle wird kein Wert übermittelt
        }
    x++; //Verbrauch - Erhöhen der Laufvariable um 1.
    }

   let z = 0; //Verbrauch - Zurücksetzen der Laufvariable
    while (z < gegenpruefen.length) { //Verbrauch - solange z kleiner als die Menge der Elemnte des Arrays Gegenpruenfen ist
        gegenpruefen[z] =""; //Verbrauch - Den Wert des Arrays an Position z auf "" setzen
        z++; //Verbrauch - Erhöhen der Laufvariable um 1.
    }
    
}

//für Unternehmen als Hauptspalte 
function Unternehmen_Output(){

    let x = 0; //Zurücksetzen der Laufvariable
    while (x < Array_unternehmen_output.length) { //Unternehmen - Schleife solange die Laufvariable kleiner als die Anzahl der Elemente im Array_unternehmen_Output mache:

        var str_land_id = "land_"+(x+1); //Unternehmen - Zusammensetzung der ZellenID für das Land
        var str_verbrauch_id = "verbrauch_"+(x+1); //Unternehmen - Zusammensetzung der ZellenID für den Verbrauch
        var str_unternehmen_id = "unternehmen_"+(x+1); //Unternehmen - Zusammensetzung der UnternehmenID für das Unternehmen

        if(Array_unternehmen_output[x]!= undefined){ //Unternehmen - wenn das Array an der Stelle x nicht undefinded ist führe aus:
            document.getElementById(str_unternehmen_id).innerHTML = Array_unternehmen_output[x]; //Unternehmen - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_unternehmen_output an der Stelle X mit innerhtml übermittelt
    
            var unternehmen_index = Array_unternehmen_output[x]; //Unternehmen - zuordnet der Variable Land_index den Wert des Array_unternehmen_output an Stelle x zu
            let index = 0; //Unternehmen - setzen einer Variable, welche sowohl den Suchbereich angibt als auch den Index des Suchparameter im Originalen Datenarray
            let reset = 1; //Unternehmen - setzen einer Variable, nur zum beenden der folgendne While-Schleife
            index = unternehmen_unsortiert.indexOf(unternehmen_index, index); //Unternehmen - sucht den Index vom Land_index im Originalen Datengeber unternehmen_unsortiert
            while(reset == 1){ //Unternehmen - solange reset gleich ein true ist.:

                if(gegenpruefen.indexOf(index) == -1){ //Unternehmen - Überprüfung im Array gegenpruefen ob die Variable Index bereits Teil des Array ist. Wenn nicht dann:
                    gegenpruefen[x]=index; //Unternehmen - fügt dem Array die Variable index an Position x zu.
                    Array_Verbrauch_output[x] = CO2_unsortiert[index];//Unternehmen - Ordnet dem Array_Verbrauch_output an Position x, aus dem Array CO2_unsortiert an Position index den Wert zu
                    document.getElementById(str_verbrauch_id).innerHTML = Array_Verbrauch_output[x]; //Unternehmen - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_Verbrauch_output an der Stelle X mit innerhtml übermittelt
                    Array_Land_output[x] = Land_unsortiert[index];//Unternehmen - Ordnet dem Array_Land_output an Position x, aus dem Array Land_unsortiert an Position index den Wert zu
                    document.getElementById(str_land_id).innerHTML = Array_Land_output[x]; //Unternehmen - Temporäre HTML Änderung, welche der Zelle an der Stelle x den Wert des Array_Land_output an der Stelle X mit innerhtml übermittelt
                     reset = 0; //Unternehmen - setzen der Variable reset auf 0 zum beenden der Schleife
                }else{ //Unternehmen - Ist die Variable Index bereits Teil des Arrays Gegenpruefen:
                    index++; //Unternehmen - Erhöhen des Index um 1.
                }
            }

        }else{//Unternehmen - wenn das Array an der Stelle x undefinded ist führe aus:
            document.getElementById(str_land_id).innerHTML =""; //Unternehmen - der Zelle wird kein Wert übermittelt
            document.getElementById(str_verbrauch_id).innerHTML =""; //Unternehmen - der Zelle wird kein Wert übermittelt
            document.getElementById(str_unternehmen_id).innerHTML=""; //Unternehmen - der Zelle wird kein Wert übermittelt
        }
    x++; //Unternehmen - Erhöhen der Laufvariable um 1.
    
    }
    //alert("gegenpruefen"+gegenpruefen);
   let z = 0; //Unternehmen - Zurücksetzen der Laufvariable
    while (z < gegenpruefen.length) { //Unternehmen - solange z kleiner als die Menge der Elemnte des Arrays Gegenpruenfen ist
        gegenpruefen[z] =""; //Unternehmen - Den Wert des Arrays an Position z auf "" setzen
        z++; //Unternehmen - Erhöhen der Laufvariable um 1.
    }
    
}

//Sortierfunktionen
//für Land
function spalte_sortieren_Land(){
    if(Land_AnachZ == 0){ //LAND - prüft ob eine Sortierung bereit stattgefunden hat bzw. ob die Variabel Land_AnachZ == 0 ist. Wenn ja:
        Array_Land_output.sort(); //LAND - sortiert von A nach Z 
        Land_AnachZ = 1; //LAND - setzt die Variable AnachZ = 1
    } else {//LAND - wenn nein:
        Array_Land_output.reverse(); //LAND - sortiert von Z nach A 
        Land_AnachZ = 0;//LAND - setzt die Variable AnachZ = 0
    }
    Land_Output(); //LAND - ruft die Funktion Land_Output auf.
}

//für Verbrauch
function spalte_sortieren_Verbrauch(){
    if(Verbrauch_AnachZ == 0){ //Verbauch - prüft ob eine Sortierung bereit stattgefunden hat bzw. ob die Variabel Verbauchd_AnachZ == 0 ist. Wenn ja:
       Array_Verbrauch_output.sort((a,b) => a-b); //Verbauch - sortiert von A nach Z 
       Verbrauch_AnachZ = 1; //Verbauch - setzt die Variable AnachZ = 1
    } else {//Verbauch - wenn nein:
        Array_Verbrauch_output.reverse((a,b) => b-a); //Verbauch - sortiert von Z nach A 
        Verbrauch_AnachZ = 0;//Verbauch - setzt die Variable AnachZ = 0
    }
    Verbrauch_Output(); //Verbauch - ruft die Funktion Verbrauch_Output auf.
}

//Sortierung für unternehmen
function spalte_sortieren_Unternehmen(){
    if(Unternehmen_Anachz == 0){
        Array_unternehmen_output.sort();
        Unternehmen_Anachz = 1;
    } else {
        Array_unternehmen_output.reverse();
        //alert("Array_unternehmen_output"+Array_unternehmen_output);
        Unternehmen_Anachz = 0;
    }
    Unternehmen_Output();
}


//Funktionen für die Filterung
function filtern_nach(){
    var zufilternach = document.getElementById("zusuchen").value;
    
    let x = 0;
    while (x < Land_unsortiert.length) {
        Array_Land_output[x] = Land_unsortiert[x];
        Array_Verbrauch_output[x] = CO2_unsortiert[x];
        Array_unternehmen_output[x] = unternehmen_unsortiert[x];
    x++;
    }  

    if(zufilternach.length == 0){
        
    } else {
        let x = 0;
        while (x < Array_Land_output.length) {
                if(Array_Land_output[x].includes(zufilternach)== 0){
       //         alert("Array_unternehmen_output[x]"+ Array_unternehmen_output[x] + "includes(zufilternach)"+ zufilternach );
                    if(Array_unternehmen_output[x].includes(zufilternach)==0){
                        if(Array_Verbrauch_output[x].includes(zufilternach)==0){
                       // alert("Array_unternehmen_output[x]"+ Array_unternehmen_output[x] + "includes(zufilternach)"+ zufilternach + "deleted");
                            delete Array_Land_output[x];
                            delete Array_Verbrauch_output[x];
                            delete Array_unternehmen_output[x];
                        }
                    }
                } 
            x++;
        }

    }

   Unternehmen_Output();
}