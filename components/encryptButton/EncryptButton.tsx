"use client";

import { FC, ReactElement, useRef, useState } from "react";

interface EncryptButtonProps {
  title: string;
  cyclesPerLetter?: number;
  shuffleTime?: number;
  chars?: string;
  icon?: ReactElement;
}

const EncryptButton: FC<EncryptButtonProps> = ({
  title,
  cyclesPerLetter = 2,
  shuffleTime = 50,
  chars = "!@#$%^&*():{};|,.<>/?",
  icon,
}) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [text, setText] = useState<string>(title);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = title
        .split("")
        .map((char, index) => {
          if (pos / cyclesPerLetter > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * chars.length);
          return chars[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= title.length * cyclesPerLetter) {
        stopScramble();
      }
    }, shuffleTime);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setText(title);
  };

  return (
    <button
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative transform overflow-hidden rounded border border-neutral-500 bg-neutral-700 px-4 py-2.5 font-mono font-medium uppercase text-neutral-300 transition-transform hover:scale-105 hover:text-indigo-300 active:scale-95"
    >
      <div className="relative z-10 flex items-center gap-2">
        {icon}
        <span>{text}</span>
      </div>
      <span className="via-gray-50-400/100 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% to-indigo-400/0 to-60% opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
};

export default EncryptButton;
