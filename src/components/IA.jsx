import { useEffect } from "react";

export default function IA() {
  useEffect(() => {
    // Evita carregar duas vezes
    if (window.codyLoaded) return;
    window.codyLoaded = true;

    // Configuração global
    window.codySettings = {
      widget_id: "9f112c67-dfbb-4ea6-b093-c112b26aeb40",
    };

    // Cria o script
    const script = document.createElement("script");
    script.src = "https://trinketsofcody.com/cody-widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      script.remove();
      window.codyLoaded = false;
    };
  }, []);

  return null; // widget é injetado automaticamente
}