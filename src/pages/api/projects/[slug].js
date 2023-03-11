import { projects } from "./../../../data/projectsData";

export default function userHandler(req, res) {
	const { query, method } = req;
	// const slug = query.slug;
	const { slug } = query;
	console.log(query);

	const project = projects.find((p) => p.slug === slug);

	switch (method) {
		case "GET":
			// Get data from your database
			res.status(200).json({ project });
			break;
		// case "PUT":
		// 	// Update or create data in your database
		// 	res.status(200).json({ Slug: slug || `User ${id}` });
		// 	break;
		default:
			res.setHeader("Allow", ["GET"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
