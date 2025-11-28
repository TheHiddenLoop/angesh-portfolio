import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const AiBot = () => {
    useEffect(() => {
        createChat({
            webhookUrl: 'https://aryac.app.n8n.cloud/webhook/74b8072f-6ab8-445d-a93f-5ee2b4feec0f/chat',
            initialMessages: [
                'Hi there! 👋',
                'I am Angesh Chauhan’s personal assistant. How can I help you?'
            ],
            i18n: {
                en: {
                    title: 'Personal Assistant',
                    subtitle: 'MERN Developer | Freelance & Hiring Support',
                    footer: '',
                    getStarted: 'New Conversation',
                    inputPlaceholder: 'Type your question..',
                },
            },
        });

    }, []);

    return (<div></div>);
};