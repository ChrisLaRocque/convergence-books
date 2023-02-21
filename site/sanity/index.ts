import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import { toHTML } from "@portabletext/to-html";

const client = sanityClient({
	projectId: import.meta.env.SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2021-10-21",
	useCdn: true,
});
const builder = imageUrlBuilder(client);

export async function pageBySlug(slug: string) {
	return await client
		.fetch(`*[_type=='page' && slug == '${slug}']`)
		.then((page) => {
			return page;
		});
}
export async function allPostSlugs() {
	return await client.fetch(`*[_type == 'post'] {slug}`);
}
export async function postBySlug(slug: string) {
	return await client
		.fetch(`*[_type == 'post' && slug == '${slug}']`)
		.then((post) => {
			post = post[0]; // I'm so ready to be told a better way to do this
			// if (post?.content) {
			// 	// If portable text is present, convert to html
			// 	post.html = toHTML(post.content);
			// }
			return post;
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
