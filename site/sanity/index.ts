import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
	projectId: import.meta.env.SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2021-10-21",
	useCdn: true,
});
const builder = imageUrlBuilder(client);

export async function pageBySlug(slug: string) {
	return await client.fetch(`*[slug == "${slug}"]`).then((page) => {
		return page;
	});
}
type SourceObject = {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
};
export function urlFor(source: SourceObject) {
	return builder.image(source);
}
