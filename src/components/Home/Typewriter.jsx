import React, { useEffect, useState } from "react";
import "./Typewriter.css";

export default function Typewriter({
  words = [
    "Full Stack Developer",
    "Software Developer",
    "Problem Solver",
    "UI/UX Enthusiast",
    "React Enthusiast",
  ],
  typingSpeed = 120, // ms per character typed
  deletingSpeed = 60, // ms per character deleted
  pauseTime = 1200, // ms to wait after a word is typed
  className = "typewriter-wrapper",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing characters
      timeoutId = setTimeout(() => {
        setCharIndex((i) => i + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting characters
      timeoutId = setTimeout(() => {
        setCharIndex((i) => i - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Word complete → pause then start deleting
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      // Word deleted → move to next word
      setIsDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeoutId);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  const visibleText = words[wordIndex % words.length].slice(0, charIndex);

  return (
    <div className={className}>
      <span aria-live="polite" aria-atomic="true" className="typewriter-text">
        {visibleText}
      </span>
      <span aria-hidden="true" className="typewriter-cursor">
        |
      </span>
    </div>
  );
}
