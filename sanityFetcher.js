import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"
// a function must be exported
export const sanityFetcherClient= sanityClient({
  projectId: 'bdv2x1uj',
  dataset: 'production',
  useCdn:true,
  apiVersion: '2021-08-31'
})

const builder = imageUrlBuilder(sanityFetcherClient);
export function urlFor(source) {
  return builder.image(source);
}