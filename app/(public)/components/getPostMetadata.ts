import fs from "fs"
import matter from "gray-matter"
import { PostMetadata } from "./PostMetadata"
import { join } from "path"
import { parse } from "date-fns"

const getPostMetadata = (): PostMetadata[] => {
	const folder = "posts/"
	const files = fs.readdirSync(join(process.cwd(), folder))
	const mdPosts = files.filter((file) => file.endsWith(".md"))
	const posts = mdPosts.map((fileName) => {
		const fileContents = fs.readFileSync(
			join(process.cwd(), `posts/${fileName}`),
			"utf8"
		)
		const matterResult = matter(fileContents)
		return {
			id: matterResult.data.id,
			title: matterResult.data.title,
			date: matterResult.data.date,
			excerpt: matterResult.data.excerpt,
			imageSrc: matterResult.data.imageSrc,
			author: matterResult.data.author,
			tags: matterResult.data.tags,
			slug: fileName.replace(".md", ""),
		}
	})

	return posts
		.sort(
			(a, b) =>
				parse(a.date, "d MMMM yyyy", new Date()).valueOf() -
				parse(b.date, "d MMMM yyyy", new Date()).valueOf()
		)
		.reverse()
}

export default getPostMetadata
