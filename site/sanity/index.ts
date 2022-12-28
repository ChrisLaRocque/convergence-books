import sanityClient from "@sanity/client";
const client = sanityClient({
	projectId: import.meta.env.SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2021-10-21",
	useCdn: true,
});

export async function pageBySlug(slug: string) {
	return await client.fetch(`*[slug == "${slug}"]`).then((page) => {
		return page;
	});
}
