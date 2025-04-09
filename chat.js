function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value.trim();
    if (!message) return;
    
    let chatbox = document.getElementById("chatbox");
    let userMessage = document.createElement("div");
    userMessage.className = "mb-2 p-2 rounded-lg max-w-xs bg-blue-500 text-white self-end ml-auto";
    userMessage.textContent = message;
    chatbox.appendChild(userMessage);
    inputField.value = "";
    inputField.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            e.preventDefault()
            sendMessage()
        }
    })
    function sendMessage(){
        if(message==="") return;
        // appending the user message
        userMessage.className = "mb-2 p-2 rounded-lg max-w-xs bg-blue-500 text-white self-end ml-auto";
    userMessage.textContent = message;
    chatbox.appendChild(userMessage);
    }



    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.className = "mb-2 p-2 rounded-lg max-w-xs bg-gray-200 text-gray-900";
        botMessage.textContent = "I'm just a simple chatbot!"; 
        chatbox.appendChild(botMessage);
    }, 1000);
}