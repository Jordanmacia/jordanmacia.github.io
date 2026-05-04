import React, { useEffect, useRef } from 'react';

const DynamicFavicon = () => {
  const workerRef = useRef(null);
  const originalFavicon = useRef(null);
  const letters = ['J', 'O', 'R', 'D', 'A', 'N'];
  const interval = 500; // 500ms per letter

  useEffect(() => {
    // Save original favicon
    const faviconLink = document.querySelector('link[rel~="icon"]');
    if (faviconLink) {
      originalFavicon.current = faviconLink.href;
    }

    // Create Web Worker for background animation
    createWorker();

    return () => {
      stopAnimation();
      // Restore original favicon
      if (faviconLink && originalFavicon.current) {
        faviconLink.href = originalFavicon.current;
      }
    };
  }, []);

  const createWorker = () => {
    // Create worker code as a blob
    const workerCode = `
      let currentIndex = 0;
      let lastUpdate = 0;
      const letters = ['J', 'O', 'R', 'D', 'A', 'N'];
      const interval = ${interval};

      // Create OffscreenCanvas for rendering
      const canvas = new OffscreenCanvas(32, 32);
      const ctx = canvas.getContext('2d');

      function animate() {
        const now = Date.now();
        
        if (now - lastUpdate > interval) {
          lastUpdate = now;
          
          // Clear canvas
          ctx.fillStyle = '#ff5259';
          ctx.fillRect(0, 0, 32, 32);
          
          // Draw current letter
          ctx.fillStyle = 'white';
          ctx.font = 'bold 20px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(letters[currentIndex], 16, 16);
          
          // Convert to data URL and send to main thread
          canvas.convertToBlob({ type: 'image/png' }).then(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
              self.postMessage({
                type: 'updateFavicon',
                dataUrl: reader.result
              });
            };
            reader.readAsDataURL(blob);
          });
          
          // Next letter
          currentIndex = (currentIndex + 1) % letters.length;
        }
        
        // Continue animation (works even when tab is inactive)
        setTimeout(() => animate(), 50);
      }

      // Start animation
      animate();

      // Handle messages from main thread
      self.onmessage = (e) => {
        if (e.data.type === 'stop') {
          self.close();
        }
      };
    `;

    // Create blob URL for worker
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);

    // Create and start worker
    const worker = new Worker(workerUrl);
    workerRef.current = worker;

    // Handle messages from worker
    worker.onmessage = (e) => {
      if (e.data.type === 'updateFavicon') {
        updateFavicon(e.data.dataUrl);
      }
    };

    worker.onerror = (error) => {
      console.error('Worker error:', error);
      // Fallback to main thread animation
      startMainThreadAnimation();
    };
  };

  const startMainThreadAnimation = () => {
    let currentIndex = 0;
    let lastUpdate = 0;
    let animationId;

    const animate = () => {
      const now = Date.now();
      
      if (now - lastUpdate > interval) {
        lastUpdate = now;
        
        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        // Red background
        ctx.fillStyle = '#ff5259';
        ctx.fillRect(0, 0, 32, 32);
        
        // Current letter
        ctx.fillStyle = 'white';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(letters[currentIndex], 16, 16);
        
        // Update favicon
        updateFavicon(canvas.toDataURL('image/png'));
        
        // Next letter
        currentIndex = (currentIndex + 1) % letters.length;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();
  };

  const stopAnimation = () => {
    if (workerRef.current) {
      workerRef.current.postMessage({ type: 'stop' });
      workerRef.current.terminate();
      workerRef.current = null;
    }
  };

  const updateFavicon = (dataUrl) => {
    let link = document.querySelector('link[rel~="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = dataUrl;
  };

  return null;
};

export default DynamicFavicon;
