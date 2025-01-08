import React, { useEffect, useRef } from "react";
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';

import Sidebar from "src/components/layout/sidebar";

const Terminals = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Terminal();
    terminal.loadAddon(new WebLinksAddon());

    if (terminalRef.current) {
      terminal.open(terminalRef.current);
      terminal.writeln('Hello world');
    }

    return () => {
      terminal.dispose();
    };
  }, []);

  return (
    <>
      <Sidebar />
      <div className="main--section configure--view">
        Terminal
        <div ref={terminalRef} 
        style={{ height: "300px", width: "300px", background: "#000" }}/>
      </div>
    </>
  );
};

export default Terminals;
