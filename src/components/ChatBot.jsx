import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSendMessage = async () => {
        // Aquí se hace un POST a la API (ajusta la URL a la de tu API)
        const response = await fetch('https://tuservidor.com/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (response.ok) {
            setMessage('');
            console.log('Mensaje enviado');
        } else {
            console.error('Error al enviar el mensaje');
        }
    };

    return (
        <div className="fixed bottom-5 right-5">
            {isOpen ? (
                <div className="bg-black shadow-lg rounded-lg p-4 w-80 border-2 border-indigo-700">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Chatbot</h2>
                        <button
                            className="p-2 rounded-full hover:bg-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="h-40 border rounded p-2 mb-2 overflow-y-auto">
                        {/* Aquí se mostrarán los mensajes en el futuro */}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
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