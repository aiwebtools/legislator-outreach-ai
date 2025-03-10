
import { useEffect, useRef } from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
}

const YoutubeEmbed = ({ videoId, title = "YouTube video player", autoplay = true }: YoutubeEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a class when the element is in view
        if (entry.isIntersecting) {
          containerRef.current?.classList.add('animate-scale-in');
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full aspect-video overflow-hidden rounded-lg neon-border opacity-0 transition-opacity duration-700"
      style={{ opacity: 0 }}
    >
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=0&controls=1&origin=${window.location.origin}&rel=0&vq=hd1080`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
