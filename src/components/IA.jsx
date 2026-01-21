import { useEffect } from "react";

export default function IA() {
  useEffect(() => {
    // Evita carregar duas vezes
    if (window.chtlLoaded) return;
    window.chtlLoaded = true;

    // Configuração do Chatling
    window.chtlConfig = {
      chatbotId: "8158797463"
    };

    // Cria o script do Chatling
    const script = document.createElement("script");
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;
    script.id = "chtl-script";
    script.setAttribute("data-id", "8158797463");
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      script.remove();
      window.chtlLoaded = false;
    };
  }, []);

  return null; // widget é injetado automaticamente
}