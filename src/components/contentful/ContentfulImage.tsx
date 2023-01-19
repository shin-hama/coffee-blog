import * as React from 'react'
import Image, {
  ImageLoaderProps,
  ImageProps as NextImageProps
} from 'next/image'

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage: React.FC<NextImageProps> = (props) => {
  return <Image loader={contentfulLoader} {...props} alt={props.alt} />
}

export default ContentfulImage
