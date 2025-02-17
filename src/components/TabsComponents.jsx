import { Tabs } from "flowbite-react";
import { useState } from "react";


export function TabsComponent() {
    const [activeTab, setActiveTab] = useState("IA");

    const tabColors = {
        Backend: "bg-red-700",
        Frontend: "bg-red-700",
        IA: "bg-blue-700",
        Android: "bg-green-700",
    }
    
    const activeColor = tabColors[activeTab] || "bg-gray-700";

  return (
    <div>
      <Tabs
        aria-label="Default tabs"
        variant="default"
        onSelect={(tab) => setActiveTab(tab)}
      >
        <Tabs.Item
          active={activeTab === "Backend"}
          title="Backend"
          onClick={() => setActiveTab("Backend")}
        >
          Backend
        </Tabs.Item>
        <Tabs.Item
          active={activeTab === "Frontend"}
          title="Frontend"
          onClick={() => setActiveTab("Frontend")}
        >
          Frontend
        </Tabs.Item>
        <Tabs.Item
          active={activeTab === "IA"}
          title="IA"
          onClick={() => setActiveTab("IA")}
        >
          IA
        </Tabs.Item>
        <Tabs.Item
          active={activeTab === "Android"}
          title="Android"
          onClick={() => setActiveTab("Android")}
        >
          Android
        </Tabs.Item>
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>

      {/* Contenedor dinámico */}
      <div className={`${activeColor} p-6 text-white mt-4 rounded-lg`}>
        <p>
          Este es el contenido para la pestaña{" "}
          <span className="font-bold">{activeTab}</span>.
        </p>
      </div>
    </div>
  );
}
