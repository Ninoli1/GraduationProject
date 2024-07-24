declare module 'canvas-confetti' {
    interface Options {
      // Define options if needed, e.g., colors, particle count, etc.
      // This is optional and can be extended based on library documentation.
    }
  
    function confetti(options?: Options): Promise<void> | null;
  
    export default confetti;
  }
  