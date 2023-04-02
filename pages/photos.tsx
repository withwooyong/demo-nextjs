import HeadInfo from "@/components/HeadInfo";
import photoStyles from "../styles/Photo.module.css";
import Link from "next/link";
import Image from "next/image";
const photos = ({ photos }: any) => {
  return (
    <div>
      <HeadInfo title="photos"></HeadInfo>
      <h1>photos</h1>
      <ul className={photoStyles.photos}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <Image
                src={photo.thumbnailUrl}
                width={100}
                height={100}
                alt={photo.title}
              />
            </Link>
            <span>{photo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
  };
};

export default photos;
