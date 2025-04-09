document.addEventListener("DOMContentLoaded", () => {
    let history = localStorage.getItem("chatHistory");
    let historyBox = document.getElementById("historyBox");
    
    if (history) {
        historyBox.innerHTML = history;
    }
});

function clearHistory() {
    localStorage.removeItem("chatHistory");
    document.getElementById("historyBox").innerHTML = "<p class='text-gray-500 text-center'>No chat history available.</p>";
}