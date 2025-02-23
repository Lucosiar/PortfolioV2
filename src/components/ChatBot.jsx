import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async () => {
        
        const newMessages = [...messages, {sender: "user", text: message}];
        setMessages(newMessages);
        setMessage("");

        try {
            // Hacer petición al backend
            const response = await fetch('http://127.0.0.1:8000/chat/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessages([...newMessages, { sender: "bot", text: data.reply }]);
            } else {
                console.error("Error al obtener la respuesta del chatbot");
            }
        } catch (error) {
            console.error("Error en la comunicación con la API:", error);
        }
    };

    return (
        <div className="fixed bottom-6 right-6">
            {isOpen ? (
                <div className="bg-black shadow-lg rounded-lg p-4 w-80 border-2 border-indigo-700">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <img src="/src/assets/avatar/avatar1.jpeg" className="rounded-full w-10 h-10 mr-2" />
                            <h2 className="text-lg font-semibold">Chatbot</h2>
                        </div>
                        <button
                            className="p-2 rounded-full hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>
                    {/**Contenedor de mensajes */}
                    <div className="h-64 border rounded p-2 mb-2 overflow-y-auto bg-gray-800 text-white">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 my-1 rounded-lg ${msg.sender === "user" ? "bg-indigo-700 self-end text-right" : "bg-gray-700 self-start text-left"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                            placeholder="Escribe un mensaje..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            onClick={handleSendMessage}
                            className="ml-2 p-2 bg-indigo-700 text-white rounded-full hover:bg-indigo-900"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-3 bg-indigo-700 text-white rounded-full shadow-lg hover:bg-indigo-900 transition"
                >
                    <MessageCircle size={24} />
                </button>
            )}
        </div>
    );
}

export default Chatbot;