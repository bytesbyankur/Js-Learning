let notes = JSON.parse(localStorage.getItem("notes")) || [];

const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");
const emptyMsg = document.getElementById("emptyMsg");


// Display Notes
function displayNotes() {

    notesList.innerHTML = "";

    // Show empty message if no notes
    if (notes.length === 0) {
        emptyMsg.style.display = "block";
        return;
    }

    emptyMsg.style.display = "none";

    notes.forEach((note, index) => {

        // Create list item
        const li = document.createElement("li");
        li.classList.add("note-item");

        // Create note content div
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("note-content");

        // Note text
        const noteText = document.createElement("p");
        noteText.classList.add("note-text");
        noteText.textContent = note.text;

        // Timestamp
        const noteTime = document.createElement("p");
        noteTime.classList.add("note-time");
        noteTime.textContent = note.time;

        // Append text + time
        contentDiv.appendChild(noteText);
        contentDiv.appendChild(noteTime);

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";

        // Delete functionality
        deleteBtn.addEventListener("click", () => {

            notes.splice(index, 1);

            localStorage.setItem(
                "notes",
                JSON.stringify(notes)
            );

            displayNotes();
        });

        // Append everything
        li.appendChild(contentDiv);
        li.appendChild(deleteBtn);

        notesList.appendChild(li);
    });
}


// Add Note
addBtn.addEventListener("click", () => {

    const text = noteInput.value.trim();

    if (text === "") return;

    // Create note object
    const newNote = {
        text: text,
        time: new Date().toLocaleString()
    };

    // Add to array
    notes.push(newNote);

    // Save to localStorage
    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    // Refresh UI
    displayNotes();

    // Clear input
    noteInput.value = "";
});


// Initial Display
displayNotes();