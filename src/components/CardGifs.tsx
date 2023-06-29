type Props = {
  id: string;
  title: string;
  url: string;
};

const CardGifs = ({ title, url }: Props) => {
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default CardGifs;
