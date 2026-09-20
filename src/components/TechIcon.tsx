import React, { useState } from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  darkMode?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5", darkMode = true }) => {
  const [hasError, setHasError] = useState(false);
  const n = name.toLowerCase();

  let iconUrl = '';

  if (n.includes('javascript') || n === 'js') {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/javascript/javascript-original.svg";
  } else if (n.includes('typescript') || n === 'ts') {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/typescript/typescript-original.svg";
  } else if (n.includes('react.js') || n.includes('react')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/react/react-original.svg";
  } else if (n.includes('next.js') || n.includes('next')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/nextjs/nextjs-original.svg";
  } else if (n.includes('redux')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/redux/redux-original.svg";
  } else if (n.includes('html5') || n.includes('html')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/html5/html5-original.svg";
  } else if (n.includes('css3') || n.includes('css') || n.includes('scss')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/css3/css3-original.svg";
  } else if (n.includes('tailwind')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
  } else if (n.includes('node.js') || n.includes('node')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/nodejs/nodejs-original.svg";
  } else if (n.includes('express.js') || n.includes('express')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/express/express-original.svg";
  } else if (n.includes('mongodb') || n.includes('mongo')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/mongodb/mongodb-original.svg";
  } else if (n.includes('postgresql') || n.includes('postgres')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/postgresql/postgresql-original.svg";
  } else if (n.includes('mysql')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/mysql/mysql-original.svg";
  } else if (n.includes('prisma')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/prisma/prisma-original.svg";
  } else if (n.includes('redis')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/redis/redis-original.svg";
  } else if (n.includes('bullmq') || n.includes('rabbitmq') || n.includes('queue')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/rabbitmq/rabbitmq-original.svg";
  } else if (n.includes('websocket') || n.includes('socket')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/socketio/socketio-original.svg";
  } else if (n.includes('fcm') || n.includes('firebase')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/firebase/firebase-plain.svg";
  } else if (n.includes('agora')) {
    iconUrl = "https://cdn.simpleicons.org/agora/099DFD";
  } else if (n.includes('stripe')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/stripe/stripe-plain.svg";
  } else if (n.includes('razorpay')) {
    iconUrl = "https://cdn.simpleicons.org/razorpay/008CFF";
  } else if (n.includes('docker')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/docker/docker-original.svg";
  } else if (n.includes('aws')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg";
  } else if (n.includes('jenkins')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/jenkins/jenkins-original.svg";
  } else if (n.includes('bitbucket')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/bitbucket/bitbucket-original.svg";
  } else if (n.includes('git') && !n.includes('github')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/git/git-original.svg";
  } else if (n.includes('github')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/github/github-original.svg";
  } else if (n.includes('vercel')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/vercel/vercel-original.svg";
  } else if (n.includes('hostinger')) {
    iconUrl = "https://cdn.simpleicons.org/hostinger/673AB7";
  } else if (n.includes('figma')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/figma/figma-original.svg";
  } else if (n.includes('java') && !n.includes('script')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/java/java-original.svg";
  } else if (n.includes('rest') || n.includes('api')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/openapi/openapi-original.svg";
  } else if (n.includes('microservice')) {
    iconUrl = "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/kubernetes/kubernetes-plain.svg";
  }

  const isInvertNeeded = darkMode && (
    n.includes('next.js') || n.includes('express') || n.includes('vercel') || n.includes('github') || n.includes('prisma')
  );

  if (iconUrl && !hasError) {
    return (
      <img
        src={iconUrl}
        alt={name}
        onError={() => setHasError(true)}
        className={`${className} object-contain shrink-0 transition-transform ${isInvertNeeded ? 'brightness-200 invert' : ''}`}
      />
    );
  }

  return (
    <span className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 font-bold text-[9px] flex items-center justify-center shrink-0 font-mono">
      {name.substring(0, 2).toUpperCase()}
    </span>
  );
};
