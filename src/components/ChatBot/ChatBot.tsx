import { PaletteMode } from "@mui/material";
import React from "react";
import { useEffect } from "react";

declare global {
  interface Window {
    botpressWebChat: BotpressWebChatType;
  }
}

type BotpressWebChatType = {
  init: (config: BotpressWebChatConfig) => void;
  mergeConfig: (config: BotpressWebChatConfig) => void;
};

type BotpressWebChatConfig = {
  composerPlaceholder?: string;
  botConversationDescription?: string;
  botId?: string;
  hostUrl?: string;
  messagingUrl?: string;
  clientId?: string;
  webhookId?: string;
  lazySocket?: boolean;
  themeName?: string;
  botName?: string;
  avatarUrl?: string;
  stylesheet?: string;
  frontendVersion?: string;
  theme?: string;
  themeColor?: string;
  allowedOrigins?: string[];
};

interface ChatBotProps {
  mode: PaletteMode;
}

const ChatBot = ({ mode }: ChatBotProps) => {
  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  useEffect(() => {
    if (scriptLoaded) {
      window.botpressWebChat.mergeConfig({
        themeName: "prism",
        botName: "AOTAssist",
        avatarUrl:
          mode === "dark"
            ? "https://i.ibb.co/ZGQg4k6/image.png"
            : "https://i.ibb.co/6JMFYkV/icon-192.png",
        stylesheet:
          mode === "dark"
            ? "https://webchat-styler-css.botpress.app/prod/code/cd6d1743-a820-411e-a323-66e621e871c1/v48044/style.css"
            : "https://webchat-styler-css.botpress.app/prod/code/cd6d1743-a820-411e-a323-66e621e871c1/v64149/style.css",
        frontendVersion: "v1",
        theme: "prism",
        themeColor: mode === "dark" ? "#064079" : "#0A66C2",
        allowedOrigins: [],
      });
    }
  }, [scriptLoaded, mode]);

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
          mode === "dark"
            ? "https://i.ibb.co/ZGQg4k6/image.png"
            : "https://i.ibb.co/6JMFYkV/icon-192.png",
        stylesheet:
          mode === "dark"
            ? "https://webchat-styler-css.botpress.app/prod/code/cd6d1743-a820-411e-a323-66e621e871c1/v48044/style.css"
            : "https://webchat-styler-css.botpress.app/prod/code/cd6d1743-a820-411e-a323-66e621e871c1/v64149/style.css",
        frontendVersion: "v1",
        theme: "prism",
        themeColor: mode === "dark" ? "#064079" : "#0A66C2",
        allowedOrigins: [],
      });
      setScriptLoaded(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id="webchat" />;
};

export default ChatBot;
