function sleep(ms){
   return new Promise(resolve => setTimeout(resolve,ms))
}
/**
 * Appends flickering dots to an element for a set duration.
 * @param {string} id - The element ID to flicker.
 * @param {number} duration - Total time to flicker (in ms).
 * @param {number} speed - The time between dot changes (in ms).
 */
async function flickerDots(id, duration = 3000, speed = 400) {
    const line = document.getElementById(id);
    if (!line) {
        console.error(`Element with id "${id}" not found for flickering.`);
        return;
    }

    const baseText = line.textContent;
    let elapsed = 0;
    const states = ["."  , ".." , "..."];
    let stateIndex = 0;

    while (elapsed < duration) {
        // Set the text to the base + the current dot state
        line.textContent = baseText + states[stateIndex % states.length];
        stateIndex++;
        
        await sleep(speed);
        elapsed += speed;
    }

    // Set the final state
    line.textContent = baseText + "...";
}

async function typewrite(text,id,delay = 100) {
    const line = document.getElementById(id);
    line.textContent = "";

    for(i=0;i<text.length;i++){
        line.textContent += text.charAt(i);
        await sleep(delay);
    }
}

async function runTypewriterEffect() {
    // Line 1: Type, flicker, then update
    await typewrite("Booting up system", "1", 70);
    await flickerDots("1", 2000, 400); // Flicker on line "1" for 2s
    await sleep(300);
    await typewrite("Booting up system... [OK]", "1", 30); // Overwrite with "OK"

    // Line 2: Type, flicker, then update
    await typewrite("Connecting to secure server", "2", 50);
    await flickerDots("2", 3000, 400); // Flicker on line "2" for 3s
    await sleep(300);
    await typewrite("Connecting to secure server... [OK]", "2", 30);

    // Line 3: Type, flicker, then update
    await typewrite("Bypassing firewall", "3", 70);
    await flickerDots("3", 1500, 400); // Flicker on line "3" for 1.5s
    await sleep(300);
    await typewrite("Bypassing firewall... [DONE]", "3", 30);
    
    // Other lines
    await typewrite("Accessing mainframe... [GRANT]", "4", 50);
    await typewrite("Downloading data... [|||||.....] 50%", "5", 50);
    await typewrite("Initiating protocol 'Viper'... [RUNNING]", "6", 70);
    await sleep(1000);
    await typewrite("Access granted. Welcome, user.", "7", 100);
}

document.addEventListener("DOMContentLoaded",runTypewriterEffect);