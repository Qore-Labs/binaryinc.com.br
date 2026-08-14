"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useLenis } from "lenis/react";

interface CardModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: CardModalProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) setShouldRender(true);
  }

  useEffect(() => {
    if (!shouldRender) return;

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        lenis?.stop();
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          overlay,
          { opacity: 0 },
          { opacity: 1, duration: 0.4 }
        ).fromTo(
          panel,
          { opacity: 0, y: 24, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          "-=0.25"
        );
      } else {
        lenis?.start();
        document.body.style.overflow = "";

        const tl = gsap.timeline({
          defaults: { ease: "power2.in" },
          onComplete: () => setShouldRender(false),
        });
        tl.to(panel, { opacity: 0, y: 16, scale: 0.96, duration: 0.3 }).to(
          overlay,
          { opacity: 0, duration: 0.25 },
          "-=0.15"
        );
      }
    });

    return () => ctx.revert();
  }, [isOpen, shouldRender, lenis]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-(--dark-blue-02)/60 backdrop-blur-md p-4"
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl shadow-black/20"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute cursor-pointer right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-(--dark-blue-02)/50 transition-colors duration-200 hover:bg-(--dark-blue-02)/5 hover:text-(--dark-blue-02)"
        >
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
            <path
              d="M1 1L17 17M17 1L1 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
