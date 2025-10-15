"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Typed from "typed.js";

export default function TerminalBox() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const whoamiOutputEl = useRef<HTMLSpanElement>(null); // Ref para el output de whoami
  const lsOutputEl = useRef<HTMLSpanElement>(null); // Ref para el output de ls (carpetas raíz)
  const cdOutputEl = useRef<HTMLSpanElement>(null); // Ref para el output de cd/ls (contacto.txt)
  const catOutputEl = useRef<HTMLSpanElement>(null); // Ref para el output de cat (contenido)
  
  const [cycle, setCycle] = useState(0); 
  const [showWhoamiOutput, setShowWhoamiOutput] = useState(false);
  const [showLsPrompt, setShowLsPrompt] = useState(false); 
  const [showLsOutput, setShowLsOutput] = useState(false); 
  const [showCdPrompt, setShowCdPrompt] = useState(false); 
  const [showCdOutput, setShowCdOutput] = useState(false);
  const [showCatPrompt, setShowCatPrompt] = useState(false); 
  const [showCatOutput, setShowCatOutput] = useState(false);
  const [showClsPrompt, setShowClsPrompt] = useState(false); 
  // const [showClsCommandCompleted, setShowClsCommandCompleted] = useState(false); 
  const [cleared, setCleared] = useState(false); 

  const whoamiText = "whoami";
  const lsText = "ls"; 
  const cdText = "cd contact && ls";
  const catText = "cat contactme.txt";
  const clsText = "cls"; 
  
  const [displayedWhoami, setDisplayedWhoami] = useState("");
  const [displayedLs, setDisplayedLs] = useState("");
  const [displayedCd, setDisplayedCd] = useState("");
  const [displayedCat, setDisplayedCat] = useState("");
  const [displayedCls, setDisplayedCls] = useState("");

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  // Reset all states for the loop
  useEffect(() => {
    if (cycle > 0) {
      setShowWhoamiOutput(false);
      setShowLsPrompt(false);
      setShowLsOutput(false);
      setShowCdPrompt(false);
      setShowCdOutput(false);
      setShowCatPrompt(false);
      setShowCatOutput(false);
      setShowClsPrompt(false);
      // setShowClsCommandCompleted(false);
      setCleared(false);
      setDisplayedWhoami("");
      setDisplayedLs("");
      setDisplayedCd("");
      setDisplayedCat("");
      setDisplayedCls("");
    }
  }, [cycle]);

  // Command: whoami
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedWhoami(whoamiText.slice(0, i));
      i++;
      if (i > whoamiText.length) {
        clearInterval(interval);
        setTimeout(() => setShowWhoamiOutput(true), 500);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [cycle]);

  // Output: whoami
  useEffect(() => {
    if (showWhoamiOutput && whoamiOutputEl.current && !cleared) {
      const scrollInterval = setInterval(scrollToBottom, 60);
      const fullOutput = "I'm José, but my friends used to call me Luc or Lucero.\n I'm 21 years old. \nI love linux.";
      const typed = new Typed(whoamiOutputEl.current, {
        strings: [fullOutput],
        typeSpeed: 75,
        loop: false,
        showCursor: false,
        onComplete: () => {
          clearInterval(scrollInterval);
          setTimeout(() => setShowLsPrompt(true), 500);
        },
      });
      return () => { clearInterval(scrollInterval); typed.destroy(); };
    }
  }, [showWhoamiOutput, cleared, scrollToBottom]);

  // Command: ls
  useEffect(() => {
    if (showLsPrompt) {
      const delay = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedLs(lsText.slice(0, i));
          i++;
          if (i > lsText.length) {
            clearInterval(interval);
            setTimeout(() => setShowLsOutput(true), 500);
          }
        }, 300);
        return () => clearInterval(interval);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [showLsPrompt]);

  // Output: ls
  useEffect(() => {
    if (showLsOutput && lsOutputEl.current && !cleared) {
      const scrollInterval = setInterval(scrollToBottom, 60);
      const lsOutputText = "tools/\nprojects/\nconctact/";
      const typedLsOutput = new Typed(lsOutputEl.current, {
        strings: [lsOutputText],
        typeSpeed: 75,
        loop: false,
        showCursor: false,
        onComplete: () => {
          clearInterval(scrollInterval);
          setTimeout(() => setShowCdPrompt(true), 1000);
        },
      });
      return () => { clearInterval(scrollInterval); typedLsOutput.destroy(); };
    }
  }, [showLsOutput, cleared, scrollToBottom]);

  // Command: cd contacto && ls
  useEffect(() => {
    if (showCdPrompt) {
      const delay = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedCd(cdText.slice(0, i));
          i++;
          if (i > cdText.length) {
            clearInterval(interval);
            setTimeout(() => setShowCdOutput(true), 500);
          }
        }, 200);
        return () => clearInterval(interval);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [showCdPrompt]);

  // Output: cd contacto && ls
  useEffect(() => {
    if (showCdOutput && cdOutputEl.current && !cleared) {
      const scrollInterval = setInterval(scrollToBottom, 60);
      const cdOutputText = "contactme.txt";
      const typedCdOutput = new Typed(cdOutputEl.current, {
        strings: [cdOutputText],
        typeSpeed: 75,
        loop: false,
        showCursor: false,
        onComplete: () => {
          clearInterval(scrollInterval);
          setTimeout(() => setShowCatPrompt(true), 1000);
        },
      });
      return () => { clearInterval(scrollInterval); typedCdOutput.destroy(); };
    }
  }, [showCdOutput, cleared, scrollToBottom]);

  // Command: cat contacto.txt
  useEffect(() => {
    if (showCatPrompt) {
      const delay = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedCat(catText.slice(0, i));
          i++;
          if (i > catText.length) {
            clearInterval(interval);
            setTimeout(() => setShowCatOutput(true), 500);
          }
        }, 200);
        return () => clearInterval(interval);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [showCatPrompt]);

  // Output: cat contacto.txt
  useEffect(() => {
    if (showCatOutput && catOutputEl.current && !cleared) {
      const scrollInterval = setInterval(scrollToBottom, 60);
      const catOutputText = "Mail: joserl.lucero.17@gmail.com\nGitHub: https://github.com/lucdev-code\nLinkedIn: https://linkedin.com/in/joselucero\nTel: +52 464 651 6135\n\nConctact me to work togheter!";
      const typedCatOutput = new Typed(catOutputEl.current, {
        strings: [catOutputText],
        typeSpeed: 75,
        loop: false,
        showCursor: false,
        onComplete: () => {
          clearInterval(scrollInterval);
          setTimeout(() => setShowClsPrompt(true), 1000);
        },
      });
      return () => { clearInterval(scrollInterval); typedCatOutput.destroy(); };
    }
  }, [showCatOutput, cleared, scrollToBottom]);

  // Command: cls
  useEffect(() => {
    if (showClsPrompt) {
      const delay = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedCls(clsText.slice(0, i));
          i++;
          if (i > clsText.length) {
            clearInterval(interval);
            setTimeout(() => {
              setCleared(true);
              setTimeout(() => setCycle(prev => prev + 1), 1000);
            }, 500);
          }
        }, 300);
        return () => clearInterval(interval);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [showClsPrompt]);

  // Scroll to bottom whenever content changes
  useEffect(() => {
    scrollToBottom();
  }, [displayedWhoami, showWhoamiOutput, displayedLs, showLsOutput, displayedCd, showCdOutput, displayedCat, showCatOutput, displayedCls, cleared, scrollToBottom]);

  return (
    <div className="w-full max-w-2xl mx-auto my-8 bg-gray-900 border-4 border-green-600/30 rounded-lg shadow-2xl overflow-hidden select-none overflow-y-hidden overflow-x-hidden">
      <div className="flex items-center justify-start p-2 bg-gray-800 border-b border-green-600/20">
        <div className="flex space-x-2 ml-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <div className="ml-2 text-xs text-green-400 font-mono tracking-wider">Terminal</div>
      </div>

      <div
        ref={terminalRef}
        className={`bg-black text-green-400 font-mono p-4 space-y-2 h-64 overflow-y-auto selection:bg-green-900/50 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
          cleared ? 'opacity-0 transition-opacity duration-500' : ''
        }`}
      >
        {!cleared ? (
          <>
            {/* Command: whoami */}
            <p className="text-sm">
              <span className="text-gray-400">luc@dev:~$ </span>
              {displayedWhoami}
              {!showWhoamiOutput && <span className="animate-pulse">_</span>}
            </p>

            {/* Output: whoami */}
            {showWhoamiOutput && (
              <div className="text-sm pl-8">
                <span ref={whoamiOutputEl} />
              </div>
            )}

            {/* Command: ls */}
            {showLsPrompt && (
              <p className="text-sm mt-4">
                <span className="text-gray-400">luc@dev:~$ </span>
                {displayedLs}
                {displayedLs.length < lsText.length && <span className="animate-pulse">_</span>}
              </p>
            )}

            {/* Output: ls */}
            {showLsOutput && (
              <div className="text-sm pl-8">
                <span ref={lsOutputEl} className="text-green-500" />
              </div>
            )}

            {/* Command: cd contacto && ls */}
            {showCdPrompt && (
              <p className="text-sm mt-4">
                <span className="text-gray-400">luc@dev:~$ </span>
                {displayedCd}
                {displayedCd.length < cdText.length && <span className="animate-pulse">_</span>}
              </p>
            )}

            {/* Output: cd contacto && ls */}
            {showCdOutput && (
              <div className="text-sm pl-8">
                <span ref={cdOutputEl} className="text-green-500" />
              </div>
            )}

            {/* Command: cat contacto.txt */}
            {showCatPrompt && (
              <p className="text-sm mt-4">
                <span className="text-gray-400">luc@dev:contacto$ </span>
                {displayedCat}
                {displayedCat.length < catText.length && <span className="animate-pulse">_</span>}
              </p>
            )}

            {/* Output: cat contacto.txt */}
            {showCatOutput && (
              <div className="text-sm pl-8">
                <span ref={catOutputEl} />
              </div>
            )}

            {/* Command: cls */}
            {showClsPrompt && (
              <p className="text-sm mt-4">
                <span className="text-gray-400">luc@dev:contacto$ </span>
                {displayedCls}
                {displayedCls.length < clsText.length && <span className="animate-pulse">_</span>}
              </p>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500"></div>
        )}
      </div>
    </div>
  );
}