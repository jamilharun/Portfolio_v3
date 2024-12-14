export default function ProjectDisplayContainter({
  image,
  alt,
  desc,
  title,
  cont,
  imgsize,
  link,
}) {
  const handleClick = () => {};

  return (
    <div
      onClick={handleClick}
      className={`break-inside-avoid rounded-xl overflow-hidden ${cont}`}
    >
      <img src={image} alt={alt} className={"rounded-t-xl " + imgsize} />
      <div className="p-3 relative">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
