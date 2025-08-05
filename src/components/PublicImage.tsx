interface PublicImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{}

export default function PublicImage({src, ...props}:  PublicImageProps){
  return <img src={`${import.meta.env.BASE_URL}${src}`}  {...props}/>
}