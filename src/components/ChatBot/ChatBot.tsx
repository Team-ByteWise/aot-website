import { useEffect } from "react";

declare global {
  interface Window {
    botpressWebChat: BotpressWebChatType;
  }
}

type BotpressWebChatType = {
  init: (config: BotpressWebChatConfig) => void;
};

type BotpressWebChatConfig = {
  composerPlaceholder: string;
  botConversationDescription: string;
  botId: string;
  hostUrl: string;
  messagingUrl: string;
  clientId: string;
  webhookId: string;
  lazySocket: boolean;
  themeName: string;
  botName: string;
  avatarUrl: string;
  stylesheet: string;
  frontendVersion: string;
  theme: string;
  themeColor: string;
  allowedOrigins: string[];
};

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Ask AOTAssist.....",
        botConversationDescription: "This is an AI assistant of AOT",
        botId: "5c13bc74-a41e-41db-8c43-79e70ad410ae",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "5c13bc74-a41e-41db-8c43-79e70ad410ae",
        webhookId: "9eed1bc6-65db-4cb0-a745-b191fc9493bc",
        lazySocket: true,
        themeName: "prism",
        botName: "AOTAssist",
        avatarUrl:
          "https://static.vecteezy.com/system/resources/thumbnails/021/640/011/small/3d-chatbot-icon-isolated-on-white-background-3d-artificial-intelligence-business-and-technology-concept-cartoon-minimal-style-3d-online-support-icon-render-illustration-vector.jpg",
        stylesheet:
          "https://webchat-styler-css.botpress.app/prod/5ebd1b43-27c7-4b89-9892-5600afe6609c/v47157/style.css",
        frontendVersion: "v1",
        theme: "prism",
        themeColor: "#2563eb",
        allowedOrigins: [],
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default ChatBot;
