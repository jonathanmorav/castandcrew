interface WebsiteEmbedProps {
  title: string;
  url: string;
  description?: string;
}

const WebsiteEmbed = ({ title, url, description }: WebsiteEmbedProps) => {
  return (
    <div className="w-full h-full bg-white">
      {/* Embed Container - Full Height */}
      <iframe
        src={url}
        className="w-full h-full border-0"
        title={title}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        loading="lazy"
        style={{ 
          display: 'block',
          border: 'none',
          margin: 0,
          padding: 0
        }}
      />
    </div>
  );
};

export default WebsiteEmbed;
