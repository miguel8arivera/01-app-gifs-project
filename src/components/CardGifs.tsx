type Props = {
  id?: string;
  title: string;
  url: string;
};

const CardGifs = ({ title, url }: Props) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default CardGifs;
